import { db, isFirebaseEnabled, storage, useStorage } from './firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, Timestamp, getDoc } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'
import type { Announcement, Assignment } from './App'

function toDate(v: any): Date {
  if (v instanceof Timestamp) return v.toDate()
  return new Date(v)
}

export async function fbGetAnnouncements(): Promise<Announcement[]> {
  if (!isFirebaseEnabled || !db) throw new Error('firebase disabled')
  const snap = await getDocs(collection(db, 'announcements'))
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any), date: toDate((d.data() as any).date) }))
}

export async function fbAddAnnouncement(input: Omit<Announcement, 'id'>): Promise<Announcement> {
  if (!isFirebaseEnabled || !db) throw new Error('firebase disabled')
  const imagesRaw = Array.isArray(input.images)
    ? input.images.filter((x) => typeof x === 'string')
    : []
  const filesRaw = Array.isArray(input.files)
    ? input.files
        .filter((f: any) => f && typeof f.name === 'string' && typeof f.url === 'string')
        .map((f: any) => ({ name: String(f.name), url: String(f.url) }))
    : []

  const payload: any = {
    title: input.title,
    content: input.content,
    priority: input.priority ?? 'normal',
    date: input.date instanceof Date ? Timestamp.fromDate(input.date as Date) : serverTimestamp(),
  }
  if (!useStorage) {
    const ref = await addDoc(collection(db, 'announcements'), { ...payload, images: imagesRaw, files: filesRaw })
    return { id: ref.id, ...(input as any), images: imagesRaw, files: filesRaw }
  } else {
    const ref = await addDoc(collection(db, 'announcements'), payload)
    const uploadedImages = await uploadDataUrlList(`announcements/${ref.id}/images`, imagesRaw)
    const uploadedFiles = await uploadDataUrlList(`announcements/${ref.id}/files`, filesRaw.map(f => f.url))
    const files = uploadedFiles.map((u, i) => ({ name: filesRaw[i]?.name ?? `Dosya ${i+1}`, url: u }))
    await updateDoc(ref, { images: uploadedImages, files })
    return { id: ref.id, ...(input as any), images: uploadedImages, files }
  }
}

export async function fbDeleteAnnouncement(id: string): Promise<void> {
  if (!isFirebaseEnabled || !db) throw new Error('firebase disabled')
  await deleteDoc(doc(db, 'announcements', id))
}

export async function fbGetAssignments(): Promise<Assignment[]> {
  if (!isFirebaseEnabled || !db) throw new Error('firebase disabled')
  const snap = await getDocs(collection(db, 'assignments'))
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any), dueDate: toDate((d.data() as any).dueDate) }))
}

export async function fbAddAssignment(input: Omit<Assignment, 'id'>): Promise<Assignment> {
  if (!isFirebaseEnabled || !db) throw new Error('firebase disabled')
  const due = input.dueDate instanceof Date ? input.dueDate : new Date(input.dueDate)
  const imagesRaw = Array.isArray(input.images)
    ? input.images.filter((x) => typeof x === 'string')
    : []
  const filesRaw = Array.isArray(input.files)
    ? input.files
        .filter((f: any) => f && typeof f.name === 'string' && typeof f.url === 'string')
        .map((f: any) => ({ name: String(f.name), url: String(f.url) }))
    : []

  const payload: any = {
    title: input.title,
    description: input.description,
    subject: input.subject,
    completed: !!input.completed,
    dueDate: Timestamp.fromDate(due),
  }
  if (!useStorage) {
    const ref = await addDoc(collection(db, 'assignments'), { ...payload, images: imagesRaw, files: filesRaw })
    return { id: ref.id, ...(input as any), images: imagesRaw, files: filesRaw }
  } else {
    const ref = await addDoc(collection(db, 'assignments'), payload)
    const uploadedImages = await uploadDataUrlList(`assignments/${ref.id}/images`, imagesRaw)
    const uploadedFiles = await uploadDataUrlList(`assignments/${ref.id}/files`, filesRaw.map(f => f.url))
    const files = uploadedFiles.map((u, i) => ({ name: filesRaw[i]?.name ?? `Dosya ${i+1}`, url: u }))
    await updateDoc(ref, { images: uploadedImages, files })
    return { id: ref.id, ...(input as any), images: uploadedImages, files }
  }
}

export async function fbToggleAssignment(id: string): Promise<Assignment> {
  if (!isFirebaseEnabled || !db) throw new Error('firebase disabled')
  const ref = doc(db, 'assignments', id)
  const snap = await getDoc(ref)
  const current = snap.exists() ? snap.data() as any : { completed: false, dueDate: Timestamp.fromDate(new Date()) }
  const nextCompleted = !current.completed
  await updateDoc(ref, { completed: nextCompleted } as any)
  return { id, title: current.title ?? '', description: current.description ?? '', subject: current.subject ?? '', completed: nextCompleted, dueDate: (current.dueDate instanceof Timestamp ? current.dueDate.toDate() : new Date()) }
}

export async function fbDeleteAssignment(id: string): Promise<void> {
  if (!isFirebaseEnabled || !db) throw new Error('firebase disabled')
  await deleteDoc(doc(db, 'assignments', id))
}
async function uploadDataUrlList(basePath: string, list: string[]): Promise<string[]> {
  if (!storage || !useStorage) return list.filter((x) => typeof x === 'string')
  const urls: string[] = []
  for (let i = 0; i < list.length; i++) {
    const val = list[i]
    if (typeof val !== 'string' || val.length === 0) continue
    if (val.startsWith('http')) {
      urls.push(val)
      continue
    }
    try {
      const safeBase = basePath.replace(/[^a-zA-Z0-9/_-]/g, '')
      const fileRef = ref(storage, `${safeBase}/item-${Date.now()}-${i}`)
      await uploadString(fileRef, val, 'data_url')
      const url = await getDownloadURL(fileRef)
      urls.push(url)
    } catch (err) {
      console.error('Storage upload failed, keeping data URL:', err)
      urls.push(val)
    }
  }
  return urls
}
