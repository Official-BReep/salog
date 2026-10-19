const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync(require('path').join(__dirname,'..','index.html'),'utf8');
const src=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');
function getFn(name,next){const a=src.indexOf('function '+name+'(');if(a<0)throw Error('missing '+name);const b=src.indexOf('\nfunction '+next+'(',a);if(b<0)throw Error('missing end '+next);return src.slice(a,b)}
const ctx={state:{nodes:[],powerEdges:[],powerTrips:{},simTime:1},node(id){return ctx.state.nodes.find(n=>n.id===id)},isMinerType(){return false},Math,Map,Set,Number,String,console};
ctx.machinePowerMW=(n)=>{if(n.manualPaused)return 0;return ({Constructor:4,Assembler:15}[n.machineType]||0)*Math.max(1,+n.clock||100)/100};
vm.createContext(ctx);
vm.runInContext(getFn('powerComponents','powerNetworkFor'),ctx);
vm.runInContext(getFn('evaluatePowerTrips','restartPowerGrid'),ctx);
const {state}=ctx;
state.nodes=[
 {id:1,type:'creativeGenerator',generatorOnline:true,generatorMW:2},
 {id:2,type:'battery',batteryCharge:1,batteryCapacity:10,batteryMaxRate:5},
 {id:3,type:'machine',machineType:'Constructor',clock:100,manualPaused:false}
];state.powerEdges=[{from:1,to:2},{from:2,to:3}];
let c=ctx.powerComponents()[0];if(Math.abs(c.demand-4)>1e-6||Math.abs(c.supply-7)>1e-6)throw Error('power component math wrong '+JSON.stringify({demand:c.demand,supply:c.supply}));
const before=state.nodes[1].batteryCharge;ctx.evaluatePowerTrips();if(!(state.nodes[1].batteryCharge<before))throw Error('battery should discharge for deficit');if(Object.keys(state.powerTrips).length)throw Error('sufficient battery should prevent trip');
state.nodes[2].machineType='Assembler'; // 15 MW load; 2 MW gen + 5 MW battery is insufficient
ctx.evaluatePowerTrips();if(!Object.keys(state.powerTrips).length)throw Error('overloaded network should trip');
// A fuel-starved generator trips the grid, but restored generation resumes it automatically.
state.powerTrips={};state.nodes=[
 {id:10,type:'biomassGenerator',generatorOnline:true,generatorMW:5},
 {id:11,type:'machine',machineType:'Constructor',clock:100,manualPaused:false}
];state.powerEdges=[{from:10,to:11}];
ctx.evaluatePowerTrips();state.nodes[0].generatorOnline=false;ctx.evaluatePowerTrips();
if(!Object.keys(state.powerTrips).length)throw Error('generator outage should trip grid');
state.nodes[0].generatorOnline=true;ctx.evaluatePowerTrips();
if(Object.keys(state.powerTrips).length)throw Error('grid should automatically resume when generation returns');
// Restoring power must not clear explicit user pauses.
state.nodes[1].manualPaused=true;state.nodes[0].generatorOnline=false;ctx.evaluatePowerTrips();state.nodes[0].generatorOnline=true;ctx.evaluatePowerTrips();
if(!state.nodes[1].manualPaused)throw Error('manual pause must remain set after power restoration');
console.log('PASS automatic grid recovery when generator power returns');
console.log('PASS manual pause preserved during automatic power recovery');
console.log('PASS power graph component aggregation');console.log('PASS battery MWh/MW discharge conversion');console.log('PASS power trip on deficit exceeding generator+battery output');
