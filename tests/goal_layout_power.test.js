const fs = require('fs');
const assert = require('assert');
const html = fs.readFileSync(require('path').join(__dirname, '..', 'index.html'), 'utf8');
assert(html.includes("entry.n.x=180+d*310"), 'recipe columns should be arranged by dependency depth');
assert(html.includes("addNode('creativeGenerator',100,maxY+220,'' )") || html.includes("addNode('creativeGenerator',100,maxY+220,'')"), 'goal generation should create a Creative Generator');
assert(html.includes('state.powerEdges.push({from:gen.id,to:entry.n.id})'), 'generator should connect to each planned recipe machine');
assert(html.includes("$('#fitBtn').click();showDiagnostics()"), 'generated layout should be fit to canvas');
console.log('goal layout and generator wiring tests passed');
