import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const isFirebaseEnabled = Boolean(
  cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId
)

export const app = (() => {
  if (!isFirebaseEnabled) return null as any
  return getApps().length ? getApps()[0] : initializeApp(cfg)
})()

export const db = app ? getFirestore(app) : null
export const auth = app ? getAuth(app) : null
export const storage = app ? getStorage(app) : null
export const useStorage = (import.meta.env.VITE_FIREBASE_USE_STORAGE === 'true')
