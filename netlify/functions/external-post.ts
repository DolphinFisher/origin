
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore'
import * as cheerio from 'cheerio'

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
}

// Singleton init
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

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
    
    // Proxy logic for iframes/files - updated to point to Netlify Function
    contentEl.find('.wp-block-file').each((_, el) => {
      const $el = $(el)
      const obj = $el.find('object').first()
      if (obj && obj.length) {
        obj.removeAttr('data-wp-bind--hidden').removeAttr('hidden')
        const dataAttr = obj.attr('data') || obj.attr('src')
        if (dataAttr) {
          const abs = new URL(dataAttr, url).href
          const proxied = `/.netlify/functions/external-proxy?url=${encodeURIComponent(abs)}`
          obj.attr('data', proxied)
        }
        const style = (obj.attr('style') || '').toLowerCase()
        if (!style.includes('height')) obj.attr('style', 'width:100%;height:600px')
      } else {
        const linkEl = $el.find('a[href]').first()
        const href = linkEl.attr('href') || ''
        if (href) {
          const fileAbs = new URL(href, url).href
          if (/\.xlsx($|\?)/i.test(fileAbs) || /\.xls($|\?)/i.test(fileAbs) || /\.csv($|\?)/i.test(fileAbs)) {
            const officeSrc = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(`/.netlify/functions/external-proxy?url=${encodeURIComponent(fileAbs)}`)
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

export default async function handler(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('url')
  
  if (!q) return new Response(JSON.stringify({ error: 'url required' }), { status: 400 })
  
  try {
    const parsed = new URL(q)
    if (!parsed.hostname.includes('ankaramedipol.edu.tr')) {
       return new Response(JSON.stringify({ error: 'domain not allowed' }), { status: 400 })
    }

    // Check Firebase Cache (separate collection)
    const cacheRef = collection(db, 'external_cache')
    const qSnap = await getDocs(query(cacheRef, where('source', '==', q)))
    
    if (!qSnap.empty) {
      const d = qSnap.docs[0]
      const data = d.data()
      if (data.fullContent) {
        return new Response(JSON.stringify({ 
          title: data.title, 
          dateText: data.dateText, 
          contentHtml: data.fullContent 
        }), { headers: { 'Content-Type': 'application/json' } })
      }
    }

    // Scrape
    const scraped = await scrapeExternalPost(q)
    
    if (scraped) {
      if (!qSnap.empty) {
        // Update cache
        await updateDoc(doc(db, 'external_cache', qSnap.docs[0].id), {
          fullContent: scraped.contentHtml
        })
      } else {
        // Create new cache entry
        await import('firebase/firestore').then(({ addDoc }) => 
          addDoc(cacheRef, {
            source: q,
            title: scraped.title,
            dateText: scraped.dateText,
            fullContent: scraped.contentHtml,
            updatedAt: new Date()
          })
        )
      }
    }
    
    return new Response(JSON.stringify(scraped || { title: '', dateText: null, contentHtml: '' }), { 
      headers: { 'Content-Type': 'application/json' } 
    })
    
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: 'internal error' }), { status: 500 })
  }
}
