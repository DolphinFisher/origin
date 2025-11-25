import type { Announcement, Assignment } from './App'
const API_BASE = (import.meta as any).env?.VITE_API_BASE ? String((import.meta as any).env.VITE_API_BASE) : ''
function apiUrl(path: string) {
  if (!API_BASE) return path
  return API_BASE.replace(/\/$/, '') + path
}

const USE_FIREBASE = import.meta.env.VITE_FIREBASE_ENABLED === 'true'
let fbPromise: Promise<any> | null = null
function getFb() {
  if (!USE_FIREBASE) return null
  if (!fbPromise) fbPromise = import('./apiFirebase')
  return fbPromise
}

export async function getAnnouncements(): Promise<Announcement[]> {
  if (USE_FIREBASE) {
    try {
      const fb = await getFb()
      if (fb) return await fb.fbGetAnnouncements()
    } catch {}
  }
  const res = await fetch(apiUrl('/api/announcements'))
  return res.json()
}

export async function getExternalAnnouncements(): Promise<Announcement[]> {
  const res = await fetch(apiUrl('/api/external/announcements'))
  if (!res.ok) return []
  const data = await res.json()
  function parseTrDateToISO(input: string | null | undefined): string {
    if (!input) return new Date().toISOString()
    const s = String(input).trim()
    // If ISO or RFC-like, let Date parse it
    const d1 = new Date(s)
    if (!isNaN(d1.getTime())) return d1.toISOString()
    const lower = s.toLowerCase()
    const months: Record<string, number> = {
      'ocak': 1,
      'şubat': 2,
      'mart': 3,
      'nisan': 4,
      'mayıs': 5,
      'haziran': 6,
      'temmuz': 7,
      'ağustos': 8,
      'eylül': 9,
      'ekim': 10,
      'kasım': 11,
      'aralık': 12,
    }
    const m = lower.match(/(\d{1,2})\s+([a-zıiğüşöç]+)/i)
    const y = lower.match(/(\d{4})/)
    if (m && y) {
      const day = parseInt(m[1], 10)
      const monName = m[2]
      const mon = months[monName] || 1
      const year = parseInt(y[1], 10)
      const d = new Date(Date.UTC(year, mon - 1, day, 0, 0, 0))
      if (!isNaN(d.getTime())) return d.toISOString()
    }
    return new Date().toISOString()
  }
  return (data as any[]).map((x, i) => ({
    id: `ext-${i}-${x.link ?? ''}`,
    title: x.title ?? 'Duyuru',
    content: `${x.excerpt ?? ''}`.trim(),
    date: new Date(parseTrDateToISO(x.dateText ?? new Date().toISOString())),
    priority: 'normal',
    images: x.img ? [x.img] : [],
    source: x.link ?? '',
  }))
}

export async function getExternalPost(url: string): Promise<{ title: string; dateText: string | null; contentHtml: string } | null> {
  const res = await fetch(apiUrl(`/api/external/post?url=${encodeURIComponent(url)}`))
  if (!res.ok) return null
  return res.json()
}

export async function addAnnouncement(input: Omit<Announcement, 'id'>): Promise<Announcement> {
  if (USE_FIREBASE) {
    try {
      const fb = await getFb()
      if (fb) return await fb.fbAddAnnouncement(input)
    } catch {}
  }
  const token = localStorage.getItem('admin_token')
  const res = await fetch(apiUrl('/api/announcements'), { method: 'POST', headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: JSON.stringify(input) })
  return res.json()
}

export async function deleteAnnouncement(id: string): Promise<void> {
  if (USE_FIREBASE) {
    try {
      const fb = await getFb()
      if (fb) return await fb.fbDeleteAnnouncement(id)
    } catch {}
  }
  const token = localStorage.getItem('admin_token')
  await fetch(apiUrl(`/api/announcements/${id}`), { method: 'DELETE', headers: token ? { Authorization: `Bearer ${token}` } : {} })
}

export async function getAssignments(): Promise<Assignment[]> {
  if (USE_FIREBASE) {
    try {
      const fb = await getFb()
      if (fb) return await fb.fbGetAssignments()
    } catch {}
  }
  const res = await fetch(apiUrl('/api/assignments'))
  return res.json()
}

export async function addAssignment(input: Omit<Assignment, 'id'>): Promise<Assignment> {
  if (USE_FIREBASE) {
    try {
      const fb = await getFb()
      if (fb) return await fb.fbAddAssignment(input)
    } catch {}
  }
  const token = localStorage.getItem('admin_token')
  const res = await fetch(apiUrl('/api/assignments'), { method: 'POST', headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: JSON.stringify(input) })
  return res.json()
}

export async function toggleAssignment(id: string): Promise<Assignment> {
  if (USE_FIREBASE) {
    try {
      const fb = await getFb()
      if (fb) return await fb.fbToggleAssignment(id)
    } catch {}
  }
  const token = localStorage.getItem('admin_token')
  const res = await fetch(apiUrl(`/api/assignments/${id}/toggle`), { method: 'PATCH', headers: token ? { Authorization: `Bearer ${token}` } : {} })
  return res.json()
}

export async function deleteAssignment(id: string): Promise<void> {
  if (USE_FIREBASE) {
    try {
      const fb = await getFb()
      if (fb) return await fb.fbDeleteAssignment(id)
    } catch {}
  }
  const token = localStorage.getItem('admin_token')
  await fetch(apiUrl(`/api/assignments/${id}`), { method: 'DELETE', headers: token ? { Authorization: `Bearer ${token}` } : {} })
}

export async function loginAdmin(password: string): Promise<string | null> {
  const res = await fetch(apiUrl('/api/auth/login'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  if (!res.ok) return null
  const data = await res.json()
  return data.token as string
}
