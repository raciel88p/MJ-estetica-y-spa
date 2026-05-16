import { test, expect } from '@playwright/test';

test('Verify Profesional Responsable block removed on nutricion page', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/nutricion');
  await page.waitForLoadState('domcontentloaded');

  // Try to find the element that shouldn't be there
  const element = page.locator('text="Profesional responsable"');
  await expect(element).toHaveCount(0);
});
