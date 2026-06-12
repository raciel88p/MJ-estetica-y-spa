import { test, expect } from '@playwright/test';

test('verify peeling-quimico page', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/peeling-quimico');

  // Wait for content
  await page.waitForTimeout(2000);

  // Check if H1 is visible
  const h1 = page.locator('h1');
  await expect(h1).toBeVisible();
  console.log('H1 Text:', await h1.innerText());

  // Check if PeelingFacialContent is rendered
  const introText = page.getByText('Renovación Facial Avanzada');
  await expect(introText).toBeVisible();

  await page.screenshot({ path: 'peeling_check.png', fullPage: true });
});
