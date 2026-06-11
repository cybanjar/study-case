import { expect, test } from '@playwright/test'

test(
  'should open category modal',
  async ({ page }) => {
    await page.goto('/bizhare')

    await page
      .getByTestId('filter-button')
      .click()

    await expect(
      page.getByTestId(
        'category-modal'
      )
    ).toBeVisible()
  }
)
