import { test, expect } from '@playwright/test';

test('carboxiterapia page has custom content and professional sections', async ({ page }) => {
  // Go to the carboxiterapia service page
  await page.goto('http://localhost:4321/servicios/carboxiterapia');

  // Check for the name of the service
  await expect(page.getByRole('heading', { name: 'Carboxiterapia', exact: true })).toBeVisible();

  // Check for Janneth Maria Molina Madrigal (Professional responsible section)
  await expect(page.getByText('Janneth Maria Molina Madrigal')).toBeVisible();

  // Check for custom content section "Oxigenación profunda"
  await expect(page.getByText('Oxigenación profunda para')).toBeVisible();

  // Check for steps "01", "02", "03", "04"
  await expect(page.getByText('01', { exact: true })).toBeVisible();
  await expect(page.getByText('04', { exact: true })).toBeVisible();

  // Check that generic "Nuestros Tratamientos" is NOT present
  // In the original it was "Nuestros Tratamientos" in a <p> tag
  await expect(page.getByText('Nuestros Tratamientos')).not.toBeVisible();
});
