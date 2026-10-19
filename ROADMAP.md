## v8.2 update
- [x] Clickable diagnostics that jump to the affected building/connection and highlight the selected connection.
- [x] Specific remediation text for missing ports, wrong resource/port types, and transport overloads.
- [x] One-click belt/pipe tier recommendation when an available tier satisfies the estimated rate.
- [x] Calculated overclock recommendation and apply button for recognized downstream output shortages.
- [x] Live congestion/backpressure issue cards with receiver-buffer versus transport-capacity guidance.

# Satisfactory Logistics Planner Roadmap

## Current release: v10.3
- [x] Repair liquid surface animation using repeated SVG wave paths with counter-moving layers.
- [x] Differentiate major fluids and nitrogen gas with separate colors and labels.
- [x] Prevent a fluid buffer from mixing different fluid types.
- [ ] Expand recipe and machine data verification against current Satisfactory game data.
- [ ] Complete recipe-specific multi-port validation for every machine and resource kind.
- [ ] Expand full game power simulation, battery behavior and breaker semantics with regression tests.
- [ ] Add complete train, truck, drone and timetable simulation.
- [ ] Add true multi-floor 3D placement and collision checking.
- [ ] Automated browser regression suite for production limits, import/export, splitters, buffers and power trips.

## Earlier v9.5 foundation notes (historical)

### v9.5 core-first foundation
- [x] Interactive power network graph with clickable building nodes and wires.
- [x] Rolling time-series graph for power capacity, production, consumption, maximum consumption and stored energy.
- [x] Resource production-throughput history in items/min.
- [x] Battery energy units corrected to MWh storage and MW charge/discharge rates.
- [ ] Verify every built-in recipe, machine rate and alternate recipe against current game data.
- [ ] Complete recipe-specific multi-port validation for every machine and resource kind.
- [ ] Expand full game power simulation, battery behavior and breaker semantics with regression tests.
- [ ] Add complete train, truck, drone and timetable simulation.
- [ ] Add true multi-floor 3D placement and collision checking.
- [ ] Automated browser regression suite for production limits, import/export, splitters, buffers and power trips.

### v9.4 contextual sidebars
- [x] Both sidebars filter to the selected machine, structure, or connection.
- [x] The right Inspector displays relevant details for selected conveyor/pipeline and power connections, not generic factory text.
- [x] Clicking empty canvas restores global factory tools and data.

### v9.3 UI improvements
- [x] Toolbar dropdowns are mutually exclusive and remain within the viewport with internal scrolling.
- [x] Left sidebar switches to a contextual selection summary for machines, structures, transport lines and power connections; unrelated palette/settings are hidden while selected.
- [x] Clicking empty canvas restores factory-wide overview and global panels.
- [x] Conveyor/pipeline and power connections can be selected for details and explicitly deleted from their context panel.

### Implemented and retained
- [x] Target-product recipe selector: choose an alternative recipe for the goal item; preview and production plan update immediately, and the factory draft uses the selected target recipe.
- [x] Browser-based schematic factory editor with draggable nodes, ports, connections, zoom/pan, floors metadata and floor filter.
- [x] Recipe/machine port model with solid/fluid compatibility checks, automatic belt/pipe choice and transport tier capacities.
- [x] Discrete resource-flow simulation, finite buffers, machine output queues, packet spacing, congestion/backpressure and storage limits.
- [x] Continuous visual interpolation along exact SVG path length; v8.0 fixes the animation-loop scope bug and maps each visible connection to its true edge index so floor filtering cannot desynchronize paths.
- [x] Per-connection queue/in-transit/blocked-endpoint diagnostics.
- [x] Coal/fuel/nuclear generator approximations, separate power connections and component-level generation/demand checks.
- [x] Production goal calculator and recipe-based schematic draft builder with explicit unresolved raw-input placeholders.
- [x] Recipe JSON import/export with structural validation; layout/blueprint import/export; factory workspaces; CSV stats export; diagnostics.
- [x] Splitter/merger ports and item-filtered splitter variants.
- [x] Train/truck/drone building nodes as transfer hubs (not full vehicle simulation).

## Remaining work before true feature-complete/game-accurate parity

### Simulation validation
- [ ] Add automated conservation tests for every resource across source production, queues, machine stock, storage and in-transit packets.
- [ ] Verify animation and pause/resume at every speed in a real browser, including zoom, pan, edge deletion and floor filters.
- [ ] Add configurable per-building/per-item buffer capacities and utilization history over time.

### Power
- [ ] Batteries with capacity, charge/discharge limits and dispatch policy.
- [ ] Priority switches, fuse trips, restart delays and load shedding.
- [ ] Verify generator recipes/by-products, exact fuel use and nuclear waste lifecycle against selected game-version data.

### Recipes and mods
- [ ] Import a complete, version-pinned standard recipe dataset from a trusted, documented source and audit machine eligibility, cycle time, all quantities and multi-output recipes.
- [ ] Persistent mod profiles with source/mod/version IDs, conflict resolution, disable/enable and rollback. Current recipe JSON exchange validates structure, not factual correctness.

### Production planning and diagnosis
- [ ] Upgrade schematic factory generation to a constrained solver accounting for alternate recipes, coproducts, clock limits, power, transport tiers and resource-node limits.
- [ ] Simulate a proposed target graph and report achieved output versus requested output.
- [ ] Add utilization history and causal bottleneck diagnosis; preview repairs and require confirmation before applying changes.

### Logistics and 3D layout
- [ ] Train schedules with stations, platforms, loading/unloading, round-trip times and freight buffers.
- [ ] Truck routes with waypoints, travel times, fuel and station buffers.
- [ ] Drone destinations, battery/fuel use, flight time and port throughput.
- [ ] True height-aware 3D layout, collision/clearance checks, lifts and automatic obstacle-aware routing.
- [ ] Parameterized modular blueprints with rotation, mirroring, snapping and external-port mapping.

### Release criteria
- [ ] Automated regression suite and end-to-end browser tests for the above.
- [ ] Reproducible, documented dataset sources and a game-version compatibility statement.
- [ ] Do not call the app feature-complete until remaining items are implemented and tested.


## v8.3 update
- [x] Gate machine/extractor production on sufficient generation in its connected power component.
- [x] Pause recipe consumption and output production while power is insufficient; keep delivered inputs buffered.
- [x] Make every right-hand sidebar section independently collapsible for a less cluttered workspace.
- [ ] Verify all power edge cases in a real browser, including partial load shedding, generator fuel depletion, and reconnection after outage.

## Power model status in v8.4
- Added connected-component demand/supply accounting, overload trip latch, per-grid status, and manual restart validation.
- Still approximate: no exact fuse reset timing, priority circuits, batteries/accumulators, switches, power storage, clock-dependent in-game power curves, or full fuel/water fluid simulation. These remain future work for game-faithful power behavior.


## v8.5 update
- [x] Pause/resume an individual production machine or extractor without deleting its buffer or in-flight resources.
- [x] Pause/resume all production machines in one action while leaving logistics and generator simulation running.
- [x] Show manually paused machines clearly in the canvas and Inspector; exclude them from simulated power demand.
- [x] Configure per-machine input buffer capacity to exercise receiver backpressure.
- [x] Duplicate a building's configuration without silently duplicating its connections or inventory.
- [x] Add Dockerfile, NGINX static serving config, Compose deployment, health check and hardened container defaults.


## v8.7 completed
- Removed free-power fallback: machines/extractors require a generator in their connected electrical network.
- Added a configurable Creative Generator with continuous fuel-free output.

## Remaining power work
- More faithful fuel and water rate simulation, batteries, switches, priority power switches, and exact fuse/restart behavior.


## v8.7 delivered
- Biomass Burner power node (30 MW), selectable solid fuels and simplified fuel consumption.
- Collapsible left palette/sidebar.
- Related header and simulation controls grouped into dropdown menus.


## v8.8 implemented
- Improved readability and contrast of menus, options, and labels.
- Manual container inventory add/remove/empty actions.
- Configurable storage capacity and capacity checks.
- Container inventory JSON export/import.


## v9.1 delivered

- Resource-colored moving packet visuals with short resource labels and building-type color coding.
- Fluid buffer tanks with fluid-only ports, configurable capacity and output limit.
- Toggleable power switches that open/close attached power links.
- Batteries with configurable capacity, charge and power limit, using a simplified MWh/MW charge model.
- Inspector controls are rendered by selected element type.

## v8.9 delivered
- Single toolbar toggle for pausing/resuming all production machines and extractors.
- Per-container inventory hard cap of 5,000 items, applied to manual edits, capacity settings, arrivals, and inventory import; legacy loaded capacities are clamped.
- Docker Compose image tag updated to 8.9.


## v9.1 delivered
- Configurable per-machine production output targets with automatic pause and counter reset; applies to extractors and supported recipe machines.
- Power graph metrics: installed generation capacity, current generation, requested consumption, maximum consumption, stored energy and trip count, with a rolling simulation history.
- Wiki-grounded miner and power-storage behavior references; this is not a full exact replica of all Satisfactory building data.


## v9.1 delivered
- Configurable per-machine production output targets with automatic pause and counter reset; applies to extractors and supported recipe machines.
- Power graph metrics: installed generation capacity, current generation, requested consumption, maximum consumption, stored energy and trip count, with a rolling simulation history.
- Wiki-grounded miner and power-storage behavior references; this is not a full exact replica of all Satisfactory building data.


## v9.8 delivered
- Live layout import and factory switching keep the active run loop running while replacing the simulation state.
- F6 advances a tick without forcing a pause.
- Keyboard shortcuts toggle the left palette and right inspector.
- Remaining follow-up: full configurable shortcut editor and browser automation tests.


## v9.9 delivered
- Per-resource machine input capacity is enforced as backpressure: a full input buffer rejects additional arrivals until the stored amount falls below its configured limit. In-flight packets wait on their connection; same-tick pending arrivals count against capacity.

## v10.1 delivered
- SVG favicon and standalone SVG assets for the current resource and building catalogs.
- Resource-specific SVG visuals in the canvas for source, machine, fluid-buffer and fuel-related nodes; palette uses consistent SVG building icons rather than emoji for generator/power-pole entries.
- Fluid buffers show stored volume, capacity and fill level on the canvas and in the inspector.
- Tank variants: Fluid Buffer 400 m³, Industrial Fluid Buffer 2,400 m³, and custom capacity. Existing layouts keep the previous 2,400 m³ default unless a variant is explicitly selected.
- The visuals are original Satisfactory-inspired vector drawings, not official extracted game assets.

## v10.4 update — connection workflow and port limits
- [x] Drag output-to-input connection gesture with live preview and Escape cancellation.
- [x] Validate direction, resource kind and item/fluid compatibility at drop time.
- [x] Add Power Pole Mk.1/Mk.2/Mk.3 with direct wire caps 4/7/10 and inspector display.
- [x] Normalize imported power edges to respect pole limits.
- [ ] Follow-up: browser-level pointer tests and full per-connector capacity audit for every machine/building.
