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
