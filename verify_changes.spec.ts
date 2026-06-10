import { test, expect } from '@playwright/test';

test('verify laser rejuvenation page', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/rejuvenecimiento-facial-laser');

  // Verify Hero
  await expect(page.locator('h1')).toContainText('Rejuvenecimiento Facial con Láser en Turrialba');
  await page.screenshot({ path: 'laser_hero.png' });

  // Verify PAS section
  await expect(page.getByText('¿Buscas un tratamiento de rejuvenecimiento facial con láser en Turrialba?')).toBeVisible();
  await page.screenshot({ path: 'laser_pas.png' });

  // Verify Lead Magnet
  await expect(page.getByText('REJUVENECIMIENTO')).toBeVisible();
  await page.screenshot({ path: 'laser_lead_magnet.png' });
});

test('verify aromatherapy image fix', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/aromaterapia');

  const img = page.locator('img[alt="Aromaterapia Experience"]');
  await expect(img).toBeVisible();

  // Check if image is loaded (naturalWidth > 0)
  const isLoaded = await img.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0);
  console.log('Aromatherapy image loaded:', isLoaded);

  await page.screenshot({ path: 'aromaterapia_fix.png' });
});
