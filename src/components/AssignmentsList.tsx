import { useState } from 'react';
import { BookOpen, Calendar, Trash2 } from 'lucide-react';
import { Assignment } from '../App';

interface AssignmentsListProps {
  assignments: Assignment[];
  onDelete: (id: string) => void;
  isAdmin: boolean;
}

export function AssignmentsList({ assignments, onDelete, isAdmin }: AssignmentsListProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const formatDate = (date: Date) => {
    try {
      if (!(date instanceof Date) || isNaN(date.getTime())) return 'Tarih yok'
      return new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date)
    } catch {
      return 'Tarih yok'
    }
  };

  const getDaysUntilDue = (dueDate: Date) => {
    const now = new Date();
    const t = (dueDate instanceof Date && !isNaN(dueDate.getTime())) ? dueDate.getTime() : now.getTime()
    const diffTime = t - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDueDateColor = (dueDate: Date) => {
    const daysUntil = getDaysUntilDue(dueDate);
    if (daysUntil < 0) return 'text-red-400 bg-red-950/50';
    if (daysUntil <= 2) return 'text-orange-400 bg-orange-950/50';
    return 'text-blue-400 bg-blue-950/50';
  };

  const getDueDateText = (dueDate: Date) => {
    const daysUntil = getDaysUntilDue(dueDate);
    if (daysUntil < 0) return 'Süresi geçti!';
    if (daysUntil === 0) return 'Bugün!';
    if (daysUntil === 1) return 'Yarın';
    return `${daysUntil} gün kaldı`;
  };

  if (assignments.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-sm p-12 text-center border border-gray-700">
        <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">Henüz ödev bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => {
        const isOverdue = getDaysUntilDue(assignment.dueDate) < 0;
        
        return (
          <div
            key={assignment.id}
            className={`bg-gray-800 rounded-lg shadow-sm p-6 transition-all hover:shadow-md border ${
              isOverdue ? 'border-2 border-red-500 ring-2 ring-red-500/20 animate-pulse' : 'border-gray-700'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-gray-100 mb-1">
                      {assignment.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
                        <BookOpen className="w-4 h-4" />
                        {assignment.subject}
                      </span>
                      {isOverdue && (
                        <span className="inline-flex items-center gap-1 text-red-400 bg-red-950 px-3 py-1 rounded-full animate-pulse">
                          ⚠️ Tarihi Geçti
                        </span>
                      )}
                    </div>
                  </div>
                  {isAdmin && (
                    <button
                      onClick={() => onDelete(assignment.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-950/50"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 whitespace-pre-wrap">{assignment.description}</p>
                
                {/* Images */}
                {assignment.images && assignment.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {assignment.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Ödev görseli ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg border border-gray-700 cursor-pointer"
                        onClick={() => setPreview(img)}
                      />
                    ))}
                  </div>
                )}
                
                {/* Files */}
                {assignment.files && assignment.files.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {assignment.files.map((file, index) => (
                      <a
                        key={index}
                        href={file.url}
                        download={file.name}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{file.name}</span>
                      </a>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(assignment.dueDate)}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full ${getDueDateColor(assignment.dueDate)}`}>
                    {getDueDateText(assignment.dueDate)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {preview && <ImagePreviewModal src={preview} onClose={() => setPreview(null)} />}
    </div>
  );
}

export function ImagePreviewModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <img src={src} alt="preview" className="max-w-[90vw] max-h-[90vh] object-contain" />
    </div>
  )
}
