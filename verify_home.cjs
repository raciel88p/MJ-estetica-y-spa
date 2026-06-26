const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the home page
  await page.goto('http://localhost:4330/', { waitUntil: 'networkidle' });

  // Wait for animations
  await page.waitForTimeout(2000);

  // Scroll to specialties section
  await page.evaluate(() => {
    const el = document.getElementById('especialidades');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(1000);

  // Take screenshot of specialties
  await page.screenshot({ path: 'home_specialties.png' });

  // Scroll to featured treatments
  await page.evaluate(() => {
    const el = document.getElementById('tratamientos-destacados');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(1000);

  // Take screenshot of featured treatments (Hidrolipoclasia)
  await page.screenshot({ path: 'home_featured.png' });

  // Scroll a bit more to see the grid
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'home_featured_scrolled.png' });

  await browser.close();
  console.log('Screenshots saved.');
})();
