import { test, expect } from '@playwright/test';

test('Botox page renders correctly with custom content and before/after', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/botox-full-face');

  // Check hero
  await expect(page.getByRole('heading', { name: 'Botox Full Face en Turrialba', exact: true })).toBeVisible();
  await expect(page.getByText('EL TRATAMIENTO Nº1', { exact: false })).toBeVisible();

  // Check custom content sections
  await expect(page.getByRole('heading', { name: '¿Es para ti el Botox Full Face?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '¿Cómo funciona la magia del botox?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Protocolo Premium' })).toBeVisible();

  // Check FAQ section (restored and premium)
  await expect(page.getByRole('heading', { name: 'Preguntas Frecuentes' })).toBeVisible();
  await expect(page.getByText('¿Cuánto tiempo duran los resultados?')).toBeVisible();

  // Take a screenshot for visual confirmation
  await page.screenshot({ path: 'botox_verification.png', fullPage: true });
});
