# Release notes — v9.9

- Machine input buffers now use an explicit per-resource intake guard. Once a resource reaches the configured input-buffer capacity, further units of that resource are not accepted.
- Packets that reach a full machine input wait at the end of the connected belt/pipe and are accepted only after the stored amount drops below the limit. Pending arrivals in the same simulation tick count toward the limit, preventing overfilling through multiple incoming connections.
- Each input resource has its own capacity, matching the Inspector label “Input buffer capacity (per item)”.
- Added regression tests for the input limit boundary, simultaneous arrivals, separate resource limits and intake resuming after stock falls.
- Preserves the v9.8 automatic output pause/resume, manual/global pause separation, existing planner features and Docker packaging.
