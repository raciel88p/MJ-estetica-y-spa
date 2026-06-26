const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  // Go to the home page
  console.log('Navigating to http://localhost:4330/');
  await page.goto('http://localhost:4330/');

  // Wait for some time for initial load
  await page.waitForTimeout(2000);

  // Scroll down to trigger Framer Motion animations
  console.log('Scrolling down...');
  await page.evaluate(async () => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i);
      await delay(50);
    }
  });

  // Wait for animations to finish
  await page.waitForTimeout(3000);

  // Take a full page screenshot
  console.log('Taking screenshot...');
  await page.screenshot({ path: 'home_fixed_scrolled.png', fullPage: true });

  await browser.close();
  console.log('Done!');
})();
