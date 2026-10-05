import { test, expect } from '@playwright/test';

test('verify muscle release massage page in english', async ({ page }) => {
  await page.goto('http://localhost:4321/en/services/muscle-release-massage');
  await page.waitForLoadState('networkidle');

  // Verify H1 title
  const h1 = page.locator('h1');
  await expect(h1).toContainText('Muscle Recovery Massage in Turrialba');

  // Verify tagline/hero text
  await expect(page.locator('body')).toContainText('Your body needs care, too');
  await expect(page.locator('body')).toContainText('There are days when your body simply says: “I need to slow down.”');

  // Take screenshot
  await page.screenshot({ path: 'muscle-release-massage-en.png', fullPage: true });
});
