import { test, expect } from '@playwright/test';

test('promotions page (paquetes) renders correctly', async ({ page }) => {
  // Go to the local dev server
  await page.goto('http://localhost:4321/paquetes');

  // Verify the main heading using a more specific selector
  const mainHeading = page.locator('section.relative h1');
  await expect(mainHeading).toContainText('Nuestras');
  await expect(mainHeading).toContainText('Promociones');

  // Verify the admin toggle exists
  const adminToggle = page.locator('button:has-text("Modo Admin")');
  await expect(adminToggle).toBeVisible();

  // Click admin toggle
  await adminToggle.click();
  await expect(page.locator('button:has-text("Admin Activo")')).toBeVisible();

  // Verify the upload zone appears in admin mode
  await expect(page.locator('text=Sube nuevas promociones')).toBeVisible();

  // Take a screenshot
  await page.screenshot({ path: 'promotions-page.png', fullPage: true });
});
