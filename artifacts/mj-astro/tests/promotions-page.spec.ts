import { test, expect } from '@playwright/test';

test('promotions page (paquetes) renders correctly', async ({ page }) => {
  // Go to the local dev server
  await page.goto('http://localhost:4321/paquetes');

  // Verify the main heading
  const mainHeading = page.locator('section.relative h1');
  await expect(mainHeading).toContainText('Nuestras', { timeout: 15000 });

  // Take a screenshot of the initial state
  await page.screenshot({ path: 'paquetes-initial.png', fullPage: true });

  // Click admin toggle - using exact text or role if possible
  const adminToggle = page.getByRole('button', { name: /Modo Admin/i });
  await expect(adminToggle).toBeVisible({ timeout: 15000 });
  await adminToggle.click();

  // Wait for the state change
  const activeToggle = page.getByRole('button', { name: /Admin Activo/i });
  await expect(activeToggle).toBeVisible({ timeout: 15000 });

  // Verify the upload zone appears in admin mode
  await expect(page.locator('text=Sube nuevas promociones')).toBeVisible({ timeout: 15000 });

  // Take a screenshot of admin mode
  await page.screenshot({ path: 'promotions-admin.png', fullPage: true });
});
