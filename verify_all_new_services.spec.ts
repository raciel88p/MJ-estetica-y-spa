import { test, expect } from '@playwright/test';

test('verify new premium services and navbar', async ({ page }) => {
  // Increase timeout for slow dev server
  test.setTimeout(120000);

  await page.goto('http://localhost:4321/servicios/blanqueamiento-zona-intima');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'blanqueamiento.png', fullPage: true });
  await expect(page.locator('h1')).toContainText('Blanqueamiento de Zona Íntima');

  await page.goto('http://localhost:4321/servicios/aromaterapia');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'aromaterapia.png', fullPage: true });
  await expect(page.locator('h1')).toContainText('Aromaterapia');

  await page.goto('http://localhost:4321/servicios/rejuvenecimiento-facial-laser');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'rejuvenecimiento_laser.png', fullPage: true });
  await expect(page.locator('h1')).toContainText('Rejuvenecimiento Facial con Láser');

  // Verify Navbar 5-column layout
  await page.goto('http://localhost:4321/');
  await page.waitForLoadState('networkidle');
  // Trigger dropdown
  await page.getByRole('button', { name: 'Médicos y Estéticos' }).click();
  await page.screenshot({ path: 'navbar_dropdown.png' });
});
