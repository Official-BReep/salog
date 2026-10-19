# Release notes — v9.8

- Automatic output limits now measure the selected item in the machine's local output queue, not a cumulative produced counter.
- When the queue reaches the limit, production pauses automatically. Existing queued items and in-flight belt/pipe packets continue moving.
- Production resumes automatically once the local queue drops below the limit.
- Manual per-machine pause is now separate from automatic output-limit pause and will never be cleared by automatic resume or by resetting the output counter.
- Global “Pause all machines” is a separate state; no machine automatically resumes while it is enabled. Clearing global pause restores automatic control while preserving individually manually paused machines.
- Power demand excludes manually paused, globally paused, and output-limit-paused machines.
- Existing Docker packaging and app features are retained.
