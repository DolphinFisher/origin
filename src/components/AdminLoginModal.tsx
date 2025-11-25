import { useState } from 'react';
import { X, Lock } from 'lucide-react';

interface AdminLoginModalProps {
  onLogin: (email: string, password: string) => Promise<boolean> | boolean;
}

export function AdminLoginModal({ onLogin }: AdminLoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await onLogin(email.trim(), password.trim());
    if (!success) {
      setError('Giriş başarısız');
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl shadow-xl max-w-md w-full border border-gray-700">
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-center">
          <h2 className="text-gray-100">Admin Girişi</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-4 rounded-full">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          <p className="text-gray-300 text-center">Admin girişi</p>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Admin şifresi"
              required
              autoFocus
            />
            {error && (
              <p className="text-red-400 mt-2">{error}</p>
            )}
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <p className="text-gray-400">E-posta ve şifre ile giriş yapın.</p>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
