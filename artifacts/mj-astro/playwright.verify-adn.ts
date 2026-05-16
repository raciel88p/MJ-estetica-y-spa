import { test, expect } from '@playwright/test';

test('Verify ADN Salmon page text update', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/adn-salmon');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);

  // Verify the new text is present
  await expect(page.locator('text="EL SECRETO COREANO"').first()).toBeVisible();

  await page.setViewportSize({ width: 1280, height: 2500 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/home/jules/verification/screenshots/verification-adn-salmon.png', fullPage: true });
});
