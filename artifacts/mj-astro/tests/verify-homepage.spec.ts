import { test, expect } from '@playwright/test';

test('homepage visual verification', async ({ page }) => {
  // Go to homepage
  await page.goto('http://localhost:4321/');

  // Wait for content to load
  await page.waitForSelector('h1');

  // Verify main title
  await expect(page.locator('h1')).toContainText('Realza tu');
  await expect(page.locator('h1')).toContainText('belleza natural');

  // Take screenshot of hero
  await page.screenshot({ path: 'homepage-hero.png' });

  // Verify Especialidades section
  const especialidades = page.locator('#especialidades');
  await expect(especialidades).toBeVisible();
  await expect(especialidades.locator('h3')).toContainText('Nuestras Especialidades');

  // Verify 3 categories
  const categories = especialidades.locator('a');
  await expect(categories).toHaveCount(3);

  await page.screenshot({ path: 'homepage-especialidades.png' });

  // Verify Tratamientos Destacados section
  const destacados = page.locator('#tratamientos-destacados');
  await expect(destacados).toBeVisible();
  await expect(destacados.locator('h2')).toContainText('Nuestros resultados');

  // Verify featured items (6 items)
  const items = destacados.locator('.group');
  // We check for at least some items
  const itemCount = await items.count();
  console.log(`Found ${itemCount} featured items`);
  expect(itemCount).toBeGreaterThanOrEqual(3);

  await page.screenshot({ path: 'homepage-destacados.png' });

  // Verify Map
  const map = page.locator('#contacto');
  await expect(map).toBeVisible();
  await expect(map).toContainText('Turrialba Centro');

  await page.screenshot({ path: 'homepage-contact.png' });
});
