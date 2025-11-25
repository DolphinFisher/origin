import React from 'react'

const events = [
  { title: 'İngilizce Yeterlilik Sınavı (YAZILI)', start: '9.09.2024', end: '9.09.2024' },
  { title: 'İngilizce Yeterlilik Sınavı (SÖZLÜ)', start: '10.09.2024', end: '11.09.2024' },
  { title: 'Sınav Sonuçlarının Yayınlanması', start: '12.09.2024', end: '12.09.2024' },
  { title: 'Sınav Sonucuna İtiraz', start: '12.09.2024', end: '17.09.2024' },
  { title: '1. Dilim Dersleri', start: '29.09.2024', end: '18.11.2024' },
  { title: 'TAT1 (SÖZLÜ)', start: '20.11.2024', end: '21.11.2024' },
  { title: 'TAT1 (YAZILI)', start: '22.11.2024', end: '22.11.2024' },
  { title: 'Mazeret Sınav Başvurusu', start: '24.11.2024', end: '24.11.2024' },
  { title: 'Sınav Sonuçlarının Yayınlanması', start: '24.11.2024', end: '24.11.2024' },
  { title: 'TAT1 Sonucuna İtiraz', start: '24.11.2024', end: '27.11.2024' },
  { title: '2. Dilim Dersleri', start: '24.11.2024', end: '16.01.2025' },
  { title: 'Mazeret Sınavı', start: '27.11.2024', end: '27.11.2024' },
  { title: 'TAT2 (SÖZLÜ)', start: '15.01.2025', end: '16.01.2025' },
  { title: 'TAT2 (YAZILI)', start: '17.01.2025', end: '17.01.2025' },
  { title: 'Mazeret Sınav Başvurusu', start: '15.01.2025', end: '20.01.2025' },
  { title: 'Sınav Sonuçlarının Yayınlanması', start: '20.01.2025', end: '20.01.2025' },
  { title: 'Ara Dönem Muafiyet Sınavı Başvurusu', start: '20.01.2025', end: '23.01.2025' },
  { title: 'TAT2 Sonucuna İtiraz', start: '20.01.2025', end: '23.01.2025' },
  { title: 'Mazeret Sınavı', start: '23.01.2025', end: '23.01.2025' },
  { title: 'Ara Dönem Muafiyet Sınavı', start: '27.01.2025', end: '27.01.2025' },
  { title: '3. Dilim Dersleri', start: '16.02.2025', end: '10.04.2025' },
  { title: 'TAT3 (YAZILI)', start: '11.04.2025', end: '11.04.2025' },
  { title: 'TAT3 (SÖZLÜ)', start: '13.04.2025', end: '14.04.2025' },
  { title: 'Mazeret Sınav Başvurusu', start: '11.04.2025', end: '16.04.2025' },
  { title: 'Sınav Sonuçlarının Yayınlanması', start: '16.04.2025', end: '16.04.2025' },
  { title: 'Mazeret Sınavı', start: '17.04.2025', end: '17.04.2025' },
  { title: 'TAT3 Sonucuna İtiraz', start: '16.04.2025', end: '21.04.2025' },
  { title: '4. Dilim Dersleri', start: '20.04.2025', end: '17.06.2025' },
  { title: 'TAT4 (YAZILI)', start: '22.06.2025', end: '22.06.2025' },
  { title: 'TAT4 (SÖZLÜ)', start: '18.06.2025', end: '19.06.2025' },
  { title: 'Mazeret Sınav Başvurusu', start: '18.06.2025', end: '23.06.2025' },
  { title: 'Sınav Sonuçlarının Yayınlanması', start: '24.06.2025', end: '24.06.2025' },
  { title: 'TAT4 Sonucuna İtiraz', start: '24.06.2025', end: '26.06.2025' },
  { title: 'Mazeret Sınavı', start: '29.06.2025', end: '29.06.2025' },
]

export default function AcademicCalendar() {
  const today = new Date()
  const parse = (s: string) => {
    const [d, m, y] = s.trim().split('.').map((x) => parseInt(x, 10))
    return new Date(y, (m || 1) - 1, d || 1)
  }
  return (
    <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
      <h2 className="text-gray-100 mb-4">Akademik Takvim (2025-2026)</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-200">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">Açıklama</th>
              <th className="px-4 py-2">Başlangıç</th>
              <th className="px-4 py-2">Bitiş</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e, i) => {
              const endDate = parse(e.end)
              endDate.setHours(23, 59, 59, 999)
              const isPast = endDate.getTime() < today.getTime()
              
              const rowCls = `border-t border-gray-700 transition-all duration-300 group ${
                isPast 
                  ? 'bg-gray-700/30 text-gray-500' 
                  : 'hover:bg-gray-700/50'
              }`
              
              const contentCls = isPast ? 'blur-[0.5px] line-through opacity-60 group-hover:blur-none group-hover:opacity-100 group-hover:no-underline transition-all duration-300' : ''

              return (
                <tr key={i} className={rowCls}>
                  <td className="px-4 py-2">
                    <span className={contentCls}>{e.title}</span>
                    {isPast && <span className="ml-2 text-xs text-red-500 font-medium no-underline inline-block group-hover:no-underline group-hover:opacity-100 opacity-70">(Süresi Doldu)</span>}
                  </td>
                  <td className="px-4 py-2">
                    <span className={contentCls}>{e.start}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={contentCls}>{e.end}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
