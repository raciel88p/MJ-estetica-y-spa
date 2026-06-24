import re
import os

def read_file(path):
    with open(path, 'r') as f:
        return f.read()

services_content = read_file('artifacts/mj-astro/src/data/services.ts')
service_page_content = read_file('artifacts/mj-astro/src/components/pages/ServicePage.tsx')

# Extract slugs from servicePages
slugs = re.findall(r'slug:\s*"([^"]+)"', services_content)
print(f"Slugs found in services.ts: {len(slugs)}")

# Extract keys from heroBgMap in ServicePage.tsx
hero_bg_map_match = re.search(r'const heroBgMap: Record<string, string> = \{(.*?)\};', service_page_content, re.DOTALL)
hero_bg_keys = []
if hero_bg_map_match:
    hero_bg_keys = re.findall(r'"([^"]+)":', hero_bg_map_match.group(1))

# Extract keys from serviceCategoryMap in ServicePage.tsx
category_map_match = re.search(r'const serviceCategoryMap: Record<string, \{ name: string; href: string \}> = \{(.*?)\};', service_page_content, re.DOTALL)
category_keys = []
if category_map_match:
    category_keys = re.findall(r'"([^"]+)":', category_map_match.group(1))

print("\nMissing in heroBgMap:")
for slug in slugs:
    if slug not in hero_bg_keys:
        print(f"  - {slug}")

print("\nMissing in serviceCategoryMap:")
for slug in slugs:
    if slug not in category_keys:
        print(f"  - {slug}")
