/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http')
const fs = require('fs')
const path = require('path')
const { URL } = require('url')

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

const root = path.resolve(__dirname, '..', 'out')

http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
  let requestedPath = pathname === '/' ? 'index.html' : pathname.replace(/^[/\\]+/, '')
  if (!path.extname(requestedPath)) requestedPath = path.join(requestedPath, 'index.html')
  const filePath = path.resolve(root, requestedPath)

  if (!filePath.startsWith(`${root}${path.sep}`) && filePath !== root) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  try {
    const c = fs.readFileSync(filePath)
    const ext = path.extname(filePath)
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
    res.end(req.method === 'HEAD' ? undefined : c)
  } catch {
    res.writeHead(404)
    res.end('Not found')
  }
}).listen(3000, () => console.log('static server on 3000'))
