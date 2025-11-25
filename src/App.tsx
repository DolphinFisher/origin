import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MainApp } from './components/MainApp';
import { AdminLoginModal } from './components/AdminLoginModal';
import { loginAdmin } from './api';
import { auth } from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: Date;
  priority: 'normal' | 'important' | 'urgent';
  images?: string[];
  files?: { name: string; url: string; }[];
  source?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  subject: string;
  completed?: boolean;
  images?: string[];
  files?: { name: string; url: string; }[];
}

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const USE_FIREBASE = import.meta.env.VITE_FIREBASE_ENABLED === 'true'
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

  const handleAdminLogin = async (email: string, password: string) => {
    if (USE_FIREBASE && auth) {
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password)
        setIsAdmin((cred.user.email ?? '') === (ADMIN_EMAIL ?? ''))
        navigate('/')
        return true
      } catch (err: any) {
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          try {
            const cred2 = await createUserWithEmailAndPassword(auth, email, password)
            setIsAdmin((cred2.user.email ?? '') === (ADMIN_EMAIL ?? ''))
            navigate('/')
            return true
          } catch (signupErr) {
            return false
          }
        }
        return false
      }
    }
    const token = await loginAdmin(password)
    if (token) {
      localStorage.setItem('admin_token', token)
      setIsAdmin(true)
      navigate('/')
      return true
    }
    return false
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('admin_token')
    if (USE_FIREBASE && auth) {
      signOut(auth)
    }
  };

  useEffect(() => {
    if (USE_FIREBASE && auth) {
      return onAuthStateChanged(auth, (u) => {
        setIsAdmin(!!u && (u.email ?? '') === (ADMIN_EMAIL ?? ''))
      })
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainApp isAdmin={isAdmin} onLogout={handleLogout} />} />
      <Route path="/admin" element={<AdminLoginModal onLogin={handleAdminLogin} />} />
    </Routes>
  );
}
