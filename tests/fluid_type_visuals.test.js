const fs=require('fs');const path=require('path');const assert=require('assert');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
assert(html.includes('function fluidPalette(item)'),'fluid-specific palette exists');
for(const item of ['Water','Crude Oil','Heavy Oil Residue','Alumina Solution','Sulfuric Acid','Nitric Acid','Fuel','Turbofuel','Liquid Biofuel','Nitrogen Gas']) assert(html.includes(`'${item}':{kind:`),`visual style exists for ${item}`);
assert(html.includes('setFluidPalette(vessel,fluidName)'),'tank palette follows its stored fluid');
assert(html.includes("pendingKinds.some(k=>k!==packet.item)"),'tank does not mix incompatible fluid types arriving together');
assert(html.includes("storedKinds.some(k=>k!==packet.item)"),'tank does not accept a different fluid while occupied');
console.log('Fluid-specific visuals and single-fluid tank tests passed');
