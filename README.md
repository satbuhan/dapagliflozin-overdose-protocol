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

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24112562.svg)](https://doi.org/10.5281/zenodo.24112562)

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
- [Ketamine in head injury — safety & complication management](https://github.com/satbuhan/ketamine-head-injury-protocol) ([live site](https://satbuhan.github.io/ketamine-head-injury-protocol/))
- [Midazolam versus clonazepam — seizures, acute agitation & anxiety](https://github.com/satbuhan/midazolam-clonazepam-protocol) ([live site](https://satbuhan.github.io/midazolam-clonazepam-protocol/))
- [Vasopressor (aminergic) agent selection in shock states](https://github.com/satbuhan/vasopressor-shock-protocol) ([live site](https://satbuhan.github.io/vasopressor-shock-protocol/))
- [Whole-body CT in traumatic circulatory shock](https://github.com/satbuhan/wbct-trauma-protocol) ([live site](https://satbuhan.github.io/wbct-trauma-protocol/))
- [Epinephrine/Adrenaline revisited — contemporary decision-making algorithm](https://github.com/satbuhan/epinephrine-revisited-protocol) ([live site](https://satbuhan.github.io/epinephrine-revisited-protocol/))
- [Ketamine in emergency and critical care — indication-based decision algorithm](https://github.com/satbuhan/ketamine-indications-protocol) ([live site](https://satbuhan.github.io/ketamine-indications-protocol/))
- [Tenecteplase versus alteplase — fibrinolysis in STEMI](https://github.com/satbuhan/tenecteplase-alteplase-stemi-protocol) ([live site](https://satbuhan.github.io/tenecteplase-alteplase-stemi-protocol/))
- [Blood gas-guided assessment of the chemical warfare agent casualty](https://github.com/satbuhan/cwa-blood-gas-protocol) ([live site](https://satbuhan.github.io/cwa-blood-gas-protocol/))
- [Calcium channel blocker toxicity — phenotype-guided management](https://github.com/satbuhan/ccb-toxicity-protocol) ([live site](https://satbuhan.github.io/ccb-toxicity-protocol/))
- [Choosing an adjunct to haloperidol in hyperactive delirium with severe agitation](https://github.com/satbuhan/haloperidol-adjunct-protocol) ([live site](https://satbuhan.github.io/haloperidol-adjunct-protocol/))
- [Selection of a neuromuscular blocking agent for rapid sequence induction and intubation](https://github.com/satbuhan/succinylcholine-rocuronium-protocol) ([live site](https://satbuhan.github.io/succinylcholine-rocuronium-protocol/))
- [Pharmacological pain management in elderly patients](https://github.com/satbuhan/geriatric-pain-protocol) ([live site](https://satbuhan.github.io/geriatric-pain-protocol/))
- [Metoclopramide versus Ondansetron — Antiemetic Selection by Clinical Setting](https://github.com/satbuhan/metoclopramide-ondansetron-protocol) ([live site](https://satbuhan.github.io/metoclopramide-ondansetron-protocol/))
- [Needle Aspiration versus Tube Thoracostomy — Symptom-Led Management of Spontaneous Pneumothorax](https://github.com/satbuhan/spontaneous-pneumothorax-protocol) ([live site](https://satbuhan.github.io/spontaneous-pneumothorax-protocol/))
- [Suspected or Witnessed Button Battery Exposure in a Child](https://github.com/satbuhan/button-battery-protocol) ([live site](https://satbuhan.github.io/button-battery-protocol/))
- [Beta-Lactam Infusion Strategy in Sepsis and Septic Shock](https://github.com/satbuhan/beta-lactam-infusion-protocol) ([live site](https://satbuhan.github.io/beta-lactam-infusion-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*,
and a reader outside the authors' own team cannot easily check the
evidence behind a specific threshold (the 3.0 mmol/L ketone cutoff, the
"~2×" DKA risk figure, the pharmacokinetic reasoning behind "do not
dialyse"). This page keeps the original algorithm exactly as authored, and
attaches the clinical reasoning and literature to each box without
cluttering the diagram itself.

The algorithm reproduced here is Figure 1 ("Clinical decision algorithm
for suspected dapagliflozin overdose, or for the acutely unwell patient
taking an SGLT2 inhibitor") of an unpublished, blinded manuscript — a
narrative review titled "Dapagliflozin: Safety Analysis and Overdose
Management" (74-entry bibliography, every entry carrying its own DOI) —
from a Gemini condensation of the manuscript text, tables and references,
with Figure 1 supplied separately as an image.

## Status

This is a working version, built to be tested on both desktop and mobile.

- **Two builds, same figure:** this tool was first built on 2026-10-29
  from two source images alone (a mechanism/safety infographic and this
  decision algorithm), with **no manuscript behind them** — every one of
  that first build's ~20 references was independently located and
  verified from scratch, a real primary source opened and checked rather
  than taken from a secondary summary. On 2026-11-14 the manuscript this
  figure actually belongs to became available. All 13 box/diamond labels
  and sub-texts were cross-checked against the new condensation's
  box-by-box transcription of the figure, byte for byte — all 13 matched,
  so no label/sub text changed in this revision. Everything below the
  label/sub level was rebuilt from the manuscript's own stated reasoning.
- **Reference verification — explicit, author-granted exception (the
  ninth in this atlas):** asked directly whether to extend the same
  no-independent-re-verification policy used for
  `epinephrine-revisited-protocol`, `ketamine-indications-protocol`,
  `haloperidol-adjunct-protocol`, `geriatric-pain-protocol`,
  `metoclopramide-ondansetron-protocol`, `spontaneous-pneumothorax-protocol`,
  `button-battery-protocol` and `beta-lactam-infusion-protocol` to this
  manuscript's 74-entry bibliography, the author confirmed the same
  policy again. The reference list below is reproduced directly from the
  manuscript's own bibliography, every entry already carrying its own
  DOI, and was **not** independently re-verified against primary sources
  for this revision — every entry's `kind` field says so plainly.
- **No more `needsAuthor` flags:** the first build flagged five boxes
  because at least one specific detail (a magnesium-monitoring rationale,
  the FDA label's actual "has not been studied" wording on dialysis, the
  exact observation-window duration, an "eating normally" restart
  criterion) could not be traced to a primary source despite a real
  search attempt. The manuscript now explains these the same way its own
  authors do: Section 9 states plainly that its overdose-management
  recommendations are largely "reasoned extrapolations from pharmacology
  and limited clinical experience rather than evidence-based protocols."
  Those gaps are real and are kept — as clinical cautions sourced to the
  manuscript's own words, not as unresolved `needsAuthor` flags.
- **Figure-versus-manuscript-text discrepancies, carried through as
  clinical cautions rather than silently resolved:** the manuscript's own
  Section 4.2 identifies eight internal inconsistencies between Figure 1
  and its own prose/tables before this tool was built from it — most
  notably, the "ketones ≥ 3.0 mmol/L" diagnostic threshold in Diamond 1
  appears nowhere in the manuscript text (an externally adopted DKA
  threshold), an "and/or" ketoacidosis-decision rule in the figure sits
  against "and" wording in Table 3, the plasma half-life is given as
  "13 hours" in the figure versus "12.9 hours" in the text, the figure's
  "activated charcoal is not routinely indicated" omits a text-only
  conditional exception for substantial recent ingestion with a protected
  airway, and a separate paediatric-ingestion home-observation pathway
  described in the text is not depicted in the figure at all. Figure 1's
  own box text is transcribed exactly as authored in every case; each
  discrepancy is instead surfaced as a clinical caution on the relevant
  node, with both figures/claims given and neither silently preferred.
  The full registry — including two further discrepancies that fall
  outside Figure 1 itself — is kept in `METHODOLOGY.md`.

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
diamond from the algorithm (`meaning`, `rationale`, optional `cautions`
for figure-versus-manuscript-text discrepancies, and `refs` pointing at
numbered entries in `REFERENCES`). Add or edit a reference in
`REFERENCES` and point to it by `id` from any node. Never change a node's
`label` or `sub` text without the author team's sign-off — those fields
are the algorithm itself, transcribed byte-for-byte from Figure 1. Two nodes
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
