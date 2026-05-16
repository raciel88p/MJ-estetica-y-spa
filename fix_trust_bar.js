const fs = require('fs');

const filePaths = [
  'artifacts/mj-astro/src/components/pages/ServicePage.tsx',
  'artifacts/mj-spa/src/pages/ServicePage.tsx'
];

filePaths.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract Trust Bar block
    const trustBarMatch = content.match(/\{\/\* ── TRUST BAR ────────────────────────────────── \*\/\}\n\s*<section className="bg-\[#040f19\] py-5 border-b border-white\/5">\n[\s\S]*?<\/section>/);
    // Extract Linc Fisio Terapia block
    const lincMatch = content.match(/\{\/\* ── LINC FISIO TERAPIA – PROFESIONAL RESPONSABLE ── \*\/\}\n\s*\{\!\[.*?\]\.includes\(service\.slug\) && \(\n\s*<section className="py-10 bg-white border-b border-stone-100">\n[\s\S]*?<\/section>\n\s*\)\}/);

    if (trustBarMatch && lincMatch) {
      // Remove both blocks
      content = content.replace(trustBarMatch[0], '');
      content = content.replace(lincMatch[0], '');

      // Insert Linc Fisio Terapia then Trust Bar
      const insertionPoint = "{/* ── ABOUT THE TREATMENT ────────────────────── */}";
      content = content.replace(insertionPoint, `${lincMatch[0]}\n\n      ${trustBarMatch[0]}\n\n      ${insertionPoint}`);

      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    } else {
        console.log(`Could not find sections to swap in ${filePath}`);
    }
  }
});
