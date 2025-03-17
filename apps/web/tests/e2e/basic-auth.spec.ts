import { test, expect } from '@playwright/test'

test('Basic auth', async ({ page }) => {
  if (!process.env.TEST_PASSWORD) throw new TypeError('Missing TEST_PASSWORD')

  await test.step('should login', async () => {
    await page.goto('http://localhost:3000/api/auth/signin')
    await page.getByLabel('Password').fill(process.env.TEST_PASSWORD!)
    await page.getByRole('button', { name: 'Sign in with Password' }).click()
    await page.waitForURL('http://localhost:3000/en')
    const session = await page.locator('pre').textContent()

    expect(JSON.parse(session ?? '{}')).toEqual({
      user: {
        email: 'bob@alice.com',
        name: 'Bob Alice',
        image: 'https://avatars.githubusercontent.com/u/67470890?s=200&v=4',
      },
      expires: expect.any(String),
    })
  })

  await test.step('should logout', async () => {
    await page.getByText('Sign Out').click()
    await page.locator('header').getByRole('button', { name: 'Sign In', exact: true }).waitFor()
    await page.goto('http://localhost:3000/api/auth/session')

    expect(await page.locator('html').textContent()).toBe('null')
  })
})
