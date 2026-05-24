import { test, expect } from '@playwright/test';

test('Botox page renders correctly with custom content and before/after', async ({ page }) => {
  await page.goto('http://localhost:4321/servicios/botox-full-face');

  // Check hero
  await expect(page.getByRole('heading', { name: 'Botox Full Face en Turrialba', exact: true })).toBeVisible();
  await expect(page.getByText('Apariencia más fresca, descansada y natural', { exact: false })).toBeVisible();
  await expect(page.getByText('Tu rostro habla antes que tú', { exact: false })).toBeVisible();

  // Check new custom content sections
  await expect(page.getByRole('heading', { name: 'Guía GRATUITA: “Cómo hacer que tu Botox dure más”' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '¿Qué es el Botox Full Face?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Beneficios del Botox Full Face' })).toBeVisible();

  // Check FAQ section
  await expect(page.getByRole('heading', { name: 'Preguntas Frecuentes' })).toBeVisible();
  await expect(page.getByText('¿Cuánto duran los resultados?')).toBeVisible();

  // Take a screenshot for visual confirmation
  await page.screenshot({ path: 'botox_verification_new.png', fullPage: true });
});
