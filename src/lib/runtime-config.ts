const DEFAULT_LEAD_FORM_URL = 'https://skola-lead-form.skola.workers.dev'

export const leadFormUrl =
  process.env.NEXT_PUBLIC_LEAD_FORM_URL?.trim().replace(/\/$/, '') ||
  DEFAULT_LEAD_FORM_URL
