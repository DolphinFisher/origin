## Hedef
- Mevcut React/TS kodunu çalışır bir Vite projesine entegre etmek.
- Express + Prisma (SQLite) ile basit bir backend kurup API uçları sağlamak.
- Frontend’i bu API’ye bağlayarak duyuru ve ödev verisini DB’den yönetmek.

## Frontend (Vite + React + TS)
- package.json, tsconfig, vite.config, index.html, src/main.tsx eklenir.
- `App.tsx`, `components/**`, `styles/globals.css` → `src/` altına taşınır ve importlar uyarlanır.
- Tailwind v3 + PostCSS kurulumu yapılır; `tailwind.config` içinde `background`, `foreground`, `border`, `primary` vb. renkler CSS değişkenlerine bağlanır.
- `styles/globals.css` içindeki Tailwind uyumlu parçalar korunur; derlemeyi bozabilecek `@custom-variant`/`@theme` bölümleri devre dışı bırakılır veya eşdeğeri sağlanır.
- Kullanılmayan `components/ui/**` dosyaları olduğu gibi bırakılır; yalnızca kullanılan bileşenler derlenecek.
- `Header.tsx` içindeki `figma:asset` importı lokal assete veya placeholder’a çevrilir.

## Backend (Express + Prisma + SQLite)
- `server/index.ts` ile Express API: `/api/announcements`, `/api/assignments` (GET/POST/DELETE/PATCH toggle).
- Prisma şeması:
  - `Announcement`: id (String, cuid), title, content, date, priority enum, images (String[]), files (Json)
  - `Assignment`: id (String, cuid), title, description, dueDate, subject, completed (Bool), images (String[]), files (Json)
- `.env`: `DATABASE_URL=file:./dev.db`
- Migrasyon: `prisma/schema.prisma` + `npx prisma migrate dev`.

## Vite Proxy ve Entegrasyon
- `vite.config.ts` → `/api` isteklerini `http://localhost:3000`’a proxy’ler.
- Frontend veri akışı: `MainApp` içinde ilk yüklemede `fetch('/api/...')`, ekleme/silme/toggle işlemlerinde ilgili endpointlere POST/DELETE/PATCH.
- Admin şifresi `.env` veya sabit olarak kalabilir; minimumda sabit bırakılır.

## Çalıştırma Komutları
- `npm install`
- Frontend: `npm run dev` (5173)
- Backend: `npm run server` (3000)
- (Opsiyonel) `npm run dev:all` ile her ikisini aynı anda çalıştırma.

## Doğrulama
- Frontend açılışı ve listelerin API’den gelmesi.
- Duyuru/ödev ekleme, silme ve tamamlandı toggle işlemleri.

Onay verdiyseniz bu plana göre uygulamaya geçiyorum.