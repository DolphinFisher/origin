import { Link } from 'react-router-dom'

interface HeaderProps {
  isAdmin: boolean;
  onLogout: () => void;
}

export function Header({ isAdmin, onLogout }: HeaderProps) {
  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center font-bold text-gray-800">AMU</div>
            </div>
            <div>
              <h1 className="text-gray-100">Ankara Medipol Üniversitesi</h1>
              <p className="text-gray-400 mt-1">Hazırlık Sınıfı - Duyuru ve Ödev Platformu</p>
            </div>
          </div>
          
          <div>
            {isAdmin && (
              <div className="flex items-center gap-3">
                <span className="text-gray-400 bg-gray-700 px-4 py-2 rounded-lg">
                  Admin
                </span>
                <button
                  onClick={onLogout}
                  className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  Çıkış Yap
                </button>
              </div>
            )}
            {!isAdmin && (
              <Link
                to="/admin"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Giriş
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
