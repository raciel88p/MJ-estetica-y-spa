import { test, expect } from '@playwright/test';

test('Home page styles load properly', async ({ page }) => {
  await page.goto('/');

  // Verify that the Tailwind typography styles are applied
  const h1 = page.locator('h1').first();
  await expect(h1).toBeVisible();

  // We can verify CSS classes haven't been aggressively stripped
  // Ensure Tailwind base font families and tracking are applied
  await expect(h1).toHaveCSS('font-family', /"Cormorant Garamond", serif/);
  await expect(page.locator('body')).toHaveCSS('background-color', /rgb\(245, 248, 249\)|rgb\(246, 248, 250\)/); // Allow slight rendering variants

  // Verify the primary navbar is correctly positioned
  const nav = page.locator('header').first();
  await expect(nav).toBeVisible();
  await expect(nav).toHaveCSS('position', 'fixed');
});
