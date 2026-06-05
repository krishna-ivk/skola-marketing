import { test, expect } from '@playwright/test'

test.describe('Book Demo — form feedback states', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/book-demo/')
  })

  test('empty submit shows inline field errors', async ({ page }) => {
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('text=School name is required')).toBeVisible()
    await expect(page.locator('text=Email is required')).toBeVisible()
  })

  test('invalid email shows format error', async ({ page }) => {
    await page.fill('#school', 'Test School')
    await page.fill('#city', 'Mumbai')
    await page.selectOption('#role', 'principal')
    await page.selectOption('#students', '200-500')
    await page.selectOption('#board', 'cbse')
    await page.fill('#phone', '9876543210')
    await page.fill('#email', 'not-an-email')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('text=Please enter a valid email address')).toBeVisible()
  })

  test('double-submit prevention disables button during submission', async ({ page }) => {
    await page.route('https://skola-lead-form.skola.workers.dev/**', async route => {
      await new Promise(r => setTimeout(r, 5000))
      await route.fulfill({ status: 201, body: JSON.stringify({ success: true, message: 'Lead recorded successfully', requestId: 'r_abc', actionId: 'lead_xyz', status: 'completed', recordedAt: new Date().toISOString() }) })
    })
    await page.fill('#school', 'Test School')
    await page.fill('#city', 'Mumbai')
    await page.selectOption('#role', 'principal')
    await page.selectOption('#students', '200-500')
    await page.selectOption('#board', 'cbse')
    await page.fill('#phone', '9876543210')
    await page.fill('#email', 'principal@test.edu')
    const btn = page.locator('button[type="submit"]')
    await btn.click()
    await expect(btn).toBeDisabled()
  })

  test('successful submission shows confirmation', async ({ page }) => {
    await page.route('https://skola-lead-form.skola.workers.dev/**', route => {
      route.fulfill({ status: 201, body: JSON.stringify({ success: true, message: 'Lead recorded successfully', requestId: 'r_abc', actionId: 'lead_xyz', status: 'completed', recordedAt: new Date().toISOString() }) })
    })
    await page.fill('#school', 'Test School')
    await page.fill('#city', 'Mumbai')
    await page.selectOption('#role', 'principal')
    await page.selectOption('#students', '200-500')
    await page.selectOption('#board', 'cbse')
    await page.fill('#phone', '9876543210')
    await page.fill('#email', 'principal@test.edu')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('text=Request Received')).toBeVisible({ timeout: 10000 })
  })

  test('network failure shows retry message', async ({ page }) => {
    await page.route('https://skola-lead-form.skola.workers.dev/**', route => {
      route.abort('connectionrefused')
    })
    await page.fill('#school', 'Test School')
    await page.fill('#city', 'Mumbai')
    await page.selectOption('#role', 'principal')
    await page.selectOption('#students', '200-500')
    await page.selectOption('#board', 'cbse')
    await page.fill('#phone', '9876543210')
    await page.fill('#email', 'principal@test.edu')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('text=Could not reach server')).toBeVisible({ timeout: 10000 })
  })

  test('clearing a field after error removes the error', async ({ page }) => {
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('text=School name is required')).toBeVisible()
    await page.fill('#school', 'Test School')
    await expect(page.locator('text=School name is required')).not.toBeVisible()
  })

  test('sends Idempotency-Key header on submit', async ({ page }) => {
    let header: string | null = null
    await page.route('https://skola-lead-form.skola.workers.dev/**', (route, request) => {
      header = request.headers()['idempotency-key'] || null
      route.fulfill({ status: 201, body: JSON.stringify({ success: true }) })
    })
    await page.fill('#school', 'Test School')
    await page.fill('#city', 'Mumbai')
    await page.selectOption('#role', 'principal')
    await page.selectOption('#students', '200-500')
    await page.selectOption('#board', 'cbse')
    await page.fill('#phone', '9876543210')
    await page.fill('#email', 'principal@test.edu')
    await page.locator('button[type="submit"]').click()
    expect(header).toMatch(/^ui_\d{13}_lead_/)
  })
})

test.describe('Contact form — feedback states', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact/')
  })

  test('empty submit shows inline errors', async ({ page }) => {
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('text=Name is required')).toBeVisible()
    await expect(page.locator('text=Email is required')).toBeVisible()
    await expect(page.locator('text=Message is required')).toBeVisible()
  })
})
