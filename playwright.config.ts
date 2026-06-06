import { defineConfig, devices } from '@playwright/test'

const chromiumExecutable = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
const launchOptions = chromiumExecutable ? { executablePath: chromiumExecutable } : undefined

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run build && node scripts/serve-static.js',
    port: 3000,
    reuseExistingServer: false,
    timeout: 180000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: [['list'], ['json', { outputFile: 'test-results/results.json' }]],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    ...(launchOptions ? { launchOptions } : {}),
  },
  projects: [
    {
      name: 'smoke',
      testMatch: /smoke\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        ...(launchOptions ? { launchOptions } : {}),
      },
    },
  ],
})
