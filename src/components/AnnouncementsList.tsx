import { useEffect, useState } from 'react';
import { AlertCircle, Bell, AlertTriangle, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Announcement } from '../App';
import { getExternalPost } from '../api';

interface AnnouncementsListProps {
  announcements: Announcement[];
  onDelete: (id: string) => void;
  isAdmin: boolean;
  loading?: boolean;
}

export function AnnouncementsList({ announcements, onDelete, isAdmin, loading }: AnnouncementsListProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [postDetail, setPostDetail] = useState<{ title: string; dateText: string | null; contentHtml: string } | null>(null)
  const [postLoading, setPostLoading] = useState(false)
  const [page, setPage] = useState(1)
  const pageSize = 5
  const totalPages = Math.max(1, Math.ceil(announcements.length / pageSize))
  useEffect(() => {
    const tp = Math.max(1, Math.ceil(announcements.length / pageSize))
    if (page > tp) setPage(tp)
  }, [announcements])
  const openExternalPost = async (ann: Announcement) => {
    if (!ann.source) return
    try {
      // Show modal immediately with placeholder
      setPostDetail({
        title: ann.title,
        dateText: formatDate(ann.date),
        contentHtml: ''
      })
      setPostLoading(true)
      const data = await getExternalPost(ann.source)
      if (data) setPostDetail(data)
    } finally {
      setPostLoading(false)
    }
  }
  const getPriorityIcon = (priority: Announcement['priority']) => {
    switch (priority) {
      case 'urgent':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'important':
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
      default:
        return <Bell className="w-5 h-5 text-blue-600" />;
    }
  };

  const getPriorityColor = (priority: Announcement['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'border-l-red-500 bg-red-950/50';
      case 'important':
        return 'border-l-orange-500 bg-orange-950/50';
      default:
        return 'border-l-blue-500 bg-gray-800';
    }
  };

  const formatDate = (date: Date) => {
    try {
      if (!(date instanceof Date) || isNaN(date.getTime())) return 'Tarih yok'
      return new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date)
    } catch {
      return 'Tarih yok'
    }
  };

  if (loading && announcements.length === 0) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6 animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  if (announcements.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-sm p-12 text-center border border-gray-700">
        <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">Henüz duyuru bulunmamaktadır.</p>
      </div>
    );
  }

  const start = (page - 1) * pageSize
  const visible = announcements.slice(start, start + pageSize)
  const goPrev = () => setPage((p) => Math.max(1, p - 1))
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1))

  const stripHtml = (html: string) => {
    return html
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/<[^>]*>/g, '')
  }

  return (
    <div className="space-y-4">
      {visible.map((announcement) => (
        <div
          key={announcement.id}
          className={`bg-gray-800 rounded-lg shadow-sm border-l-4 border border-gray-700 p-6 ${getPriorityColor(announcement.priority)} transition-all hover:shadow-md`}
        >
          {announcement.source ? (
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                {announcement.images && announcement.images[0] && (
                  <img
                    src={announcement.images[0]}
                    alt={announcement.title}
                    className="w-full h-40 md:h-48 object-cover rounded-lg border border-gray-700 cursor-pointer"
                    onClick={() => openExternalPost(announcement)}
                  />
                )}
              </div>
              <div className="col-span-8">
                <p className="text-gray-400 text-sm mb-1">{formatDate(announcement.date)}</p>
                <a href={announcement.source} className="text-gray-100 font-semibold hover:underline" onClick={(e) => { e.preventDefault(); openExternalPost(announcement) }}>
                  {announcement.title}
                </a>
                <p className="text-gray-300 mt-2 line-clamp-3">{stripHtml(announcement.content)}</p>
                <div className="mt-3">
                  <a href={announcement.source} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300" onClick={(e) => { e.preventDefault(); openExternalPost(announcement) }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6L10 16M7 7h3m-3 0v3m0-3l7 7" /></svg>
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-4">
              <div className="mt-1">{getPriorityIcon(announcement.priority)}</div>
              <div className="flex-1">
                <h3 className="text-gray-100 mb-2">{announcement.title}</h3>
                <p className="text-gray-300 mb-3 whitespace-pre-wrap">{stripHtml(announcement.content)}</p>
                {announcement.images && announcement.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {announcement.images.map((img, index) => (
                      <img key={index} src={img} alt={`Duyuru görseli ${index + 1}`} className="w-full h-64 object-cover rounded-lg border border-gray-700 cursor-pointer" onClick={() => setPreview(img)} />
                    ))}
                  </div>
                )}
                {announcement.files && announcement.files.length > 0 && (
                  <div className="space-y-2 mb-3">
                    {announcement.files.map((file, index) => (
                      <a key={index} href={file.url} download={file.name} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span>{file.name}</span>
                      </a>
                    ))}
                  </div>
                )}
                <p className="text-gray-500">{formatDate(announcement.date)}</p>
              </div>
            </div>
          )}
          {isAdmin && (
            <div className="flex justify-end">
              <button onClick={() => onDelete(announcement.id)} className="text-gray-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-950/50">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 pt-4">
        <button onClick={goPrev} disabled={page === 1} className={`px-3 py-2 rounded-md border border-gray-700 text-gray-300 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}>
          <ChevronLeft className="w-4 h-4" />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => {
          const n = i + 1
          const active = n === page
          return (
            <button key={n} onClick={() => setPage(n)} className={`px-3 py-2 rounded-md border ${active ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-700 text-gray-300 hover:bg-gray-700'}`}>
              {n}
            </button>
          )
        })}
        <button onClick={goNext} disabled={page === totalPages} className={`px-3 py-2 rounded-md border border-gray-700 text-gray-300 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      {preview && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setPreview(null)}>
          <img src={preview} alt="preview" className="max-w-[90vw] max-h-[90vh] object-contain" />
        </div>
      )}
      {postDetail && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setPostDetail(null)}>
          <div className="bg-gray-900 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg border border-gray-700 p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-gray-100 text-xl font-semibold mb-1">{postDetail.title || 'Duyuru'}</h2>
            {postDetail.dateText && <p className="text-gray-400 text-sm mb-4">{postDetail.dateText}</p>}
            {postLoading ? (
              <div className="text-gray-400">Yükleniyor…</div>
            ) : (
              <div className="external-content text-gray-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: postDetail.contentHtml }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
