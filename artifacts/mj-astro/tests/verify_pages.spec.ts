import { test, expect } from '@playwright/test';

test('verify medical aesthetics landing page', async ({ page }) => {
  await page.goto('http://localhost:4321/medicina-estetica');
  await expect(page.locator('h1')).toContainText('Tratamientos Médico-Estéticos');
  await expect(page.locator('text=MÉDICOS')).toBeVisible();

  // Verify Navbar link
  await page.goto('http://localhost:4321/');
  // Hover over 'Médicos y Estéticos' button
  await page.getByRole('button', { name: 'Médicos y Estéticos' }).click(); // Using click as fallback for hover in tests if needed, or hover
  await expect(page.getByRole('link', { name: 'Armonización Facial', exact: true })).toBeVisible();
});
