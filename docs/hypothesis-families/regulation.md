# Regulation Branch (R)

**Status**: Active (calibration phase) — NOT connected to Scale during v2 MVP.  
**Goal**: Validate a regulation detector/framework against known controls before applying to exotic/higher-level systems.

## Sub-branches
- R0 — Passive dynamics / apparent regulation
- R1 — Causal feedback regulation (requires Q10 criteria)
- R2 — Recurrent regulatory architecture

## Calibration Workflow
Before testing any candidate system (e.g., technosphere, biosphere, Earth system), the regulation detector must successfully discriminate:

### Positive Controls (should be flagged as regulatory by the detector)
- Thermostat / engineered feedback (HVAC, cruise control)
- Bacterial chemotaxis (run-and-tumble)
- Mammalian glucose regulation (insulin/glucagon)
- Immune feedback (cytokine networks)
- Established ecological feedback (predator-prey, nutrient cycling)

### Negative Controls (should NOT be flagged as regulatory)
- Damped oscillator (mass-spring with friction)
- Passive thermal equilibration (two bodies in contact)
- Diffusion (Brownian motion, heat spread)
- Gravitational relaxation (orbital decay via tides, timescales >> observation)
- Autocorrelated stochastic processes (red noise, 1/f)

## Criteria (Q10 — Minimum Evidence for Regulation)
A candidate regulatory system must demonstrate all six:
1. **Independently defined system boundary** (what is inside vs outside)
2. **Measurable protected variable or viability region** (what the system keeps within bounds)
3. **Identifiable internal/external disturbances** (inputs that push the variable away)
4. **Identifiable candidate feedback pathway** (how system state influences subsequent action)
5. **Causal evidence** that disrupting or conditioning the pathway changes disturbance rejection (intervention test)
6. **Closed-loop model outperforms open-loop alternatives** in out-of-sample prediction

**Note**: A fixed scalar setpoint is **not required**. A viability range or context-dependent target can qualify (e.g., temperature range for enzyme activity).

## Output
- If calibration succeeds → detector is ready for higher-level candidates.
- If calibration fails → refine measurement or framework; do not proceed to exotic claims.

## Connection to Scale
Do **not** connect R to S during v2 MVP. Scale branch must stand on its own. Bridge B-SR only after both have ≥1 preregistered positive result.