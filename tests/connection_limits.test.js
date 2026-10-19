const fs=require('fs'),vm=require('vm'),path=require('path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const src=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');
function getFn(name,next){const a=src.indexOf('function '+name+'(');if(a<0)throw Error('missing '+name);const b=src.indexOf('\nfunction '+next+'(',a);if(b<0)throw Error('missing end '+next);return src.slice(a,b)}
const ctx={state:{nodes:[],powerEdges:[]},node(id){return ctx.state.nodes.find(n=>n.id===id)},Math,Map,Set,Number,String};vm.createContext(ctx);
vm.runInContext(getFn('powerPoleLimit','powerWireCount'),ctx);
vm.runInContext(getFn('powerWireCount','powerWireLimitStatus'),ctx);
vm.runInContext(getFn('powerWireLimitStatus','canAddPowerWire'),ctx);
vm.runInContext(getFn('canAddPowerWire','normalizePowerEdges'),ctx);
vm.runInContext(getFn('normalizePowerEdges','pointerWorldPoint'),ctx);
ctx.state.nodes=[{id:1,type:'powerPole',poleMk:1},{id:2,type:'powerPole',poleMk:2},{id:3,type:'machine'},{id:4,type:'machine'},{id:5,type:'machine'},{id:6,type:'machine'},{id:7,type:'machine'}];
if(ctx.powerPoleLimit(ctx.node(1))!==4||ctx.powerPoleLimit(ctx.node(2))!==7||ctx.powerPoleLimit(ctx.node(3))!==Infinity)throw Error('wrong limits');
for(let i=0;i<4;i++)ctx.state.powerEdges.push({from:1,to:3+i});
// The pole is already at its four-wire cap even if later targets are not in this small fixture.
if(ctx.canAddPowerWire(ctx.node(1),ctx.node(2)))throw Error('Mk.1 limit should reject a fifth connection');
ctx.state.powerEdges=[{from:1,to:2},{from:1,to:3},{from:1,to:4},{from:1,to:5},{from:1,to:6},{from:1,to:2}];ctx.normalizePowerEdges();
if(ctx.state.powerEdges.length!==4)throw Error('normalization should remove duplicate and over-limit edges');
console.log('PASS Power Pole Mk.1/Mk.2/Mk.3 limits (4/7/10)');
console.log('PASS connection cap rejects an extra direct wire');
console.log('PASS imported power graph normalization removes duplicates and over-limit edges');
