import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Paquetes page functionality', async ({ page }) => {
  // Go to the page
  await page.goto('http://localhost:4321/paquetes');

  // Step 1: Initial View
  await expect(page.locator('h1')).toContainText('Promociones');
  await page.screenshot({ path: 'paquetes-v-1-initial.png', fullPage: true });

  // Handle the prompt for Admin Key
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    if (dialog.type() === 'prompt') {
      await dialog.accept('mj-admin-secret-2025');
    } else {
      await dialog.dismiss();
    }
  });

  // Step 2: Enter Admin Mode
  // Try finding the button by role or simple text
  const adminBtn = page.getByRole('button').filter({ hasText: 'MODO ADMIN' });
  await adminBtn.waitFor({ state: 'visible' });
  await adminBtn.click();

  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'paquetes-v-2-admin.png', fullPage: true });

  await expect(page.getByText('Sube nuevas promociones')).toBeVisible({ timeout: 10000 });

  // Step 3: Upload an image
  const testImagePath = path.join(process.cwd(), 'test-promo.png');
  if (!fs.existsSync(testImagePath)) {
     fs.copyFileSync('paquetes-v-1-initial.png', testImagePath);
  }

  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles(testImagePath);

  // Wait for the image to appear in the gallery
  await expect(page.locator('div.grid img')).toBeVisible({ timeout: 15000 });
  await page.screenshot({ path: 'paquetes-v-3-uploaded.png', fullPage: true });

  // Step 4: Delete the image
  const deleteButton = page.locator('button:has(svg.lucide-trash-2)').first();
  await deleteButton.click();

  // Confirm deletion
  await expect(page.locator('div.grid img')).not.toBeVisible({ timeout: 10000 });
  await page.screenshot({ path: 'paquetes-v-4-deleted.png', fullPage: true });
});
