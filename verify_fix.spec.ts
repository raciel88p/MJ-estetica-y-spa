import { test, expect } from '@playwright/test';

test('verify home page fixes', async ({ page }) => {
  await page.goto('http://localhost:4330/');

  // Wait for content to load
  await page.waitForTimeout(2000);

  // Take screenshot of specialties section
  const specialties = await page.locator('#especialidades');
  await specialties.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'specialties_fix.png' });

  // Take screenshot of destacados section
  const destacados = await page.locator('#tratamientos-destacados');
  await destacados.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'destacados_fix.png' });
});
