const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Navigating to home page...');
    await page.goto('http://localhost:4330/', { waitUntil: 'networkidle' });

    const specialties = [
      { text: 'Depilación Láser', expectedUrl: '/servicios/laser' },
      { text: 'Terapias Faciales', expectedUrl: '/servicios/faciales' },
      { text: 'Masajes y Corporales', expectedUrl: '/servicios/corporales' },
      { text: 'Arteterapia', expectedUrl: '/servicios/piernas' } // Based on my code change: { title: "Arteterapia", desc: "Expresión creativa", img: "about-us.webp", link: "/servicios/piernas" }
    ];

    for (const specialty of specialties) {
      console.log(`Checking specialty: ${specialty.text}`);
      const link = page.locator(`a:has-text("${specialty.text}")`).first();
      const href = await link.getAttribute('href');
      console.log(`Href for ${specialty.text}: ${href}`);

      if (href !== specialty.expectedUrl) {
        console.error(`FAILED: ${specialty.text} link is ${href}, expected ${specialty.expectedUrl}`);
      } else {
        console.log(`SUCCESS: ${specialty.text} link is correct.`);
      }
    }

    console.log('Checking "Ver todos los servicios" link...');
    const allServicesLink = page.locator('text=VER TODOS LOS SERVICIOS').first();
    const allServicesHref = await allServicesLink.getAttribute('href');
    console.log(`Href for Ver todos los servicios: ${allServicesHref}`);

    if (allServicesHref !== '/servicios/masajes-corporales') {
        console.error(`FAILED: "Ver todos los servicios" link is ${allServicesHref}, expected /servicios/masajes-corporales`);
    } else {
        console.log(`SUCCESS: "Ver todos los servicios" link is correct.`);
    }

    // Test a service link in the "Featured" section
    console.log('Checking "Botox Full Face" link...');
    const botoxLink = page.locator('h3:has-text("Botox Full Face")').locator('xpath=ancestor::div[contains(@class, "group")]').locator('a:has-text("CONOCER MÁS")').first();
    const botoxHref = await botoxLink.getAttribute('href');
    console.log(`Href for Botox: ${botoxHref}`);
    if (botoxHref !== '/servicios/botox-full-face') {
         console.error(`FAILED: Botox link is ${botoxHref}, expected /servicios/botox-full-face`);
    } else {
         console.log(`SUCCESS: Botox link is correct.`);
    }

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
})();
