const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    await page.goto('http://localhost:4321/servicios/masajes-corporales', { waitUntil: 'networkidle' });
    await page.evaluate(() => {
        const h2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('Antes y después'));
        if (h2) h2.scrollIntoView();
    });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'verification/screenshots/slider_zoom_verified.png', fullPage: false });
    console.log('Screenshot captured');
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
