# Release Notes – v10.2

## Live fluid tank display
- Fluid tank level now animates with two offset surface waves, giving the liquid a continuously moving surface.
- Tank fill height transitions smoothly as stored volume changes.
- The Inspector refreshes stored volume and percentage after each simulation tick without rebuilding its controls.
- Wave motion continues while the simulation is paused; tank volume only changes when the simulation changes it.
- Respects `prefers-reduced-motion` by disabling liquid animation and transitions.

## Compatibility
- Preserves the v10.1 SVG catalog, favicon, fluid capacities, production/power simulation, and Docker setup.

## Verification
- Source-level and existing automated tests run; no interactive browser or Docker image build is claimed unless separately performed.
