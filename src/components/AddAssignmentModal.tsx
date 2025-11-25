import { useState } from 'react';
import { X, ImagePlus, Paperclip, Trash2 } from 'lucide-react';
import { Assignment } from '../App';

interface AddAssignmentModalProps {
  onClose: () => void;
  onAdd: (assignment: Omit<Assignment, 'id'>) => void;
}

export function AddAssignmentModal({ onClose, onAdd }: AddAssignmentModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [subject, setSubject] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [files, setFiles] = useState<{ name: string; url: string; }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim() && dueDate && subject.trim()) {
      onAdd({
        title,
        description,
        dueDate: new Date(dueDate),
        subject,
        completed: false,
        images: images.length > 0 ? images : undefined,
        files: files.length > 0 ? files : undefined
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles) {
      Array.from(uploadedFiles).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFiles((prev) => [...prev, { name: file.name, url: reader.result as string }]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-gray-100">Yeni Ödev Ekle</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-300 mb-2">
              Ödev Başlığı
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Örn: İngilizce Essay"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Ders
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Örn: English, Mathematics"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-300 mb-2">
              Açıklama
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Ödev detayları"
              required
            />
          </div>

          <div>
            <label htmlFor="dueDate" className="block text-gray-300 mb-2">
              Teslim Tarihi
            </label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-300 mb-2">
              Görseller (İsteğe bağlı)
            </label>
            <div className="space-y-3">
              <label className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <ImagePlus className="w-5 h-5" />
                <span>Görsel Yükle</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={img} 
                        alt={`Upload ${index + 1}`}
                        className="w-full h-32 object-contain rounded-lg border border-gray-700 bg-gray-900"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-300 mb-2">
              Dosyalar (İsteğe bağlı)
            </label>
            <div className="space-y-3">
              <label className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <Paperclip className="w-5 h-5" />
                <span>Dosya Yükle</span>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              
              {files.length > 0 && (
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg group">
                      <div className="flex items-center gap-2 text-gray-300 flex-1 min-w-0">
                        <Paperclip className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-400 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ödev Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
