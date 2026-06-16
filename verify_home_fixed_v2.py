import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 1200})
        try:
            await page.goto('http://localhost:4322', wait_until='networkidle')
            # Wait for the treatments section
            await page.wait_for_selector('text=Nuestras áreas')
            # Scroll to it
            await page.evaluate("document.querySelector('section:has-text(\"Nuestras áreas\")').scrollIntoView()")
            await asyncio.sleep(1)
            await page.screenshot(path='home_servicios_fixed_v2.png')
            print("Screenshot saved to home_servicios_fixed_v2.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

asyncio.run(run())
