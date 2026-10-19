# Release notes — v10.3

## Fluid visuals and wave animation repair
- Replaced the old rotating rounded pseudo-elements with repeated SVG wave paths. The surface now visibly undulates and the two wave layers travel in opposite directions without the old rotation/jump artifact.
- Fluid level changes remain smoothly animated; waves continue while simulation is paused, and are hidden for an empty tank.
- Added distinct liquid/gas palettes for Water, Crude Oil, Heavy Oil Residue, Alumina Solution, Sulfuric Acid, Nitric Acid, Fuel, Turbofuel, Liquid Biofuel and Nitrogen Gas. Tank color, wave highlight, label and canvas fill indicator follow the stored fluid.
- Fluid buffers now accept only one fluid type at a time. A different fluid must wait until the tank is empty; this also checks simultaneous arrivals.
- Retained reduced-motion support, previous features, SVG assets and Docker packaging.

## Validation
- All 8 JavaScript test files passed.
- JavaScript syntax, HTML structure and SVG XML are checked separately.
- No interactive browser session or Docker image build was run in this environment.
