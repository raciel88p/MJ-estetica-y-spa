import { test, expect } from '@playwright/test';

test('verify medical aesthetics landing page', async ({ page }) => {
  await page.goto('http://localhost:4321/medicina-estetica');
  await expect(page.locator('section.relative h1')).toContainText('Tratamientos Médico-Estéticos');
  await expect(page.locator('section').filter({ hasText: 'MÉDICOS' }).getByText('MÉDICOS', { exact: true })).toBeVisible();

  // Verify Navbar link
  await page.goto('http://localhost:4321/');
  // The category label is now an anchor, not a button
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Médicos y Estéticos' })).toBeVisible();
});
