const http = require('http')
const fs = require('fs')
const path = require('path')

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
}

http.createServer((req, res) => {
  let p = req.url === '/' ? '/index.html' : req.url
  if (!path.extname(p)) p = path.join(p, 'index.html')
  const f = path.join('out', p)
  try {
    const c = fs.readFileSync(f)
    const ext = path.extname(f)
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
    res.end(c)
  } catch {
    res.writeHead(404)
    res.end('Not found')
  }
}).listen(3000, () => console.log('static server on 3000'))
