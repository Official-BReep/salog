# Satisfactory Logistics Planner v10.1

## SVG visuals
- Added an SVG favicon.
- Added individual SVG asset files for the current resource catalog and building catalog.
- Rendered resource-specific vector icons directly on source, production machine, fluid tank and fuel-generator nodes.
- Replaced emoji-only palette icons for power poles and generators with consistent vector building icons.
- The icons are original, Satisfactory-inspired vector artwork, not extracted official game textures or models.

## Fluid storage
- Fluid tanks show their current stored volume, nominal capacity and fill percentage on the canvas.
- The inspector now includes a vertical fluid-level gauge and exact stored/capacity figures.
- Added Satisfactory-style tank variants: Fluid Buffer (400 m³) and Industrial Fluid Buffer (2,400 m³), plus custom capacity.
- Kept the existing 2,400 m³ default for existing tank layouts to avoid silently changing prior saves.

## Validation
- SVG/fluid-capacity asset test added.
- Existing power, keyboard, auto-pause, input-limit and production-goal tests retained.
- JavaScript syntax, HTML structure and ZIP integrity checked before packaging.
- No full interactive browser session or Docker image build is claimed.
