# v10.0

- Goal-generated factory layouts are automatically arranged left-to-right by recipe dependency depth, with machines in aligned columns and more consistent spacing.
- Raw-input placeholders are placed near the consumers they feed; target-product storage is aligned to the right of target-producing machines.
- Every goal-generated production machine is connected to a new, fuel-free Creative Generator. Its configured capacity is set to at least 10,000 MW or 150% of the calculated machine demand, whichever is greater.
- The goal builder fits the generated layout to the canvas after creation. Existing canvas contents are preserved.
- This remains an approximate planner: raw-input placeholders and the recipe database still require review in diagnostics.
