import { test, expect } from '@playwright/test';

test('masajes corporales page has professional sections and disclaimer', async ({ page }) => {
  // Go to the masajes corporales service page
  await page.goto('http://localhost:4321/servicios/masajes-corporales');

  // Check for Janneth Maria Molina Madrigal (Professional section)
  await expect(page.getByText('Janneth Maria Molina Madrigal')).toBeVisible();

  // Check for the disclaimer
  await expect(page.getByText('Los resultados y la cantidad de sesiones varían según cada individuo')).toBeVisible();

  // Check for "Qué incluye"
  await expect(page.getByRole('heading', { name: 'Qué incluye' })).toBeVisible();
});
