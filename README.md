# Satisfactory Logistics Planner v10.0

## v10.0: input limits and live editing
- Machine input buffers enforce a hard per-resource intake limit. Once full, new units wait at the end of the belt/pipe until stock falls below the limit. Same-tick arrivals are counted to prevent overfilling.
- Simulation no longer rebuilds the Inspector on every tick, so inputs, selects, open menus, and focused controls remain usable while production is running.
- Simulation speed can be changed immediately without pausing or resetting the run.
- Global shortcuts: F5 run/pause, F6 step, Ctrl+S export, Ctrl+O import, Ctrl+Shift+O blueprint import, Ctrl +/- zoom, Ctrl+0 fit, Ctrl+Shift+R reset, [ / ] speed, M pause/resume machines, P power wiring, Delete remove selected building, Escape cancel/close, F1 or ? show shortcuts.
- Added a visible Shortcuts menu. Keyboard shortcuts work during simulation; typing-focused fields are protected from single-letter commands.


## v9.4: both sidebars are selection-contextual
- Selecting a machine or structure hides the left palette/settings and all unrelated right-side global panels. The left side shows a compact object summary; the right Inspector contains the selected object’s editable settings.
- Selecting a conveyor, pipeline, or power connection shows connection-specific data on both sides. The right Inspector now displays endpoints, resource/transport, flow and capacity (or power endpoints/status), plus an explicit delete action.
- Clicking empty canvas clears selection and restores the factory overview, building palette, and global planning/diagnostic panels.
- The one-open-section/dropdown rule across the toolbar and both sidebars is retained.


## v9.5: core simulation and power observability
- **Interactive power network graph:** relevant machines, poles, switches, batteries and generators are shown by connected component. Wires are clickable to inspect the connection; nodes are clickable to select the building in the main planner. Colors distinguish generators, batteries, powered loads, unpowered loads and open switches.
- **Power time series:** rolling history of capacity, online generation, demand, maximum demand and stored battery energy.
- **Production throughput history:** records production deltas as items/min and plots the most active resources over the recent simulation window.
- **Battery energy balance corrected:** charge is stored in MWh and power in MW; each one-second tick transfers MW / 3600 MWh. Discharge is limited by charge, configured MW rate and current deficit; surplus generation can charge batteries.
- **Compatibility:** existing layouts, recipe imports, inventory tools, production limits, fluid buffers, switches, factories, diagnostics and Docker deployment are retained.
- **Scope note:** this is the core-first step of the larger plan. The built-in recipe catalogue and several vehicle, train, full game-accurate electrical, 3D collision and exhaustive regression features are still incomplete. The simulation remains an approximation, not an exact game engine.

A no-build browser app for schematic factory planning and discrete resource-flow simulation. v10.0 keeps the Inspector controls stable during active simulation and adds global keyboard shortcuts. It runs directly in a modern browser or as a small Docker/NGINX container.

## v9.3: globally exclusive dropdowns
- Only one collapsible section/menu can be open at a time across the top toolbar, left sidebar, and right sidebar.
- Opening a section closes every other section, regardless of which panel it belongs to.
- Clicking outside all menus/sections closes the open one.

## v9.2: adaptive selection panel and toolbar overflow fixes

- **Simulation dropdown fixed:** top toolbar dropdowns close each other automatically. Menus are placed inside the viewport and scroll internally on short windows, so controls do not spill beyond the screen.
- **Selection-focused left sidebar:** selecting a machine or structure shows only relevant summary data and hides unrelated palette/settings sections. Selecting a conveyor/pipeline or power connection shows endpoints, resource/type, estimated flow/capacity and a status summary. Use the explicit delete button to remove a selected connection.
- **Click empty canvas:** restores the factory-wide summary and makes the regular palette/settings and global data sections available again.

## v9.1: production limits and power network graph

- **Per-machine production limits:** enable an output limit on any supported production machine or extractor, choose one of that machine’s output resources and set a target quantity (default 100). The machine automatically pauses when its cumulative produced count reaches the target. Use **Reset produced counter** to clear the count and resume. The counter counts production at the machine, not items still in transit. Multi-output recipes can overshoot by one recipe batch.
- **Power graph:** capacity, current online generation, current requested consumption, maximum consumption, stored energy and tripped grids are shown together with a recent history graph. It is modeled on the official Satisfactory power graph but remains an approximation of game simulation.
- **Wiki references:** [Miner](https://satisfactory.wiki.gg/wiki/Miner), [Electricity / power graph](https://satisfactory.wiki.gg/wiki/Electricity), [Power Storage](https://satisfactory.wiki.gg/wiki/Power_Storage). These ground the reference rates and graph concepts; this build does not claim a complete game-verified database for every machine and recipe.

## v9.0: resource visuals, fluid tanks, switches and batteries

- **Resource visuals:** moving packets have resource-specific colors and compact labels; building types use different colors so simulation elements are easier to distinguish.
- **Fluid buffer tank:** connects to fluid/gas ports only, stores configurable volumes and has a configurable output throughput. The fluid mix is tracked by resource name.
- **Power switch:** connect with Power wiring mode; OFF opens the power links touching the switch, ON closes them.
- **Battery:** configurable MWh capacity, current charge and MW limit; it can supply a connected grid while charged and absorb surplus in the simplified planner power model. This is an approximation, not a frame-perfect reproduction of Satisfactory power storage.
- **Contextual Inspector:** each selected building shows its relevant settings and hides controls that do not apply to that type.

## v8.5: manual machine controls and Docker package

- **Pause/resume an individual production machine or extractor** from its Inspector. Pausing stops recipe input consumption and production; inputs already delivered remain in the input buffer and in-flight resources are preserved.
- **Pause all machines / Resume all machines** buttons in the simulation toolbar. This only pauses production machines and extractors; logistics, generators and the simulation clock continue.
- Manually paused machines are highlighted in amber and marked in the node label and Inspector.
- Manually paused machines have zero simulated power demand. A tripped power grid remains tripped until its normal restart action is used.
- **Configurable input buffer capacity** per machine (per item; default 50, range 1–5000) to model small or large buffers and test backpressure.
- **Duplicate building** from the Inspector. The copy keeps the building settings but starts with empty buffers/queues and no connections, so it can be wired intentionally.
- Existing features are retained: grid trip/restart, recipe-based production goals, diagnostics, belt/pipe capacity checks, import/export, blueprints, workspaces, floor metadata and flow animation.
- Added Dockerfile, NGINX configuration, Compose file, health check and a hardened read-only container setup.

## Quick start in a browser

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Add machines and logistics connections. Select a machine to access its controls.

## Run with Docker Compose

Requirements: Docker Engine or Docker Desktop with the Compose plugin.

```bash
docker compose up -d --build
```

Open **http://localhost:8080**. To use another port, change the host side of `8080:80` in `compose.yaml` (for example `8090:80`).

Useful commands:

```bash
docker compose logs -f
docker compose ps
docker compose down
```

The app is a static client-side web app: factory layouts are downloaded/exported by the browser. This container does not provide shared server-side storage or user accounts, so different browsers/devices do not automatically share a factory. Back up layouts with **Export layout** / **Export blueprint**.

## Power model notes

- Power wiring defines connected components. Connected generators contribute online MW; machines contribute demand based on machine type and clock speed.
- A manual machine pause sets that machine's simulated demand to zero and halts its production.
- An overloaded component trips and stays tripped until it is manually restarted after demand/generation has been corrected.
- Generator fuel/water consumption, recipes, fluids and machine MW are approximations rather than a frame-exact reproduction of the game.

## Important limitations

This is not a full Satisfactory game engine. The local recipe set is incomplete and not fully audited against a pinned game version; imported mod recipes are structurally validated but not guaranteed correct. Production planning is heuristic rather than a globally optimized solver. Fluids are discrete tokens, not a pressure/headlift simulation. Train/truck/drone nodes act as transfer hubs rather than full vehicle timetable simulations. Batteries, priority switches, complete load shedding, true 3D collision-aware layout, and complete game-verified recipe/mod data remain future work.


## v8.6 — Power rules and Creative Generator

- Production machines and extractors do not run when no generator exists in their power network. The previous legacy free-power behavior is removed.
- Add a **Creative Generator** from the power section. Select it and set its configured generation in MW (default: 10,000 MW).
- The Creative Generator supplies that power continuously and requires no fuel, water, or item inputs.
- Like other generators, it only supplies machines connected to it through the power-wiring network. An unconnected machine remains unpowered.
- Existing coal, fuel, and nuclear generators retain their fuel/input simulation.

The power model is still an approximation: it does not yet model all in-game fuse, battery, switch, and fuel-rate details.


## v8.7 — Biomass power and grouped controls

- Added a **Biomass Burner (30 MW)**. Select its fuel in the Inspector: Leaves, Wood, Biomass, or Solid Biofuel. Fuel is delivered through a solid-item conveyor; no water connection is required. The simplified consumption rates are Leaves 120/min, Wood 30/min, Biomass 15/min, and Solid Biofuel 7.5/min at full output.
- Biomass Burner status contributes to the same connected power-grid calculation as the other generators. It must have fuel in its buffer to remain online. The “Hand-load biomass fuel” action is available for testing.
- Added **☰ Palette / Hide palette** to collapse the complete left sidebar and expand the canvas; click again to restore it.
- Grouped the top-bar controls into **View**, **Layouts**, **Factories**, and **Data** menus. Simulation controls, machine pause/resume, and power wiring are grouped in the simulation toolbar.
- Docker deployment files are retained; use `docker compose up -d --build`, then open `http://localhost:8080`.

The biomass fuel rates and all other power mechanics remain approximate, not a frame-exact game simulation.


## v8.8 additions

- Improved contrast and readability for toolbar menus, select dropdowns, form labels, and sidebar controls. Toolbar menus scroll when they exceed the viewport.
- Storage containers can be manually stocked or depleted from the Inspector by item type and quantity.
- Per-container capacity is configurable (1–100,000 items) and enforced when adding items and accepting arrivals.
- Export/import container inventories as JSON from **Data**. Import matches existing containers by ID first, then name; only known item types are imported, and capacity is validated.

### Notes
Manual inventory import/export is separate from full layout export. The planner remains a client-side simulation; inventory and layout data are not synchronized between browsers unless exported and imported.


## v8.9 — One-button machine control and resource caps

- Replaced the two-item **Machines** menu with one always-visible toolbar button. It pauses all production machines/extractors when any are running, and changes to **Resume all** when all are manually paused. The button state refreshes with the simulation and layout changes.
- Retained per-machine pause/resume. Generator and logistics simulation continue while production machines are manually paused.
- Added a hard limit of **5,000 items per storage container** to keep manual inventory, imports, and queue arrays from consuming excessive browser memory. The Inspector clamps capacity and quantity fields; simulation arrivals and inventory import also enforce the cap. Old layouts with larger capacities are clamped when loaded.
- Kept existing per-machine input-buffer and in-transit queue bounds. The Compose image tag now matches v8.9.

The application remains a client-side planning/simulation tool; these limits are guardrails for browser performance, not the exact in-game container slot/stack model.


## v9.8 — live editing and keyboard access

The simulation can continue while importing a layout or switching factory workspaces. `F6` advances one simulation tick without forcing a pause. `Ctrl+Shift+L` toggles the left palette and `Ctrl+Shift+I` toggles the right inspector. Importing a new layout replaces the current simulation data (including transit packets and counters), but keeps the simulation loop running if it was already active.

### SVG visuals and fluid tank capacities (v10.1)
The `assets/` directory contains the SVG favicon plus individual resource and building SVG assets. The live canvas also renders inline vector icons so resource-specific visuals remain visible without external image requests. Fluid tanks show their fill level and stored amount. Select **Fluid Buffer (400 m³)** or **Industrial Fluid Buffer (2,400 m³)** in the tank inspector, or choose a custom capacity. Existing layouts retain their former 2,400 m³ default. The vector art is custom Satisfactory-inspired artwork rather than copied game textures.


### Fluid visuals and repaired SVG waves (v10.3)
Fluid buffers now display a continuously animated, two-layer wave surface. The fill height and Inspector volume/percentage update on each simulation tick, while the wave animation continues during pause. Reduced-motion preferences are respected.


### v10.3 fluid visuals
- True repeated SVG wave paths with two counter-moving layers; no rotating pseudo-element approximation.
- Per-fluid colors and labels for water, crude oil, heavy oil residue, alumina solution, sulfuric acid, nitric acid, fuel, turbofuel, liquid biofuel and nitrogen gas.
- Fluid tanks hold one fluid type at a time; other fluids wait until the tank is empty.
- Empty tanks hide the wave surface, and reduced-motion preferences are respected.

## v10.4 – Drag connections and power-pole limits

Create belts and pipes by dragging from an orange output port to a compatible blue input port. Power Poles can be placed as Mk.1 (4 direct wires), Mk.2 (7) or Mk.3 (10). Select a pole to inspect/change its tier and see its direct wire count. See `RELEASE_NOTES_v10.4.md` for known test limitations.
