# Dapagliflozin / SGLT2 Inhibitor — Overdose & Acute Illness Management

An interactive, referenced walkthrough of the algorithm for suspected
dapagliflozin overdose or acute illness in an SGLT2 inhibitor user —
ketone-led recognition of euglycaemic ketoacidosis regardless of the
glucose value, the hypoglycaemia/co-ingestant check, and why dialysis does
not help in overdose. Every box and decision point in the diagram can be
selected to reveal, in one place: what the step means, why the protocol
calls for it, and the sources behind it.

**Live site:** https://satbuhan.github.io/dapagliflozin-overdose-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Influenza antiviral selection — baloxavir marboxil vs oseltamivir](https://github.com/satbuhan/influenza-antiviral-protocol) ([live site](https://satbuhan.github.io/influenza-antiviral-protocol/))
- [Dexketoprofen vs ibuprofen — selecting an NSAID for acute pain](https://github.com/satbuhan/nsaid-pain-protocol) ([live site](https://satbuhan.github.io/nsaid-pain-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [The adult with obesity in emergency and critical care](https://github.com/satbuhan/obesity-critical-care-protocol) ([live site](https://satbuhan.github.io/obesity-critical-care-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))
- [LMWH selection & renal dosing in NSTE-ACS](https://github.com/satbuhan/lmwh-nste-acs-protocol) ([live site](https://satbuhan.github.io/lmwh-nste-acs-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*,
and a reader outside the authors' own team cannot easily check the
evidence behind a specific threshold (the 3.0 mmol/L ketone cutoff, the
"~2×" DKA risk figure, the pharmacokinetic reasoning behind "do not
dialyse"). This page keeps the original algorithm exactly as authored, and
attaches the clinical reasoning and literature to each box without
cluttering the diagram itself.

The algorithm reproduced here is transcribed, box for box, from two
source images provided by the author team: a mechanism/safety infographic
and a decision-flowchart for suspected dapagliflozin overdose or acute
illness. Unlike this atlas's other tools, no underlying manuscript or
reference list exists behind this figure, so every citation was located
and independently verified from scratch — a real primary source opened
and checked, not taken from a secondary summary.

## Status

This is a working version, built to be tested on both desktop and mobile.
Five of the thirteen boxes (the mechanism panel, the workup panel, the
diagnostic decision diamond, the hypoglycaemia/co-ingestant box, and the
"no ketoacidosis" box) have every substantive claim backed by an
independently verified citation, with any imperfect match between source
and claim noted explicitly in that reference's `kind` field rather than
smoothed over. The remaining boxes are marked `needsAuthor: true` in
`assets/content.js` because at least one specific detail could not be
fully verified despite a real search attempt — specifically:

- **Ketoacidosis management box** — the whole bundle is well supported by
  current consensus guidance (stop the drug, fixed-rate insulin, dextrose
  from the outset, potassium replacement, treat the precipitant) *except*
  the instruction to monitor magnesium, which could not be traced to any
  guideline-level source despite checking the main DKA consensus report,
  two editions of JBDS guidance, and the SGLT2i-specific ABCD position
  statement. It is flagged, not invented.
- **"Do not dialyse" box** — the pharmacokinetic parameters behind it are
  independently confirmed (91% protein binding directly from the FDA
  label; the ≈118 L volume-of-distribution figure is real but traces only
  to a secondary review article, not a primary PK study or either drug
  label). More importantly, the FDA label does **not** say dialysis has
  been shown ineffective — it says plainly that removal by haemodialysis
  "has not been studied." The box's instruction is sound standard
  toxicology reasoning from those two parameters, but it is reasoning, not
  a tested or guideline-stated conclusion, and the page says so rather
  than implying otherwise.
- **Observation-window box** — the ≈13-hour half-life is directly
  confirmed, but the specific "12–24 hour" recommended observation period
  is this algorithm's own clinical judgement, not a published
  toxicology-guideline figure; the page cites the real-world data that
  exists (poison-centre follow-up times, a confounded severe-case report)
  as context rather than as direct support for that exact number.
- **Disposition box** — "do not restart until clinically stable" is
  well supported by a UK regulatory safety communication and a national
  position statement; the added "and eating normally" criterion, specific
  to SGLT2 inhibitors, could not be traced to the same kind of primary
  source and is noted as such.

See the `kind` field on each reference in `assets/content.js` for exactly
what every source does and doesn't support, including several references
that back a *class-wide* SGLT2-inhibitor finding (a meta-analysis, say)
rather than a dapagliflozin-specific one — most notably the genital
mycotic infection figure, where the "~3×" figure as authored matches the
class-wide literature while dapagliflozin's own trial data show a larger
effect.

## Disclaimer

This is an academic / educational reference tool, not a substitute for
institutional protocol or bedside clinical judgement. Verify any
threshold or management step against current local protocol before
clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site
that GitHub Pages can serve directly.

```
index.html          page structure
assets/style.css     design — same paper/ink/navy "journal" aesthetic as
                      the other tools, the standard branching-flowchart
                      3-column grid (unlike the obesity tool's 2-column
                      card grid)
assets/content.js     ← single source of truth for every node's text and
                      reference list. Edit this file to change what the
                      page says.
assets/app.js         rendering + interaction (builds the diagram and the
                      connector lines from content.js, handles the
                      click-to-expand panel on desktop and the bottom
                      sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box or decision
diamond from the algorithm (`meaning`, `rationale`, and `refs` pointing at
numbered entries in `REFERENCES`). Add or edit a reference in
`REFERENCES` and point to it by `id` from any node. Never change a node's
`label` or `sub` text without the author team's sign-off — those fields
are the algorithm itself, transcribed from the source images. Two nodes
(`mechanism`, `adverse_effects`) are background-information panels, not
part of the main decision sequence — they are linked in from `trigger`
with dashed "info" edges, the same mechanism `aortic-dissection-protocol`
uses for its single info box, generalised here to a pair rendered
side by side (`flow-wrap-2` / `group: "infopair"` in `assets/app.js`).

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification
process (fidelity rule, content schema, citation verification, QA steps),
written so that any collaborator or AI assistant can pick up this project
in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
share and adapt with attribution, non-commercially, under the same license.
