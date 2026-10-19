# Testing and validation

Core logic tests run with Node.js from this project directory:

```bash
for f in tests/*.test.js; do node "$f"; done
```

The v10.4 source-level suite covers automatic output pausing, input backpressure, fluid visuals/waves, goal-layout power wiring, keyboard live-edit regressions, power network logic and the new power-pole connection caps. `connection_limits.test.js` checks Mk.1/Mk.2/Mk.3 limits (4/7/10), rejecting additional direct wires and normalizing imported power edges.

JavaScript syntax checking and ZIP integrity checking are also performed for this release. This environment does not provide a running interactive browser or Docker engine, so a real pointer interaction test and Docker image startup are not claimed as completed.
