import { test, expect } from '@playwright/test';

test('verify carboxiterapia content overhaul', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/carboxiterapia');

  // Check Intro
  await expect(page.getByText('Experiencias enfocadas en tu bienestar estético')).toBeVisible();

  // Check Guía Gratuita
  await expect(page.getByText('GUÍA GRATUITA')).toBeVisible();
  await expect(page.getByText('“Carbo”')).toBeVisible();

  // Check Educational Section
  await expect(page.getByRole('heading', { name: '¿Qué es la Carboxiterapia?', exact: true })).toBeVisible();

  // Check Zones
  await expect(page.getByText('¿Qué zonas o preocupaciones puede ayudar a mejorar?')).toBeVisible();

  // Check Methodology
  await expect(page.getByText('Qué incluye tu sesión')).toBeVisible();
  await expect(page.getByText('Paso 1')).toBeVisible();

  // Take screenshots
  await page.screenshot({ path: 'carboxiterapia_new_top.png' });
  await page.evaluate(() => window.scrollTo(0, 2000));
  await page.screenshot({ path: 'carboxiterapia_new_middle.png' });
  await page.evaluate(() => window.scrollTo(0, 4000));
  await page.screenshot({ path: 'carboxiterapia_new_bottom.png' });
});
