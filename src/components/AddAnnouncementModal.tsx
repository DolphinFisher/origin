import { useState } from 'react';
import { X, Upload, Image as ImageIcon, Paperclip, Trash2 } from 'lucide-react';
import { Announcement } from '../App';

interface AddAnnouncementModalProps {
  onClose: () => void;
  onAdd: (announcement: Omit<Announcement, 'id'>) => void;
}

export function AddAnnouncementModal({ onClose, onAdd }: AddAnnouncementModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState<Announcement['priority']>('normal');
  const [images, setImages] = useState<string[]>([]);
  const [files, setFiles] = useState<{ name: string; url: string; }[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles) {
      Array.from(uploadedFiles).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFiles(prev => [...prev, { name: file.name, url: reader.result as string }]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAdd({
        title,
        content,
        priority,
        date: new Date(),
        images: images.length > 0 ? images : undefined,
        files: files.length > 0 ? files : undefined
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-gray-100">Yeni Duyuru Ekle</h2>
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
              Başlık
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Duyuru başlığı"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-gray-300 mb-2">
              İçerik
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Duyuru içeriği"
              required
            />
          </div>

          <div>
            <label htmlFor="priority" className="block text-gray-300 mb-2">
              Öncelik
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Announcement['priority'])}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="normal">Normal</option>
              <option value="important">Önemli</option>
              <option value="urgent">Acil</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-300 mb-2">
              Görseller
            </label>
            <div className="space-y-3">
              <label className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <ImageIcon className="w-5 h-5" />
                <span>Görsel Ekle</span>
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
              Dosyalar
            </label>
            <div className="space-y-3">
              <label className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <Paperclip className="w-5 h-5" />
                <span>Dosya Ekle</span>
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
                    <div key={index} className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Paperclip className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300"
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
              Duyuru Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
