import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 10000 }); // Large height to capture long content
  await page.goto('http://localhost:4324/servicios/depilacion-laser');

  // Wait for content to load
  await page.waitForTimeout(2000);

  // Take a full page screenshot
  await page.screenshot({ path: 'laser_service_full.png', fullPage: true });

  // Take specific screenshots of sections if needed
  // ...

  await browser.close();
})();
