const fs=require('fs');
const path=require('path');
const assert=require('assert');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('href="assets/favicon.svg"'),'SVG favicon should be linked');
assert(html.includes('function drawResourceIcon(parent,item'),'resource-specific SVG icons should be rendered');
assert(html.includes('Fluid Buffer · 400 m³'),'small Satisfactory fluid buffer capacity should be offered');
assert(html.includes('Industrial Fluid Buffer · 2,400 m³'),'industrial Satisfactory fluid buffer capacity should be offered');
assert(html.includes('fluid-vessel-fill'),'fluid tank should show a fill gauge');
assert(html.includes('stored.toFixed(1)} / ${capacity} m³'),'stored fluid and capacity should be visible');
const resourceDir=path.join(root,'assets','resources');
const buildingDir=path.join(root,'assets','buildings');
assert(fs.existsSync(path.join(root,'assets','favicon.svg')),'favicon SVG asset should exist');
assert(fs.readdirSync(resourceDir).filter(f=>f.endsWith('.svg')).length>=60,'resource SVG catalog should include all current resources');
assert(fs.readdirSync(buildingDir).filter(f=>f.endsWith('.svg')).length>=30,'building SVG catalog should include building visuals');
for(const dir of [resourceDir,buildingDir]) for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.svg'))){const svg=fs.readFileSync(path.join(dir,f),'utf8');assert(svg.startsWith('<svg '),`${f} should be SVG`);assert(svg.includes('</svg>'),`${f} should close SVG`)}
console.log('SVG assets and fluid capacity tests passed');
