const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2000 });
  await page.goto('http://localhost:4330/');

  // Wait for animations and content
  await page.waitForTimeout(3000);

  // Screenshot of the whole page
  await page.screenshot({ path: '../../home_fixed.png', fullPage: true });

  await browser.close();
  console.log('Screenshot saved as home_fixed.png');
})();
