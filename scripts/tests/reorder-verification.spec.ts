import { test, expect } from '@playwright/test';

test('Verify ServicePage layout reorder', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/botox-full-face');
  await page.waitForLoadState('domcontentloaded');
  // Scroll to trigger lazy loading of images
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3));
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 1.5));
  await page.waitForTimeout(2000);

  // Set viewport to capture the specific sections properly
  await page.setViewportSize({ width: 1280, height: 2500 });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2.5));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/home/jules/verification/screenshots/verification-reorder-final-3.png', fullPage: true });
});
