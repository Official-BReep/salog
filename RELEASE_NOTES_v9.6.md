# v9.6 release notes

## Edit while the simulation is running
- The per-tick loop no longer recreates the selected-object Inspector. Inputs, dropdowns and buttons remain focused and usable while the simulation continues.
- Simulation speed changes apply immediately without pausing/resetting the run.
- Menus and sidebars continue to use the single-open-section rule.

## Global keyboard shortcuts
- `F5`: Run/pause
- `F6`: One simulation step
- `Ctrl+S`: Export layout
- `Ctrl+O`: Import layout
- `Ctrl+Shift+O`: Import blueprint
- `Ctrl++` / `Ctrl+-`: Zoom
- `Ctrl+0`: Fit all
- `Ctrl+Shift+R`: Reset simulation
- `[` / `]`: Lower/raise simulation speed
- `M`: Pause/resume all machines
- `P`: Toggle power wiring
- `Delete`: Delete selected building
- `Escape`: Cancel active wiring/drag and close menus
- `F1` or `?`: Toggle shortcut menu

Shortcuts work while simulation is running. Single-letter commands are suppressed while typing into ordinary input/select/textarea fields; F-keys and Ctrl combinations remain available.
