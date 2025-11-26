import { useEffect, useState } from 'react';
import { Header } from './Header';
import { AnnouncementsList } from './AnnouncementsList';
import { AssignmentsList } from './AssignmentsList';
import { AddAnnouncementModal } from './AddAnnouncementModal';
import { AddAssignmentModal } from './AddAssignmentModal';
import { Announcement, Assignment } from '../App';
import AcademicCalendar from './AcademicCalendar';
import { getAnnouncements, getExternalAnnouncements, addAnnouncement, deleteAnnouncement, getAssignments, addAssignment, deleteAssignment as deleteAssignmentApi, toggleAssignment } from '../api';

interface MainAppProps {
  isAdmin: boolean;
  onLogout: () => void;
}

export function MainApp({ isAdmin, onLogout }: MainAppProps) {
  const [activeTab, setActiveTab] = useState<'announcements' | 'assignments' | 'calendar'>('announcements');
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isAnnouncementsLoading, setIsAnnouncementsLoading] = useState(true);

  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      // 1. Load internal data fast
      setIsAnnouncementsLoading(true)
      try {
        const [internalAnn, s] = await Promise.all([getAnnouncements(), getAssignments()])
        
        if (cancelled) return

        const normalizedInternal = internalAnn.map(x => ({ ...x, date: x.date instanceof Date ? x.date : (x.date ? new Date(x.date) : new Date()) }))
        const sortedInternal = normalizedInternal.sort((p, q) => q.date.getTime() - p.date.getTime())

        // If we have internal announcements, show them immediately
        if (sortedInternal.length > 0) {
          setAnnouncements(sortedInternal)
          setIsAnnouncementsLoading(false)
        } else {
          // If no internal data, keep loading true so we show skeleton until external arrives
          setAnnouncements([])
        }
        
        setAssignments(s.map(x => ({ ...x, dueDate: x.dueDate instanceof Date ? x.dueDate : (x.dueDate ? new Date(x.dueDate) : new Date()) })))

        // 2. Load external data
        const ext = await getExternalAnnouncements()
        if (cancelled) return

        const merged = [...normalizedInternal, ...ext]
        // De-duplicate based on source (link) or title if source is missing
        const uniqueMap = new Map()
        for (const item of merged) {
            const rawKey = item.source || item.title || ''
            const key = rawKey.replace(/\/$/, '') // Normalize trailing slash
            if (!uniqueMap.has(key)) {
                uniqueMap.set(key, item)
            }
        }
        const uniqueList = Array.from(uniqueMap.values())
        
        const normalizedAll = uniqueList.map(x => ({ ...x, date: x.date instanceof Date ? x.date : (x.date ? new Date(x.date) : new Date()) }))
        const sortedAll = normalizedAll.sort((p, q) => q.date.getTime() - p.date.getTime())
        
        setAnnouncements(sortedAll)
        setIsAnnouncementsLoading(false)

      } catch (e) {
        console.error(e)
        setIsAnnouncementsLoading(false)
      }
    }
    load()
    // Refresh interval - handling it carefully to not trigger loading state every time
    const id = setInterval(async () => {
        // Silent update
        const [a, ext, s] = await Promise.all([getAnnouncements(), getExternalAnnouncements(), getAssignments()])
        if (cancelled) return
        const merged = [...a, ...ext]
        
        // De-duplicate
        const uniqueMap = new Map()
        for (const item of merged) {
            const rawKey = item.source || item.title || ''
            const key = rawKey.replace(/\/$/, '')
            if (!uniqueMap.has(key)) {
                uniqueMap.set(key, item)
            }
        }
        const uniqueList = Array.from(uniqueMap.values())

        const normalized = uniqueList.map(x => ({ ...x, date: x.date instanceof Date ? x.date : (x.date ? new Date(x.date) : new Date()) }))
        const sorted = normalized.sort((p, q) => q.date.getTime() - p.date.getTime())
        setAnnouncements(sorted)
        setAssignments(s.map(x => ({ ...x, dueDate: x.dueDate instanceof Date ? x.dueDate : (x.dueDate ? new Date(x.dueDate) : new Date()) })))
    }, 60 * 1000)

    const onFocus = () => load() // This might trigger loading state again, maybe acceptable or should be silent?
    // For simplicity, let focus trigger full load logic for now, or we can make a silentLoad function.
    // Given the requirement, better to stick to the initial load logic.
    
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  const handleAddAnnouncement = async (announcement: Omit<Announcement, 'id'>) => {
    const created = await addAnnouncement(announcement)
    setAnnouncements([ { ...created, date: new Date(created.date) }, ...announcements ])
    setShowAnnouncementModal(false)
  }

  const handleDeleteAnnouncement = async (id: string) => {
    await deleteAnnouncement(id)
    setAnnouncements(announcements.filter(a => a.id !== id))
  }

  const handleAddAssignment = async (assignment: Omit<Assignment, 'id'>) => {
    const created = await addAssignment(assignment)
    setAssignments([ { ...created, dueDate: new Date(created.dueDate) }, ...assignments ])
    setShowAssignmentModal(false)
  }

  const handleDeleteAssignment = async (id: string) => {
    await deleteAssignmentApi(id)
    setAssignments(assignments.filter(a => a.id !== id))
  }

  const handleToggleComplete = async (id: string) => {
    const updated = await toggleAssignment(id)
    setAssignments(assignments.map(a => a.id === id ? { ...a, completed: updated.completed } : a))
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header isAdmin={isAdmin} onLogout={onLogout} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="bg-gray-800 rounded-lg shadow-sm p-2 mb-6 flex gap-2 border border-gray-700">
          <button
            onClick={() => setActiveTab('announcements')}
            className={`flex-1 py-3 px-6 rounded-md transition-all ${
              activeTab === 'announcements'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Duyurular
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`flex-1 py-3 px-6 rounded-md transition-all ${
              activeTab === 'assignments'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Ödevler
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex-1 py-3 px-6 rounded-md transition-all ${
              activeTab === 'calendar'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Akademik Takvim
          </button>
        </div>

        {/* Content */}
        {activeTab === 'announcements' ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-100">Son Duyurular</h2>
              {isAdmin && (
                <button
                  onClick={() => setShowAnnouncementModal(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  + Yeni Duyuru
                </button>
              )}
            </div>
            <AnnouncementsList 
              announcements={announcements}
              onDelete={handleDeleteAnnouncement}
              isAdmin={isAdmin}
              loading={isAnnouncementsLoading}
            />
          </div>
        ) : activeTab === 'assignments' ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-100">Ödevler</h2>
              {isAdmin && (
                <button
                  onClick={() => setShowAssignmentModal(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  + Yeni Ödev
                </button>
              )}
            </div>
            <AssignmentsList
              assignments={assignments}
              onDelete={handleDeleteAssignment}
              isAdmin={isAdmin}
            />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-100">Akademik Takvim</h2>
            </div>
            <AcademicCalendar />
          </div>
        )}
      </main>

      {/* Modals */}
      {showAnnouncementModal && (
        <AddAnnouncementModal
          onClose={() => setShowAnnouncementModal(false)}
          onAdd={handleAddAnnouncement}
        />
      )}

      {showAssignmentModal && (
        <AddAssignmentModal
          onClose={() => setShowAssignmentModal(false)}
          onAdd={handleAddAssignment}
        />
      )}
    </div>
  );
}
