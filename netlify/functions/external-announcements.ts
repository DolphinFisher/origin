
import * as cheerio from 'cheerio'

export default async function handler(req: Request) {
  try {
    const url = 'https://ydyo.ankaramedipol.edu.tr/blog/category/duyurular/'
    const resp = await fetch(url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    })
    
    if (!resp.ok) return new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' } })
    
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
      
      if (title) items.push({ title, link, img, dateText, excerpt })
    })
    
    return new Response(JSON.stringify(items), { 
      headers: { 'Content-Type': 'application/json' } 
    })
    
  } catch (e) {
    return new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' } })
  }
}
