const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
if (!html.includes("const producedByItem=state.machineProduced[n.id]||{};")) throw Error('Produced display does not read the per-item counter object');
if (!html.includes("producedEntries.map(([item,count])=>`${item}: ${count}`).join(', ')")) throw Error('Produced display does not format per-item counters');
if (!html.includes("producedEntries.length?`${producedTotal} total (")) throw Error('Produced display is missing total and empty fallback');
if (html.includes("row('Produced',state.machineProduced[n.id]||0)")) throw Error('Old object-to-string rendering remains');
console.log('PASS Produced inspector displays total and per-resource counts instead of [object Object]');
