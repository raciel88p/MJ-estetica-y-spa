const fs = require('fs');

const filePaths = [
  'artifacts/mj-astro/src/components/pages/home.tsx'
];

filePaths.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Make sure we have the fallback rendering correctly configured for SSR
    content = content.replace(
      /const abVariant = useABTest\(\{testName: 'hero_cta_color', variants: \{A: 'primary', B: 'accent'\}\}\)\.value;/,
      `const abTestResult = useABTest({testName: 'hero_cta_color', variants: {A: 'primary', B: 'accent'}});\n  const abVariant = abTestResult ? abTestResult.value : 'primary';`
    );

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
});
