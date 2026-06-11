import { expect, test } from '@playwright/test'

test(
  'should change page',
  async ({ page }) => {
    await page.goto('/bizhare')

    const pagination
      = page.getByTestId(
        'pagination'
      )

    await expect(
      pagination
    ).toBeVisible()
  }
)
