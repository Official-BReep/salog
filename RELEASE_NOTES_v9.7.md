# Release notes — v9.7

## Live editing and hotkeys
- Layout imports and factory workspace switching no longer automatically stop the simulation; the existing timer continues against the newly loaded layout.
- F6 advances one simulation tick without forcing a pause.
- `Ctrl+Shift+L` toggles the left palette.
- `Ctrl+Shift+I` toggles the right inspector.
- Existing shortcuts remain available while the simulation runs; ordinary text-entry keys remain suppressed inside inputs.
- Shortcut help updated to reflect the live-step behavior and new sidebar shortcuts.

## Scope / limits
- Importing a different layout replaces the current simulation state, including its in-flight items and counters, but does not stop the run loop.
- Destructive reset/clear/demo actions still reset or stop simulation state intentionally.
- No claim of a full browser automation or Docker build test unless those are run in the target environment.
