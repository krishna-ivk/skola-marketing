CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  school TEXT NOT NULL,
  city TEXT NOT NULL,
  role TEXT NOT NULL,
  students TEXT NOT NULL,
  board TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  goal TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

CREATE TABLE IF NOT EXISTS lead_idempotency_cache (
  idempotency_key TEXT PRIMARY KEY,
  response_body TEXT NOT NULL,
  status_code INTEGER NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lead_idempotency_expires ON lead_idempotency_cache(expires_at);
