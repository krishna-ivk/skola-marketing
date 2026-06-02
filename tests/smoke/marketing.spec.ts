import { test, expect } from '@playwright/test'

test.describe('Marketing site smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        test.info().annotations.push({ type: 'console-error', description: msg.text() })
      }
    })
  })

  test('homepage loads with correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Skola/)
  })

  test('no console errors on homepage', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    expect(errors).toEqual([])
  })

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'For Schools', href: '/for-schools' },
    { name: 'Competency Maps', href: '/competency-maps' },
    { name: 'Book a Demo', href: '/book-demo' },
    { name: 'Contact', href: '/contact' },
  ]

  for (const link of navLinks) {
    test(`nav link "${link.name}" navigates to ${link.href}`, async ({ page }) => {
      await page.goto('/')
      await page.locator('header').getByRole('link', { name: link.name }).click()
      await expect(page).toHaveURL(link.href)
    })
  }

  test('privacy page loads', async ({ page }) => {
    await page.goto('/privacy/')
    await expect(page).toHaveTitle(/Skola/)
  })

  test('book demo page has form with required fields', async ({ page }) => {
    await page.goto('/book-demo/')
    const form = page.locator('form')
    await expect(form).toBeVisible()
    await expect(form.locator('#school')).toBeVisible()
    await expect(form.locator('#city')).toBeVisible()
    await expect(form.locator('#role')).toBeVisible()
    await expect(form.locator('#students')).toBeVisible()
    await expect(form.locator('#board')).toBeVisible()
    await expect(form.locator('#phone')).toBeVisible()
    await expect(form.locator('#email')).toBeVisible()
  })
})
