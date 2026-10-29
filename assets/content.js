/* =========================================================================
   Content data for the interactive dapagliflozin / SGLT2 inhibitor overdose
   and acute-illness management protocol. Every clinical claim below is
   paraphrased from the cited source, not copied from it. Reference numbers
   match REFERENCES below and the printed list in index.html.

   No author manuscript exists behind this tool (unlike most of its sister
   tools) — every reference below was independently located and verified
   against a real primary source, not taken from a secondary summary. Several
   "kind" fields below carry an explicit caveat where the matching source is
   imperfect (a class-wide figure cited for a dapagliflozin-specific claim, a
   drug label that says a question "has not been studied" cited to support a
   pharmacokinetic inference, etc.) — these caveats are intentional and
   should stay attached rather than being cleaned up into a cleaner-looking
   but less honest citation. ========================================================================= */

const REFERENCES = [
  {
    id: 1,
    kind: "EMA drug label (Summary of Product Characteristics) — mechanism of action, volume loss",
    text: "European Medicines Agency. Forxiga (dapagliflozin) — Summary of Product Characteristics, sections 4.4, 4.5, 4.8 and 5.1.",
    url: "https://www.ema.europa.eu/en/documents/product-information/forxiga-epar-product-information_en.pdf"
  },
  {
    id: 2,
    kind: "Narrative literature review — describes SGLT2 inhibitors as also lowering insulin secretion as part of the mechanism, in some tension with a clean \"insulin-independent\" framing; does not itself state that monotherapy avoids hypoglycaemia",
    text: "Patel K, Nair A. A Literature Review of the Therapeutic Perspectives of Sodium-Glucose Cotransporter-2 (SGLT2) Inhibitor-Induced Euglycemic Diabetic Ketoacidosis. Cureus. 2022;14(9):e29652.",
    url: "https://doi.org/10.7759/cureus.29652"
  },
  {
    id: 3,
    kind: "FDA-approved prescribing information (FARXIGA) — protein binding, half-life, monotherapy hypoglycaemia data, and the overdosage section's actual wording",
    text: "AstraZeneca. FARXIGA (dapagliflozin) full prescribing information, sections 6.1, 10 and 12.3. Revised 10/2024.",
    url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72ad22ae-efe6-4cd6-a302-98aaee423d69"
  },
  {
    id: 4,
    kind: "Meta-analysis of randomized controlled trials — class-wide SGLT2 inhibitor figure (RR 3.37), not dapagliflozin-specific; see reference 6 for dapagliflozin's own, larger effect size",
    text: "Puckrin R, Saltiel MP, Reynier P, Filion KB, et al. SGLT-2 inhibitors and the risk of infections: a systematic review and meta-analysis of randomized controlled trials. Acta Diabetologica. 2018;55:503–514.",
    url: "https://doi.org/10.1007/s00592-018-1116-0"
  },
  {
    id: 5,
    kind: "Meta-analysis of randomized controlled trials — class-wide SGLT2 inhibitor figure (RR 3.30), not dapagliflozin-specific; corroborates reference 4",
    text: "Liu J, Li L, Li S, Jia P, Deng K, Chen W, Sun X. Effects of SGLT2 inhibitors on UTIs and genital infections in type 2 diabetes mellitus: a systematic review and meta-analysis. Scientific Reports. 2017;7(1):2824.",
    url: "https://doi.org/10.1038/s41598-017-02733-w"
  },
  {
    id: 6,
    kind: "Pooled analysis of dapagliflozin phase IIb/III trials — dapagliflozin-specific genital infection (≈5–9× vs placebo, larger than the class-wide \"~3×\" figure as authored) and volume-depletion-by-risk-group data",
    text: "Jabbour S, Seufert J, Scheen A, Bailey CJ, Karup C, Langkilde AM. Dapagliflozin in patients with type 2 diabetes mellitus: a pooled analysis of safety data from phase IIb/III clinical trials. Diabetes Obesity and Metabolism. 2018;20(3):620–628.",
    url: "https://doi.org/10.1111/dom.13124"
  },
  {
    id: 7,
    kind: "Multi-society consensus guideline (ADA/AACE/EASD/JBDS/Diabetes Technology Society) — ketone diagnostic threshold, DKA epidemiology in T2D and T1D, and the euglycaemic-DKA management bundle",
    text: "Umpierrez GE, Davis GM, ElSayed NA, Fadini GP, Galindo RJ, Hirsch IB, Klonoff DC, McCoy RG, Misra S, Gabbay RA, Bannuru RR, Dhatariya KK. Hyperglycaemic crises in adults with diabetes: a consensus report. Diabetologia. 2024;67:1455–1479.",
    url: "https://doi.org/10.1007/s00125-024-06183-8"
  },
  {
    id: 8,
    kind: "National society (ABCD) position statement, 2016 — ketone threshold and stop-the-drug instruction remain usable; its insulin-infusion regimen (variable-rate) is now outdated against reference 7's fixed-rate recommendation, so it is cited here only for the threshold and stop/restart points, not the insulin regimen",
    text: "Dashora U, Gallagher A, Dhatariya K, Winocour P, Gregory R, on behalf of the ABCD Committee. ABCD position statement on the risk of diabetic ketoacidosis associated with the use of sodium-glucose cotransporter-2 inhibitors. Br J Diabetes. 2016;16(4):206–209.",
    url: "https://doi.org/10.15277/bjd.2016.112"
  },
  {
    id: 9,
    kind: "Randomized controlled trial (DECLARE-TIMI 58) — dapagliflozin-specific DKA rate in T2D; the trial's own rounded percentages (0.3% vs 0.1%) are nominally closer to 3-fold than 2-fold",
    text: "Wiviott SD, Raz I, Bonaca MP, et al. Dapagliflozin and Cardiovascular Outcomes in Type 2 Diabetes. N Engl J Med. 2019;380(4):347–357.",
    url: "https://doi.org/10.1056/NEJMoa1812389"
  },
  {
    id: 10,
    kind: "Pooled randomized trial data (DEPICT-1/2) — dapagliflozin-specific DKA rate in type 1 diabetes under trial conditions with structured ketone monitoring, not unmonitored off-label use",
    text: "Phillip M, Mathieu C, Lind M, et al. Long-term efficacy and safety of dapagliflozin in patients with inadequately controlled type 1 diabetes: pooled 52-week outcomes from the DEPICT-1 and -2 studies. Diabetes Obes Metab. 2021;23(2):549–560.",
    url: "https://doi.org/10.1111/dom.14248"
  },
  {
    id: 11,
    kind: "Retrospective poison-center case series — 88 single-substance SGLT2 inhibitor exposures (predominantly canagliflozin, not dapagliflozin-specific); confirms no hypoglycaemia observed, including a massive intentional canagliflozin overdose, and gives real-world follow-up duration data",
    text: "Schaeffer SE, DesLauriers C, Spiller HA, Aleguas A, Baeza S, Ryan ML. Retrospective review of SGLT2 inhibitor exposures reported to 13 poison centers. Clinical Toxicology (Philadelphia). 2018;56(3):204–208.",
    url: "https://pubmed.ncbi.nlm.nih.gov/28812381/"
  },
  {
    id: 12,
    kind: "Peer-reviewed review — confirms sulfonylurea/insulin overdose toxicity; does not mention SGLT2 inhibitors, so it supports only the co-ingestant half of the comparison",
    text: "Klein-Schwartz W, Stassinos GL, Isbister GK. Treatment of sulfonylurea and insulin overdose. Br J Clin Pharmacol. 2016;81(3):496–504.",
    url: "https://doi.org/10.1111/bcp.12822"
  },
  {
    id: 13,
    kind: "Case report — genuine SGLT2 inhibitor (ipragliflozin, not dapagliflozin) overdose; severe course and prolonged ICU observation were confounded by large co-ingested doses of an ARB and a calcium-channel blocker, not attributable to the SGLT2 inhibitor alone",
    text: "Nakamura M, Nakade J, Toyama T, Okajima M, Taniguchi T. Severe intoxication caused by sodium-glucose cotransporter 2 inhibitor overdose: a case report. BMC Pharmacol Toxicol. 2020;21:5.",
    url: "https://doi.org/10.1186/s40360-019-0381-z"
  },
  {
    id: 14,
    kind: "Phase 1 single/multiple ascending-dose study in healthy volunteers — single doses 2.5–500 mg; the published abstract reports \"no apparent changes in glycaemic parameters,\" which this page paraphrases as \"no hypoglycaemia\"; full safety-table detail was not accessible (paywalled)",
    text: "Komoroski B, Vachharajani N, Boulton D, Kornhauser D, Geraldes M, Li L, Pfister M. Dapagliflozin, a novel SGLT2 inhibitor, induces dose-dependent glucosuria in healthy subjects. Clin Pharmacol Ther. 2009;85(5):520–526.",
    url: "https://doi.org/10.1038/clpt.2008.251"
  },
  {
    id: 15,
    kind: "Narrative review — the \"Vd ≈ 118 L\" figure as authored; this number is not stated in the FDA label or in the EMA assessment report sections checked, and this review in turn cites a further review for it, so it could not be traced back to an original clinical PK study table",
    text: "Papakitsou I, Vougiouklakis G, Elisaf MS, Filippatos TD. Differential pharmacology and clinical utility of dapagliflozin in type 2 diabetes. Clin Pharmacol Adv Appl. 2019;11:133–143.",
    url: "https://doi.org/10.2147/CPAA.S172353"
  },
  {
    id: 16,
    kind: "Peer-reviewed clinical review — general acute-poisoning workup practice (co-ingestant history, poison-center consultation, psychiatric evaluation indicated); not SGLT2-inhibitor-specific",
    text: "Vega IL, Griswold MK, Laskey D. Acute medication poisoning. Am Fam Physician. 2024;109(2):143–153.",
    url: "https://www.aafp.org/pubs/afp/issues/2024/0200/acute-medication-poisoning.html"
  },
  {
    id: 17,
    kind: "Institutional clinical guidance (NHS Scotland) — explicit on contacting the National Poisons Information Service for a mixed overdose; document metadata (authorship/review date) could not be confirmed from the accessible PDF, so this is supporting rather than primary support",
    text: "NHS Scotland. General Management of Overdose and Toxicity (clinical decision support resource, Right Decisions service).",
    url: "https://rightdecisions.scot.nhs.uk/media/1572/general-management-of-overdose-and-toxicity.pdf"
  },
  {
    id: 18,
    kind: "National clinical guideline (NICE NG225) — explicit, guideline-grade support for concurrent (not sequential) physical and mental-health care after self-poisoning; NICE's own term is \"psychosocial assessment,\" not \"psychiatric assessment,\" though the concurrency principle is the same",
    text: "National Institute for Health and Care Excellence. Self-harm: assessment, management and preventing recurrence. NICE guideline NG225. Published 6 September 2022, last updated 25 November 2025.",
    url: "https://www.nice.org.uk/guidance/ng225"
  },
  {
    id: 19,
    kind: "UK regulatory safety communication (MHRA Drug Safety Update) — supports \"do not restart until clinically stable\"; does not itself add an \"eating and drinking normally\" criterion specific to SGLT2 inhibitors",
    text: "Medicines and Healthcare products Regulatory Agency. SGLT2 inhibitors: monitor ketones in blood during treatment interruption for surgical procedures or acute serious medical illness. Drug Safety Update, 18 March 2020.",
    url: "https://www.gov.uk/drug-safety-update/sglt2-inhibitors-monitor-ketones-in-blood-during-treatment-interruption-for-surgical-procedures-or-acute-serious-medical-illness"
  },
  {
    id: 20,
    kind: "Peer-reviewed review — supports extended post-resolution monitoring for euglycaemic DKA at therapeutic dosing, not overdose specifically; adjacent context rather than a direct match for the observation-window figure as authored",
    text: "Chow E, Clement S, Garg R. Euglycemic diabetic ketoacidosis in the era of SGLT-2 inhibitors. BMJ Open Diabetes Res Care. 2023;11(5):e003666.",
    url: "https://doi.org/10.1136/bmjdrc-2023-003666"
  }
];

/* Each node mirrors one box, decision diamond, or background info panel
   from the source material (two images: the mechanism/safety infographic,
   and the overdose-management flowchart).
   type: "process" | "decision" | "branch" | "terminal"
   refs: array of REFERENCES ids used in meaning/rationale
   needsAuthor: true marks a claim the literature search could not fully
   source — flagged for the author team to confirm or cite, rather than
   invented. */
const NODES = [
  {
    id: "trigger",
    type: "terminal",
    label: "Patient taking dapagliflozin presents unwell, OR suspected overdose",
    meaning:
      "Two different presentations are deliberately funnelled into one pathway here: a patient on long-term dapagliflozin who has simply become unwell (an intercurrent illness, reduced oral intake, a surgical admission), and a patient who has taken — or is suspected of having taken — a supratherapeutic or intentional overdose. Both share the same first problem: a drug that can precipitate ketoacidosis without raising the blood glucose is easy to miss on a standard glucose-led assessment.",
    rationale:
      "Treating \"unwell on dapagliflozin\" and \"overdose of dapagliflozin\" as one starting point, rather than two separate algorithms, reflects that the dangerous complication in both scenarios is the same — euglycaemic ketoacidosis — and the same first-line workup (ketones regardless of glucose) answers the question either way.",
    refs: []
  },
  {
    id: "mechanism",
    type: "process",
    label: "Mechanism: how dapagliflozin produces its effects",
    sub:
      "Blocks SGLT2 in the proximal tubule → Glycosuria\nOsmotic diuresis and natriuresis → Volume loss\nFalling insulin to glucagon ratio → Ketogenesis\nInsulin-independent action → No hypoglycaemia",
    meaning:
      "Dapagliflozin blocks the SGLT2 transporter in the proximal renal tubule, the site that normally reabsorbs almost all filtered glucose. Blocking it spills glucose into the urine (glycosuria), which in turn drags water and sodium out with it by osmotic diuresis and natriuresis. Separately, the resulting glycosuria shifts the body toward a relatively fasted hormonal state — the insulin-to-glucagon ratio falls — which promotes lipolysis and ketogenesis even when the blood glucose itself is normal or only mildly elevated. Its glucose-lowering action does not depend on stimulating insulin secretion the way a sulfonylurea's does, which is the pharmacological basis for not expecting hypoglycaemia from the drug alone — though one narrative review notes the picture is not perfectly clean: by lowering plasma glucose, SGLT2 inhibition can modestly reduce endogenous insulin secretion as a secondary effect, which is a different thing from acting \"independent of insulin.\"",
    rationale:
      "This mechanism panel is placed early because it explains, in one place, why the rest of the algorithm asks the questions it does: why ketones are checked regardless of the glucose reading (ketogenesis is glucose-independent), why volume status matters (natriuresis and osmotic diuresis), and why hypoglycaemia is not expected from the drug itself — so that a later finding of hypoglycaemia is read as a signal to look elsewhere, not as confirmation of dapagliflozin toxicity.",
    refs: [1, 2, 3]
  },
  {
    id: "adverse_effects",
    type: "process",
    label: "Three effects genuinely attributable to the drug",
    sub:
      "• Genital mycotic infection — ~3× increase vs control. Common but usually mild. → Treat with antifungals. Do not stop the drug.\n• Ketoacidosis (often euglycaemic) — ~2× from a very low baseline in T2D; higher in T1D. → Measure ketones whatever the glucose reading shows.\n• Volume depletion — Modest in trials; matters in frail, diuretic-treated patients. → Sick-day rules. Review diuretic dose.",
    meaning:
      "Of the adverse effects reported with SGLT2 inhibitors, these three have randomised-trial evidence specifically linking them to the drug rather than to the background population taking it. Genital mycotic infection is the most common and least dangerous — glycosuria feeds local yeast overgrowth — and is managed with antifungal treatment rather than stopping an otherwise-working drug; the \"~3×\" figure as given matches class-wide SGLT2-inhibitor meta-analyses, though dapagliflozin's own pooled trial data show a larger effect, roughly 5- to 9-fold. Ketoacidosis is uncommon in absolute terms but increases from an already-low baseline — a multi-society consensus report gives a relative risk around 2 (meta-analyses of randomised trials and of observational studies both cluster near 2-fold, though dapagliflozin's own cardiovascular-outcomes trial shows a nominally larger, roughly 3-fold difference) — and is frequently euglycaemic, which is the reason this entire algorithm checks ketones independent of the glucose value. The risk is clearly higher still in type 1 diabetes, where SGLT2 inhibitors are used off-label. Volume depletion is the mildest signal in trial populations but becomes clinically relevant in patients who are frail or already on a diuretic, which is why \"sick-day\" guidance (temporarily withholding the drug during acute illness or reduced intake) and diuretic-dose review are the specific actions attached to it.",
    rationale:
      "Framing these as the effects \"genuinely attributable to the drug\" — rather than listing every adverse event reported in a trial database — keeps the clinical picture honest: it tells a reader which signals are drug-specific and actionable, rather than background noise from the population studied.",
    refs: [4, 5, 6, 7, 9, 10]
  },
  {
    id: "initial_assessment",
    type: "process",
    label: "Airway, breathing, circulation · IV access · capillary glucose",
    sub:
      "History: time and quantity ingested, and — decisively — any CO-INGESTANT\n(insulin, sulphonylurea, antihypertensive, cardiotoxic agent)",
    meaning:
      "The initial survey is standard first-hour poisoning assessment, with one deliberately emphasised item: identifying a co-ingestant. Because dapagliflozin alone does not cause hypoglycaemia or cardiovascular collapse, any hypoglycaemia, arrhythmia, or haemodynamic instability found later in this patient is far more likely to come from something taken alongside it — a sulfonylurea, exogenous insulin, an antihypertensive, or a cardiotoxic agent — than from the dapagliflozin itself.",
    rationale:
      "\"Decisively\" is the operative word in the source material: in an isolated SGLT2 inhibitor ingestion the drug's own toxicity is limited, so the single history question most likely to change management in the first hour is not the dapagliflozin dose, but what else was taken with it.",
    refs: [16]
  },
  {
    id: "workup",
    type: "process",
    tone: "key",
    label: "Blood β-hydroxybutyrate · venous gas with anion gap · Na⁺, K⁺, Mg²⁺ · renal function · urinalysis",
    sub: "Measure ketones REGARDLESS of the blood glucose value",
    meaning:
      "This panel exists to catch euglycaemic ketoacidosis, which a glucose-led assessment misses by design: capillary or point-of-care glucose can be entirely normal while blood ketones are already pathologically elevated. Beta-hydroxybutyrate is the dominant ketone body in DKA and is measured directly — a multi-society consensus report notes blood beta-hydroxybutyrate levels at or above 3.0 mmol/L correlate well with the acid–base changes of ketoacidosis, and that the hyperglycaemia/diabetes criterion applies irrespective of the presenting glucose value, which is exactly the euglycaemic-DKA scenario this box is built to catch. The venous gas with anion gap is included as a supportive finding — the same consensus report is explicit that a raised anion gap is not, on its own, a recommended first-line diagnostic criterion, since mixed acid–base disorders occur in roughly a third of DKA presentations. Electrolytes and renal function anticipate both the dehydration from osmotic diuresis and the potassium shifts that insulin treatment, if ketoacidosis is confirmed, will provoke.",
    rationale:
      "This is the single instruction the whole algorithm is built around, and it is stated as its own emphasised line for that reason: a clinician anchored on a normal glucose reading has no other prompt in this pathway to think of ketoacidosis at all, so the instruction to check ketones is written to override that anchor explicitly rather than leaving it implicit in a decision rule.",
    refs: [7, 8]
  },
  {
    id: "d1",
    type: "decision",
    label: "Ketones ≥ 3.0 mmol/L and/or raised anion gap acidosis?",
    meaning:
      "This is the branch point of the whole algorithm: whether the patient has biochemical ketoacidosis, regardless of what the glucose reading shows. The blood-ketone threshold matches current consensus guidance directly. The \"and/or\" framing is a lower bar than the literature's own first-line recommendation, which treats the raised anion gap as a supportive rather than independently sufficient criterion — this algorithm accepts either finding alone as a trigger for the ketoacidosis pathway, rather than requiring the guideline's preferred combination.",
    rationale:
      "Using an \"and/or\" gate, rather than requiring both findings together, is a deliberately low bar: missing euglycaemic DKA because a single criterion fell just short of a strict combined threshold is a worse failure mode than over-treating a borderline case along the ketoacidosis pathway.",
    refs: [7, 8]
  },
  {
    id: "ketoacidosis_yes",
    type: "branch",
    label: "KETOACIDOSIS — may be euglycaemic",
    sub:
      "• Stop dapagliflozin\n• IV fluid resuscitation\n• Fixed-rate insulin infusion\n• Give IV dextrose from the outset if normoglycaemic\n• Replace K⁺; monitor Mg²⁺\n• Identify and treat the precipitant",
    meaning:
      "This bundle matches current multi-society consensus guidance closely. Stopping the SGLT2 inhibitor on admission, fixed-rate IV insulin (started at 0.1 unit/kg/hour), and identifying/treating the precipitant are all explicit recommendations. The dextrose instruction is the one deliberate modification from ordinary hyperglycaemic-DKA management: for euglycaemic DKA specifically, current guidance has dextrose started at the same time as the initial fluids rather than withheld until glucose falls to a treatment threshold, because the insulin infusion is what actually switches off ketogenesis, and dextrose is run alongside it so insulin can continue at a ketone-clearing rate without causing hypoglycaemia. Potassium replacement once levels fall below 5.0 mmol/L, targeting 4–5 mmol/L, is likewise explicit in current guidance.",
    rationale:
      "The instruction to dextrose-cover from the outset, rather than after a glucose threshold is crossed, is the single clinical point that most distinguishes this pathway from ordinary DKA management, and is the direct consequence of the mechanism established earlier: ketogenesis here is driven by the falling insulin:glucagon ratio, not by hyperglycaemia, so treatment has to target the ketosis without being gated by a glucose number that may never rise.",
    refs: [7, 8],
    needsAuthor: true
  },
  {
    id: "ketoacidosis_no",
    type: "process",
    label: "NO KETOACIDOSIS",
    sub:
      "• IV crystalloid to clinical need and urine output\n• Correct K⁺ and Mg²⁺\n• Recheck renal function — usually prerenal\n• Antiemetics as required",
    meaning:
      "If ketoacidosis is excluded, the presentation is treated as volume depletion from the drug's expected osmotic diuresis and natriuresis, compounded by whatever acute illness brought the patient in. Dapagliflozin's own product labelling specifically recommends temporary interruption of treatment for patients who develop volume depletion, until the condition is corrected, which is the same logic behind titrating fluid to clinical need and urine output here rather than giving a fixed bolus. Renal function is rechecked because an acute rise in creatinine in this setting is usually a prerenal pattern from volume loss, which should improve with rehydration, rather than intrinsic renal injury.",
    rationale:
      "This pathway exists because excluding ketoacidosis does not mean excluding dapagliflozin-related illness altogether — the drug's own osmotic-diuretic mechanism is enough on its own to explain dehydration and a reversible creatinine rise, and this box gives that presentation a specific, proportionate treatment plan rather than defaulting to \"nothing to do here.\"",
    refs: [1, 6],
    needsAuthor: true
  },
  {
    id: "d2",
    type: "decision",
    label: "Hypoglycaemia present?",
    meaning:
      "Having addressed the ketoacidosis question, the algorithm checks glucose in the other direction. This is placed deliberately after, not before, the ketoacidosis branch, because a normal or low glucose earlier in the workup should not have been reassuring — it is only at this point, once ketoacidosis has been assessed on its own terms, that a genuinely low glucose becomes informative in its own right.",
    rationale:
      "Sequencing the hypoglycaemia question after the ketoacidosis question, rather than screening for both in parallel at triage, keeps the earlier instruction to \"measure ketones regardless of glucose\" unambiguous: glucose is not ignored, it is simply not allowed to gate the ketone workup.",
    refs: []
  },
  {
    id: "hypoglycaemia_yes",
    type: "branch",
    label: "Actively seek a CO-INGESTANT (sulphonylurea or insulin).",
    sub: "Hypoglycaemia is NOT expected from an isolated SGLT2 inhibitor overdose.",
    meaning:
      "Dapagliflozin's glucose-lowering action is not insulin-secretagogue the way a sulfonylurea's is, so it is not expected to drive the blood glucose low enough to cause hypoglycaemia, even in overdose. This is borne out in practice: a 13-poison-centre review of 88 single-substance SGLT2 inhibitor exposures — including intentional overdoses, one involving 6000 mg of an SGLT2 inhibitor — found no hypoglycaemia in any case, and a published human dose-escalation study found no apparent change in glycaemic parameters at doses up to 500 mg. A sulfonylurea or exogenous insulin, by contrast, is well established to cause hypoglycaemia as its defining overdose toxicity. Finding hypoglycaemia in this patient is therefore treated as a positive finding pointing elsewhere, not a feature of dapagliflozin toxicity — the history taken in the first box (\"any co-ingestant\") is revisited here with that specific question in mind.",
    rationale:
      "Stating explicitly that hypoglycaemia is \"NOT expected\" closes off the most likely diagnostic error at this step: attributing a low glucose to the presenting drug simply because the patient is known to be diabetic and to have taken \"too much\" of a diabetes medication, when the pharmacology and the real-world case evidence both say this particular medication could not have caused it alone.",
    refs: [3, 11, 12, 14]
  },
  {
    id: "elimination",
    type: "process",
    tone: "alarm",
    label: "DO NOT attempt haemodialysis or haemoperfusion for drug removal",
    sub: "(Vd ≈ 118 L, ~91% protein-bound). Activated charcoal is not routinely indicated.",
    meaning:
      "The two figures given are classic pharmacokinetic reasons to expect extracorporeal removal to be of little use. A large apparent volume of distribution means most of the drug has already left the bloodstream and distributed into tissue, so even efficient blood-side clearance would remove only a small fraction of the total body burden. High protein binding — approximately 91%, confirmed directly in dapagliflozin's own FDA prescribing information — means the fraction of drug free in plasma, the only fraction a dialysis membrane can actually clear, is small to begin with. It is worth being precise about what is and isn't directly established here: the FDA label itself does not say dialysis has been shown ineffective — it says plainly that \"the removal of dapagliflozin by hemodialysis has not been studied.\" The instruction on this page not to attempt it is therefore standard pharmacokinetic reasoning applied to those two parameters (the same reasoning used for many other highly protein-bound, large-volume-of-distribution drugs), not a tested or guideline-stated conclusion. No source discussing activated charcoal specifically for dapagliflozin overdose could be located either.",
    rationale:
      "This box is phrased as an explicit prohibition, in a protocol that otherwise phrases its boxes as instructions to act, because the realistic error here is not omission but a well-intentioned but likely futile intervention: a clinician faced with a large or intentional ingestion may reach for dialysis as an intuitive \"get the drug out\" response, and the pharmacokinetic parameters — even without a direct removal study to confirm it — give good reason to expect it will not meaningfully help.",
    refs: [3, 15],
    needsAuthor: true
  },
  {
    id: "observation",
    type: "process",
    label: "OBSERVATION — extend beyond 4–6 h.",
    sub:
      "Observe ≥ 12–24 h after significant intentional ingestion with repeat ketones and electrolytes; longer if renal function is impaired on arrival, because the pharmacodynamic effect outlasts the plasma half-life of approximately 13 hours.",
    meaning:
      "The plasma half-life of approximately 13 hours (12.9 hours by the FDA label) is directly confirmed. The specific \"12–24 hour\" observation window as given is this algorithm's own clinical judgement rather than a published fixed-duration guideline — no consensus toxicology source states that exact figure for SGLT2-inhibitor overdose specifically. Real-world data give a mixed picture: a poison-centre case series found actual follow-up ranged from 1 to 42 hours with a median of only 6 hours, while an isolated severe-overdose case report needed extended ICU observation well beyond 24 hours — though that case was confounded by large co-ingested doses of an antihypertensive and a calcium-channel blocker, not attributable to the SGLT2 inhibitor alone. Given the roughly 13-hour half-life and the persistence of glycosuria for as long as meaningful drug levels remain, extending observation beyond the standard short ED window is a reasonable extrapolation, particularly for a large or intentional ingestion or where renal function (the clearance route) is already impaired — but it should be read as clinical extrapolation, not a cited fixed rule.",
    rationale:
      "\"Extend beyond 4–6 h\" is written as a correction to a default reflex: a patient who looks well after a few hours of standard observation, with reassuring first-pass bloods, is exactly the patient at risk of being discharged before a delayed ketoacidosis has had time to declare itself.",
    refs: [3, 11, 13, 20],
    needsAuthor: true
  },
  {
    id: "disposition",
    type: "terminal",
    label: "Contact a regional poisons centre for large or mixed ingestions.",
    sub:
      "Arrange psychiatric assessment for every intentional overdose, in parallel with medical care. Do not restart the drug until the patient is metabolically stable and eating normally.",
    meaning:
      "Three separate disposition actions are gathered here. Contacting a poisons centre for large or mixed ingestions is well-established general toxicology practice — a regional resource particularly suited to cases where, as this algorithm has established, co-ingestant toxicity rather than the dapagliflozin itself is likely to dominate the clinical picture. Psychiatric assessment running in parallel with, rather than after, medical treatment matches current national self-harm guidance directly: it specifically instructs that psychosocial assessment should not be delayed until medical treatment is complete, and that physical and mental healthcare should be delivered concurrently so neither is deprioritised. The restart criterion closes the loop back to the mechanism established earlier: a UK regulatory safety communication and a national position statement both support not restarting the drug until the patient's condition has stabilised (and, after a confirmed DKA episode, not restarting at all unless a clear alternative precipitant is identified) — restarting into a still-reduced oral intake would recreate the exact precipitant, relative fasting driving the insulin:glucagon ratio down, that triggers SGLT2-inhibitor-associated ketoacidosis in the first place. The added criterion of \"eating normally,\" specifically, could not be traced to a primary SGLT2-inhibitor-specific guideline in the same way the \"stable\" criterion could — it appears in secondary patient-education material, and at least one source applies that exact phrasing to other diabetes drug classes rather than to SGLT2 inhibitors.",
    rationale:
      "Ending the algorithm on the restart criterion, rather than on the acute treatment, matters because the single most preventable recurrence in this condition is restarting the drug too early during an ongoing illness — the same \"sick-day\" logic introduced in the adverse-effects panel at the top of this page, now stated as a discharge-safety instruction rather than a general caution.",
    refs: [16, 17, 18, 19],
    needsAuthor: true
  }
];

/* Glossary — terms inside the readout panel's prose are auto-linked to
   these entries (see linkify() in app.js). Only the first occurrence of
   each term per panel is linked, to keep the prose readable. "match" is
   matched case-sensitively and on word boundaries. */
const GLOSSARY = [
  { match: "SGLT2", full: "sodium–glucose cotransporter 2", def: "A protein in the proximal renal tubule responsible for reabsorbing almost all filtered glucose back into the blood. Dapagliflozin and the other drugs in its class block this transporter, causing glucose (and, with it, sodium and water) to be excreted in the urine instead." },
  { match: "glycosuria", def: "Glucose appearing in the urine — the direct, intended effect of SGLT2 blockade, and the starting point for most of this drug's other effects, wanted and unwanted." },
  { match: "natriuresis", def: "Increased sodium excretion in the urine. Here it travels together with the glucose being excreted, which is why SGLT2 inhibition produces a mild diuretic-like effect on blood pressure and volume status." },
  { match: "ketogenesis", def: "The liver's production of ketone bodies (including beta-hydroxybutyrate) from fat, normally switched on during fasting. SGLT2 inhibition can switch this on even without true fasting or hyperglycaemia, by lowering the insulin-to-glucagon ratio — the mechanism behind euglycaemic ketoacidosis." },
  { match: "insulin to glucagon ratio", full: "insulin:glucagon ratio", def: "The hormonal balance that tells the liver whether to store or release fuel. A falling ratio — less insulin relative to glucagon — signals a fasting-like state and promotes ketogenesis, which is why this can happen with dapagliflozin even at a normal blood glucose." },
  { match: "euglycaemic", def: "A near-normal blood glucose. Ketoacidosis is usually suspected because of a very high glucose reading; \"euglycaemic\" ketoacidosis has a normal or only mildly raised glucose instead, which is what makes it easy to miss without deliberately checking ketones." },
  { match: "beta-hydroxybutyrate", full: "β-hydroxybutyrate", def: "The dominant ketone body produced in ketoacidosis, measurable directly from a blood sample (point-of-care or laboratory) rather than inferred from urine ketone strips, which detect a different, minor ketone and lag behind the true picture." },
  { match: "anion gap", def: "A calculated gap between measured positive and negative blood electrolytes. A raised gap is consistent with an unmeasured acid — such as ketones — being present, but current guidance treats it as a supportive finding rather than a stand-alone first-line diagnostic criterion, since mixed acid–base disorders are common in DKA." },
  { match: "fixed-rate insulin infusion", def: "A continuous intravenous insulin infusion run at a set rate (rather than adjusted only by a sliding scale), the standard way of switching off ketogenesis in DKA treatment; dextrose is co-administered to prevent it from also causing hypoglycaemia." },
  { match: "co-ingestant", def: "Another substance taken at the same time as the drug in question. Central to this algorithm because dapagliflozin's own toxicity is limited — most of the danger in a mixed or large ingestion comes from what else was taken." },
  { match: "sulphonylurea", def: "A class of oral diabetes drug (e.g. gliclazide, glimepiride) that works by stimulating the pancreas to secrete insulin. Unlike dapagliflozin, sulfonylureas can cause significant hypoglycaemia in overdose, which is why they are specifically sought if a patient on dapagliflozin is found to be hypoglycaemic." },
  { match: "volume of distribution", full: "apparent volume of distribution (Vd)", def: "A pharmacokinetic value describing how far a drug spreads from the bloodstream into body tissue. A large Vd means most of the drug has left the blood, so even efficient blood-side removal (dialysis) can only ever clear a small fraction of the total dose." },
  { match: "protein-bound", full: "plasma protein binding", def: "The proportion of a drug circulating attached to plasma proteins rather than free in solution. Only the free fraction can cross a dialysis membrane, so a highly protein-bound drug is poorly cleared by dialysis regardless of its concentration." },
  { match: "haemoperfusion", def: "An extracorporeal removal technique that passes blood through a cartridge of adsorbent material (rather than a dialysis membrane) to bind and remove a drug. Like haemodialysis, its effectiveness depends on the drug being freely available in plasma, which a highly protein-bound drug like dapagliflozin is not." },
  { match: "sick-day rules", def: "Guidance to temporarily stop an SGLT2 inhibitor during acute illness, reduced oral intake, dehydration, or before major surgery, and to restart it only once the patient's condition has stabilised — because relative fasting is a precipitant of SGLT2-inhibitor-associated ketoacidosis." },
  { match: "prerenal", def: "A pattern of acute kidney function decline caused by reduced blood flow to otherwise-healthy kidneys (e.g. from dehydration), rather than direct injury to the kidney tissue itself — typically reversible with fluid replacement." }
];

if (typeof module !== "undefined") {
  module.exports = { NODES, REFERENCES, GLOSSARY };
}
