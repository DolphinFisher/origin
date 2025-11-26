import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json({ limit: '5mb' }))

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'
let lastSyncAt = 0
let isSyncing = false

function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  const token = auth.slice('Bearer '.length)
  try {
    jwt.verify(token, JWT_SECRET)
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

app.post('/api/auth/login', (req, res) => {
  const { password } = req.body as { password?: string }
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '12h' })
  res.json({ token })
})

// Announcements
app.get('/api/announcements', async (_req, res) => {
  try {
    if (!isSyncing && Date.now() - lastSyncAt > 5 * 60 * 1000) {
      isSyncing = true
      syncExternalOnce().finally(() => { isSyncing = false }).catch(() => {})
    }
  } catch {}
  const data = await prisma.announcement.findMany({ orderBy: { date: 'desc' } })
  const mapped = data.map(a => ({
    id: a.id,
    title: a.title,
    content: a.content,
    date: a.date,
    priority: a.priority,
    source: (a as any).source ?? undefined,
    images: a.imagesJson ? JSON.parse(a.imagesJson) : [],
    files: a.filesJson ? JSON.parse(a.filesJson) : [],
  }))
  res.json(mapped)
})

app.post('/api/announcements', requireAdmin, async (req, res) => {
  const { title, content, priority, date, images, files, source } = req.body
  const created = await prisma.announcement.create({
    data: {
      title,
      content,
      priority,
      date: date ? new Date(date) : new Date(),
      source: source ?? null,
      imagesJson: images ? JSON.stringify(images) : null,
      filesJson: files ? JSON.stringify(files) : null,
    },
  })
  res.status(201).json({
    id: created.id,
    title: created.title,
    content: created.content,
    date: created.date,
    priority: created.priority,
    source: source ?? undefined,
    images: images ?? [],
    files: files ?? [],
  })
})

app.delete('/api/announcements/:id', requireAdmin, async (req, res) => {
  const { id } = req.params
  await prisma.announcement.delete({ where: { id } })
  res.status(204).end()
})

// Assignments
app.get('/api/assignments', async (_req, res) => {
  const data = await prisma.assignment.findMany({ orderBy: { dueDate: 'asc' } })
  const mapped = data.map(a => ({
    id: a.id,
    title: a.title,
    description: a.description,
    dueDate: a.dueDate,
    subject: a.subject,
    completed: a.completed,
    images: a.imagesJson ? JSON.parse(a.imagesJson) : [],
    files: a.filesJson ? JSON.parse(a.filesJson) : [],
  }))
  res.json(mapped)
})

app.post('/api/assignments', requireAdmin, async (req, res) => {
  const { title, description, dueDate, subject, completed, images, files } = req.body
  const created = await prisma.assignment.create({
    data: {
      title,
      description,
      subject,
      completed: !!completed,
      dueDate: new Date(dueDate),
      imagesJson: images ? JSON.stringify(images) : null,
      filesJson: files ? JSON.stringify(files) : null,
    },
  })
  res.status(201).json({
    id: created.id,
    title: created.title,
    description: created.description,
    subject: created.subject,
    completed: created.completed,
    dueDate: created.dueDate,
    images: images ?? [],
    files: files ?? [],
  })
})

app.patch('/api/assignments/:id/toggle', requireAdmin, async (req, res) => {
  const { id } = req.params
  const existing = await prisma.assignment.findUnique({ where: { id } })
  if (!existing) return res.status(404).json({ error: 'Not found' })
  const updated = await prisma.assignment.update({
    where: { id },
    data: { completed: !existing.completed },
  })
  res.json(updated)
})

app.delete('/api/assignments/:id', async (req, res) => {
  const { id } = req.params
  await prisma.assignment.delete({ where: { id } })
  res.status(204).end()
})

app.get('/api/external/announcements', async (_req, res) => {
  try {
    const url = 'https://ydyo.ankaramedipol.edu.tr/blog/category/duyurular/'
    const resp = await fetch(url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    })
    if (!resp.ok) {
      return res.json([])
    }
    const html = await resp.text()
    const $ = cheerio.load(html)
    const items: any[] = []
    const container = $('#Content')
    const posts = container.find('.post-item').length ? container.find('.post-item') : $('.post-item, .hentry.post')
    posts.each((_, el) => {
      const title = $(el).find('.post-title a, h2.entry-title a, h2 a').first().text().trim()
      const link = $(el).find('.post-title a, h2.entry-title a, h2 a').first().attr('href') || url
      const img = $(el).find('img').first().attr('src') || null
      const dateText = $(el).find('.post-date, time').first().text().trim() || $(el).find('time').attr('datetime') || null
      const excerpt = $(el).find('.post-content, .entry').first().text().trim() || ''
      if (title) items.push({ title, link, source: link, img, dateText, excerpt })
    })
    res.json(items)
  } catch (e) {
    res.json([])
  }
})

function parseTrDate(input: string | null | undefined): Date {
  if (!input) return new Date()
  const s = String(input).trim()
  const tryDate = new Date(s)
  if (!isNaN(tryDate.getTime())) return tryDate
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
    if (!isNaN(d.getTime())) return d
  }
  return new Date()
}

async function scrapeExternalPost(url: string) {
  try {
    const resp = await fetch(url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    })
    if (!resp.ok) return null
    const html = await resp.text()
    const $ = cheerio.load(html)
    $('script, style, link').remove()
    const title = $('h1.entry-title, #Content h1, .post-title, article h1').first().text().trim()
    const dateText = $('.post-date, time.entry-date, time').first().text().trim() || $('time').attr('datetime') || null
    let contentEl = $('#Content .the_content_wrapper').first()
    if (!contentEl || !contentEl.html()) {
      contentEl = $('#Content .entry-content, #Content .post-content, #Content .entry, article .entry-content, article .entry').first()
    }
    if (!contentEl || !contentEl.html()) {
      contentEl = $('#Content').first()
    }
    contentEl.find('.post-related, .post-nav, .share_box, .author-box, .wp-block-image figcaption').remove()
    contentEl.find('.section.section-post-intro-share, .section.section-post-related, .section.section-post-footer, .section.section-post-about, .post-pager, .share-simple-wrapper, .button-love, .section-related-adjustment, #comments, .section-comments, .section-related-ul, .column.post-related, .related, [class*="related"], .recent-posts').remove()
    contentEl.find('a').attr('target', 'blank').attr('rel', 'noopener noreferrer')
    
    contentEl.find('.wp-block-file').each((_, el) => {
      const $el = $(el)
      const obj = $el.find('object').first()
      if (obj && obj.length) {
        obj.removeAttr('data-wp-bind--hidden').removeAttr('hidden')
        const dataAttr = obj.attr('data') || obj.attr('src')
        if (dataAttr) {
          const abs = new URL(dataAttr, url).href
          // Use direct URL instead of proxy to avoid relative path issues and allow Office Viewer access
          obj.attr('data', abs)
        }
        const style = (obj.attr('style') || '').toLowerCase()
        if (!style.includes('height')) obj.attr('style', 'width:100%;height:600px')
      } else {
        const linkEl = $el.find('a[href]').first()
        const href = linkEl.attr('href') || ''
        if (href) {
          const fileAbs = new URL(href, url).href
          if (/\.xlsx($|\?)/i.test(fileAbs) || /\.xls($|\?)/i.test(fileAbs) || /\.csv($|\?)/i.test(fileAbs)) {
            // Office Viewer requires a public absolute URL. Do not proxy.
            const officeSrc = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(fileAbs)
            $el.prepend(`<iframe src="${officeSrc}" style="width:100%;height:600px;border:none" loading="lazy"></iframe>`)
          }
        }
      }
    })
    
    contentEl.find('img').each((_, el) => {
      const src = $(el).attr('src')
      if (src) {
        const abs = new URL(src, url).href
        $(el).attr('src', abs)
      }
    })
    
    const contentHtml = contentEl.html() || ''
    return { title, dateText, contentHtml }
  } catch (e) {
    return null
  }
}

async function syncExternalOnce() {
  try {
    const listResp = await fetch('https://ydyo.ankaramedipol.edu.tr/blog/category/duyurular/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    })
    if (!listResp.ok) return
    const html = await listResp.text()
    const $ = cheerio.load(html)
    const container = $('#Content')
    const posts = container.find('.post-item').length ? container.find('.post-item') : $('.post-item, .hentry.post')
    const items: { title: string; link: string; img?: string | null; dateText?: string | null; excerpt?: string }[] = []
    posts.each((_, el) => {
      const title = $(el).find('.post-title a, h2.entry-title a, h2 a').first().text().trim()
      const link = $(el).find('.post-title a, h2.entry-title a, h2 a').first().attr('href') || ''
      const img = $(el).find('img').first().attr('src') || null
      const dateText = $(el).find('.post-date, time').first().text().trim() || $(el).find('time').attr('datetime') || null
      const excerpt = $(el).find('.post-content, .entry').first().text().trim() || ''
      if (title && link) items.push({ title, link, img, dateText, excerpt })
    })

    // Process in chunks to avoid overwhelming the server but still faster than sequential
    const chunks = []
    const CHUNK_SIZE = 5
    for (let i = 0; i < items.length; i += CHUNK_SIZE) {
        chunks.push(items.slice(i, i + CHUNK_SIZE))
    }

    for (const chunk of chunks) {
      await Promise.all(chunk.map(async (it) => {
        try {
          const existing = await prisma.announcement.findFirst({ where: { source: it.link } })
          
          // Skip if we have full content and it doesn't use the old proxy links
          if (existing && existing.fullContent && !existing.fullContent.includes('/api/external/proxy')) {
            return
          }
          
          if (!existing) {
            // Create immediately with basic info if not exists
            const created = await prisma.announcement.create({
              data: {
                title: it.title,
                content: it.excerpt || '',
                priority: 'normal',
                date: parseTrDate(it.dateText),
                source: it.link,
                imagesJson: it.img ? JSON.stringify([new URL(it.img, 'https://ydyo.ankaramedipol.edu.tr/').href]) : null,
                filesJson: null,
              },
            })

            // Then scrape content
            const scraped = await scrapeExternalPost(it.link)
            if (scraped && scraped.contentHtml) {
               await prisma.announcement.update({
                 where: { id: created.id },
                 data: { content: scraped.contentHtml, fullContent: scraped.contentHtml }
               })
            }
          } else {
             // Backfill or fix content for existing items
             const scraped = await scrapeExternalPost(it.link)
             if (scraped && scraped.contentHtml) {
               await prisma.announcement.update({
                 where: { id: existing!.id },
                 data: { content: scraped.contentHtml, fullContent: scraped.contentHtml }
               })
             }
          }
        } catch (e) {
          console.error(`Error processing ${it.link}`, e)
        }
      }))
    }
    lastSyncAt = Date.now()
  } catch {}
}

// Run once on start and then every 15 minutes
syncExternalOnce()
setInterval(syncExternalOnce, 15 * 60 * 1000)

app.get('/api/external/post', async (req, res) => {
  try {
    const q = (req.query.url as string) || ''
    if (!q) return res.status(400).json({ error: 'url required' })
    let parsed: URL
    try {
      parsed = new URL(q)
    } catch {
      return res.status(400).json({ error: 'invalid url' })
    }
    if (!/^https?:$/.test(parsed.protocol) || !parsed.hostname.includes('ankaramedipol.edu.tr')) {
      return res.status(400).json({ error: 'domain not allowed' })
    }

    // Check DB first
    const existing = await prisma.announcement.findFirst({ where: { source: q } })
    if (existing && (existing as any).fullContent) {
      return res.json({ title: existing.title, dateText: null, contentHtml: existing.content })
    }

    // Fallback to scrape
    const scraped = await scrapeExternalPost(q)
    if (scraped) {
      // If we found it, update the DB if we have a record
      if (existing && !(existing as any).fullContent) {
        await prisma.announcement.update({
          where: { id: existing.id },
          data: { content: scraped.contentHtml }
        })
      }
      res.json(scraped)
    } else {
      res.json({ title: '', dateText: null, contentHtml: '' })
    }
  } catch {
    res.json({ title: '', dateText: null, contentHtml: '' })
  }
})

app.get('/api/external/proxy', async (req, res) => {
  try {
    const q = (req.query.url as string) || ''
    if (!q) return res.status(400).end('url required')
    let parsed: URL
    try { parsed = new URL(q) } catch { return res.status(400).end('invalid url') }
    if (!/^https?:$/.test(parsed.protocol) || !parsed.hostname.includes('ankaramedipol.edu.tr')) {
      return res.status(400).end('domain not allowed')
    }
    const resp = await fetch(q, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36' } })
    if (!resp.ok) return res.status(502).end('bad gateway')
    const buf = Buffer.from(await resp.arrayBuffer())
    const ct = resp.headers.get('content-type') || ''
    const pathname = parsed.pathname.toLowerCase()
    const guess = pathname.endsWith('.pdf') ? 'application/pdf'
      : pathname.endsWith('.xlsx') ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      : pathname.endsWith('.xls') ? 'application/vnd.ms-excel'
      : pathname.endsWith('.csv') ? 'text/csv'
      : ct || 'application/octet-stream'
    res.setHeader('Content-Type', guess)
    res.setHeader('Content-Disposition', 'inline')
    res.setHeader('Cache-Control', 'public, max-age=3600')
    res.send(buf)
  } catch {
    res.status(500).end('error')
  }
})

const port = process.env.PORT ? Number(process.env.PORT) : 3000
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})
