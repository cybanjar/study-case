import { expect, test } from '@playwright/test'

test('should search business', async ({
  page
}) => {
  await page.goto('/bizhare')

  const search = page.getByTestId(
    'business-search'
  )

  await search.fill('Coffee')

  await page.waitForTimeout(1000)

  await expect(search).toHaveValue(
    'Coffee'
  )
})
