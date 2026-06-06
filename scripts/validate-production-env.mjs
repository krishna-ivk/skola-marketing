import { readFileSync } from 'node:fs'

const leadFormUrl = process.env.NEXT_PUBLIC_LEAD_FORM_URL?.trim()
const wrangler = readFileSync(new URL('../wrangler.toml', import.meta.url), 'utf8')
const errors = []

if (!leadFormUrl) {
  errors.push('NEXT_PUBLIC_LEAD_FORM_URL is required')
} else {
  try {
    const url = new URL(leadFormUrl)
    if (url.protocol !== 'https:') errors.push('NEXT_PUBLIC_LEAD_FORM_URL must use HTTPS')
  } catch {
    errors.push('NEXT_PUBLIC_LEAD_FORM_URL must be a valid absolute URL')
  }
}

const databaseId = wrangler.match(/database_id\s*=\s*"([^"]*)"/)?.[1] ?? ''
if (!databaseId || databaseId === '00000000-0000-0000-0000-000000000000') {
  errors.push('wrangler.toml must contain the real lead D1 database_id')
}

const origins = wrangler.match(/ALLOWED_ORIGINS\s*=\s*"([^"]*)"/)?.[1] ?? ''
if (!origins || origins.includes('*')) {
  errors.push('wrangler.toml must contain an explicit ALLOWED_ORIGINS list')
}

if (errors.length) {
  console.error('Invalid marketing production environment:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Marketing production environment is complete')
