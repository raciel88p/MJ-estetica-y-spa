import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        try:
            # Wait for the server to be ready
            await page.goto('http://localhost:4322', wait_until='networkidle', timeout=60000)

            # Scroll to the services section
            await page.evaluate("document.getElementById('servicios').scrollIntoView();")
            await asyncio.sleep(2) # Wait for animations

            # Take a screenshot
            await page.screenshot(path='home_servicios_fixed.png')
            print("Screenshot saved to home_servicios_fixed.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
