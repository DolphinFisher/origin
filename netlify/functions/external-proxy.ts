
export default async function handler(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('url')
  
  if (!q) return new Response('url required', { status: 400 })
  
  try {
    const parsed = new URL(q)
    if (!/^https?:$/.test(parsed.protocol) || !parsed.hostname.includes('ankaramedipol.edu.tr')) {
      return new Response('domain not allowed', { status: 400 })
    }

    const resp = await fetch(q, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36' } })
    if (!resp.ok) return new Response('bad gateway', { status: 502 })
    
    const buf = await resp.arrayBuffer()
    const ct = resp.headers.get('content-type') || ''
    const pathname = parsed.pathname.toLowerCase()
    
    const guess = pathname.endsWith('.pdf') ? 'application/pdf'
      : pathname.endsWith('.xlsx') ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      : pathname.endsWith('.xls') ? 'application/vnd.ms-excel'
      : pathname.endsWith('.csv') ? 'text/csv'
      : ct || 'application/octet-stream'
      
    return new Response(buf, {
      headers: {
        'Content-Type': guess,
        'Content-Disposition': 'inline',
        'Cache-Control': 'public, max-age=3600'
      }
    })
  } catch {
    return new Response('error', { status: 500 })
  }
}
