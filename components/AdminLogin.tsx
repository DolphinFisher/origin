import { useState } from 'react';
import { Lock, GraduationCap } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError('Hatalı şifre!');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-blue-600 p-4 rounded-2xl mb-4">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-gray-100 mb-2">Ankara Medipol Üniversitesi</h1>
          <p className="text-gray-400">Admin Girişi</p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          <p className="text-gray-300 text-center mb-6">
            Duyuru ve ödev eklemek için admin şifrenizi girin.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <p className="text-gray-400">
                <span className="block mb-1">Demo şifre:</span>
                <code className="text-blue-400">admin123</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Giriş Yap
            </button>

            <a
              href="/"
              className="block text-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              Ana Sayfaya Dön
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
