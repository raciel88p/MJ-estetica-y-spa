const fs = require('fs');

const filePaths = [
  'artifacts/mj-astro/src/components/pages/ServicePage.tsx',
  'artifacts/mj-spa/src/pages/ServicePage.tsx'
];

filePaths.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match the LINC FISIO TERAPIA section
    const lincFisioTerapiaRegex = /\{\/\* ── LINC FISIO TERAPIA – PROFESIONAL RESPONSABLE ── \*\/\}\n\s*\{\!\[.*?\]\.includes\(service\.slug\) && \(\n\s*<section className="py-10 bg-white border-b border-stone-100">\n[\s\S]*?<\/section>\n\s*\)\}/m;
    const lincMatch = content.match(lincFisioTerapiaRegex);

    // Regex to match the TRUST BAR section
    const trustBarRegex = /\{\/\* ── TRUST BAR ───+ \*\/\}\n\s*<section className="bg-\[#040f19\] py-5 border-b border-white\/5">\n[\s\S]*?<\/section>/m;
    const trustBarMatch = content.match(trustBarRegex);

    if (lincMatch && trustBarMatch) {
      // Remove both sections from their original positions
      content = content.replace(lincMatch[0], '');
      content = content.replace(trustBarMatch[0], '');

      // Insert them back in the desired order (TRUST BAR then LINC FISIO TERAPIA)
      // I'll place them where the TRUST BAR was originally
      const insertionPoint = "      {/* ── ABOUT THE TREATMENT ────────────────────── */}\n";
      content = content.replace(insertionPoint, `${lincMatch[0]}\n\n${trustBarMatch[0]}\n\n${insertionPoint}`);

      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    } else {
        console.log(`Could not find sections to swap in ${filePath}`);
    }
  }
});
