import { expect, test } from '@playwright/test'

test('should render business page', async ({
  page
}) => {
  await page.goto('/bizhare')

  await expect(
    page.getByText('Kategori')
  ).toBeVisible()
})
