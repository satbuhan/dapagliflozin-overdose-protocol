/* =========================================================================
   Content data for the interactive dapagliflozin / SGLT2 inhibitor overdose
   and acute-illness management protocol. Reference numbers match REFERENCES
   below and the printed list in index.html.

   BUILD HISTORY: this tool was first built 2026-10-29 from two source
   images only (a mechanism/safety infographic and the Figure 1 decision
   algorithm), with no underlying manuscript — every reference in that
   first build was independently located and verified against a real
   primary source, not taken from a secondary summary.

   On 2026-11-14 the manuscript that Figure 1 actually belongs to became
   available: an unpublished, blinded narrative review titled "Dapagliflozin:
   Safety Analysis and Overdose Management" (74-entry bibliography, every
   entry carrying its own DOI), condensed by an external AI (Gemini) from
   the manuscript text, tables and references, with Figure 1 supplied
   separately as an image. Every one of this tool's 13 box/diamond labels
   and sub-texts was cross-checked against that condensation's box-by-box
   transcription of the figure — all 13 matched byte-for-byte, so no
   label/sub text changed in this revision. What changed is everything
   below the label/sub level: meaning and rationale now reflect the
   authors' own stated reasoning instead of independently reconstructed
   reasoning, and the reference list below is reproduced directly from the
   manuscript's own bibliography (author-confirmed exception to independent
   re-verification, the ninth in this atlas — see METHODOLOGY.md) rather
   than individually re-sourced. The manuscript's own Section 4.2 had
   already identified eight figure-versus-manuscript-text discrepancies
   before this revision; those are carried through below as clinical
   cautions on the relevant node, with both figure and text wording given
   and neither silently preferred — see METHODOLOGY.md for the full
   registry, including two further discrepancies that fall outside
   Figure 1 itself and so are not attached to any node. ========================================================================= */

// Date this tool's content and citations were last built/checked
// together (see assets/app.js's References summary, and the hub
// README's "Content search index"-adjacent conventions doc).
const VERIFIED = "2026-11-14";

const REFERENCES = [
  { id: 1, kind: "As cited in the manuscript; not independently re-verified.", text: "DeFronzo RA, Norton L, Abdul-Ghani M. Renal, metabolic and cardiovascular considerations of SGLT2 inhibition. Nat Rev Nephrol. 2017;13(1):11-26.", url: "https://doi.org/10.1038/nrneph.2016.170" },
  { id: 2, kind: "As cited in the manuscript; not independently re-verified.", text: "Grempler R, Thomas L, Eckhardt M, Himmelsbach F, Sauer A, Sharp DE, et al. Empagliflozin, a novel selective sodium glucose cotransporter-2 (SGLT-2) inhibitor: characterisation and comparison with other SGLT-2 inhibitors. Diabetes Obes Metab. 2012;14(1):83-90.", url: "https://doi.org/10.1111/j.1463-1326.2011.01517.x" },
  { id: 3, kind: "As cited in the manuscript; not independently re-verified.", text: "Wiviott SD, Raz I, Bonaca MP, Mosenzon O, Kato ET, Cahn A, et al. Dapagliflozin and cardiovascular outcomes in type 2 diabetes. N Engl J Med. 2019;380(4):347-357.", url: "https://doi.org/10.1056/NEJMoa1812389" },
  { id: 4, kind: "As cited in the manuscript; not independently re-verified.", text: "McMurray JJV, Solomon SD, Inzucchi SE, Kober L, Kosiborod MN, Martinez FA, et al. Dapagliflozin in patients with heart failure and reduced ejection fraction. N Engl J Med. 2019;381(21):1995-2008.", url: "https://doi.org/10.1056/NEJMoa1911303" },
  { id: 5, kind: "As cited in the manuscript; not independently re-verified.", text: "Heerspink HJL, Stefansson BV, Correa-Rotter R, Chertow GM, Greene T, Hou FF, et al. Dapagliflozin in patients with chronic kidney disease. N Engl J Med. 2020;383(15):1436-1446.", url: "https://doi.org/10.1056/NEJMoa2024816" },
  { id: 6, kind: "As cited in the manuscript; not independently re-verified.", text: "Solomon SD, McMurray JJV, Claggett B, de Boer RA, DeMets D, Hernandez AF, et al. Dapagliflozin in heart failure with mildly reduced or preserved ejection fraction. N Engl J Med. 2022;387(12):1089-1098.", url: "https://doi.org/10.1056/NEJMoa2206286" },
  { id: 7, kind: "As cited in the manuscript; not independently re-verified.", text: "McDonagh TA, Metra M, Adamo M, Gardner RS, Baumbach A, Bohm M, et al. 2023 focused update of the 2021 ESC guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2023;44(37):3627-3639.", url: "https://doi.org/10.1093/eurheartj/ehad195" },
  { id: 8, kind: "As cited in the manuscript; not independently re-verified.", text: "Roddick AJ, Wonnacott A, Webb D, Watt A, Watson MA, Staplin N, et al. UK Kidney Association clinical practice guideline: sodium-glucose co-transporter-2 (SGLT-2) inhibition in adults with kidney disease 2023 update. BMC Nephrol. 2023;24(1):310.", url: "https://doi.org/10.1186/s12882-023-03339-3" },
  { id: 9, kind: "As cited in the manuscript; not independently re-verified.", text: "Scheen AJ. Sodium-glucose cotransporter type 2 inhibitors for the treatment of type 2 diabetes mellitus. Nat Rev Endocrinol. 2020;16(10):556-577.", url: "https://doi.org/10.1038/s41574-020-0392-2" },
  { id: 10, kind: "As cited in the manuscript; not independently re-verified.", text: "Faillie JL. Pharmacological aspects of the safety of gliflozins. Pharmacol Res. 2017;118:71-81.", url: "https://doi.org/10.1016/j.phrs.2016.07.001" },
  { id: 11, kind: "As cited in the manuscript; not independently re-verified.", text: "Schaeffer SE, DesLauriers C, Spiller HA, Aleguas A, Baeza S, Ryan ML. Retrospective review of SGLT2 inhibitor exposures reported to 13 poison centers. Clin Toxicol (Phila). 2018;56(3):204-208.", url: "https://doi.org/10.1080/15563650.2017.1357824" },
  { id: 12, kind: "As cited in the manuscript; not independently re-verified.", text: "Ferrannini E, Ramos SJ, Salsali A, Tang W, List JF. Dapagliflozin monotherapy in type 2 diabetic patients with inadequate glycemic control by diet and exercise. Diabetes Care. 2010;33(10):2217-2224.", url: "https://doi.org/10.2337/dc10-0612" },
  { id: 13, kind: "As cited in the manuscript; not independently re-verified.", text: "Bailey CJ, Gross JL, Pieters A, Bastien A, List JF. Effect of dapagliflozin in patients with type 2 diabetes who have inadequate glycaemic control with metformin: a randomised, double-blind, placebo-controlled trial. Lancet. 2010;375(9733):2223-2233.", url: "https://doi.org/10.1016/S0140-6736(10)60407-2" },
  { id: 14, kind: "As cited in the manuscript; not independently re-verified.", text: "Strojek K, Yoon KH, Hruba V, Elze M, Langkilde AM, Parikh S. Effect of dapagliflozin in patients with type 2 diabetes who have inadequate glycaemic control with glimepiride: a randomized, 24-week, double-blind, placebo-controlled trial. Diabetes Obes Metab. 2011;13(10):928-938.", url: "https://doi.org/10.1111/j.1463-1326.2011.01434.x" },
  { id: 15, kind: "As cited in the manuscript; not independently re-verified.", text: "Rosenstock J, Vico M, Wei L, Salsali A, List JF. Effects of dapagliflozin, an SGLT2 inhibitor, on HbA1c, body weight, and hypoglycemia risk in patients with type 2 diabetes inadequately controlled on pioglitazone monotherapy. Diabetes Care. 2012;35(7):1473-1478.", url: "https://doi.org/10.2337/dc11-1693" },
  { id: 16, kind: "As cited in the manuscript; not independently re-verified.", text: "Wilding JPH, Woo V, Soler NG, Pahor A, Sugg J, Rohwedder K, et al. Long-term efficacy of dapagliflozin in patients with type 2 diabetes mellitus receiving high doses of insulin: a randomized trial. Ann Intern Med. 2012;156(6):405-415.", url: "https://doi.org/10.7326/0003-4819-156-6-201203200-00003" },
  { id: 17, kind: "As cited in the manuscript; not independently re-verified.", text: "Geerlings S, Fonseca V, Castro-Diaz D, List J, Parikh S. Genital and urinary tract infections in diabetes: impact of pharmacologically-induced glucosuria. Diabetes Res Clin Pract. 2014;103(3):373-381.", url: "https://doi.org/10.1016/j.diabres.2013.12.052" },
  { id: 18, kind: "As cited in the manuscript; not independently re-verified.", text: "Ferrannini E, Muscelli E, Frascerra S, Baldi S, Mari A, Heise T, et al. Metabolic response to sodium-glucose cotransporter 2 inhibition in type 2 diabetic patients. J Clin Invest. 2014;124(2):499-508.", url: "https://doi.org/10.1172/JCI72227" },
  { id: 19, kind: "As cited in the manuscript; not independently re-verified.", text: "Kasichayanula S, Liu X, Lacreta F, Griffen SC, Boulton DW. Clinical pharmacokinetics and pharmacodynamics of dapagliflozin, a selective inhibitor of sodium-glucose co-transporter type 2. Clin Pharmacokinet. 2014;53(1):17-27.", url: "https://doi.org/10.1007/s40262-013-0104-3" },
  { id: 20, kind: "As cited in the manuscript; not independently re-verified.", text: "Kasichayanula S, Chang M, Hasegawa M, Liu X, Yamahira N, LaCreta FP, et al. Pharmacokinetics and pharmacodynamics of dapagliflozin, a novel selective inhibitor of sodium-glucose co-transporter type 2, in Japanese subjects without and with type 2 diabetes mellitus. Diabetes Obes Metab. 2011;13(4):357-365.", url: "https://doi.org/10.1111/j.1463-1326.2011.01359.x" },
  { id: 21, kind: "As cited in the manuscript; not independently re-verified.", text: "Solomon SD, de Boer RA, DeMets D, Hernandez AF, Inzucchi SE, Kosiborod MN, et al. Dapagliflozin in heart failure with preserved and mildly reduced ejection fraction: rationale and design of the DELIVER trial. Eur J Heart Fail. 2021;23(7):1217-1225.", url: "https://doi.org/10.1002/ejhf.2249" },
  { id: 22, kind: "As cited in the manuscript; not independently re-verified.", text: "Qiu M, Ding LL, Zhang M, Zhou HR. Safety of four SGLT2 inhibitors in three chronic diseases: a meta-analysis of large randomized trials of SGLT2 inhibitors. Diab Vasc Dis Res. 2021;18(2):14791641211011016.", url: "https://doi.org/10.1177/14791641211011016" },
  { id: 23, kind: "As cited in the manuscript; not independently re-verified.", text: "Li CX, Liu TT, Zhang Q, Xie Q, Geng XH, Man CX, et al. Safety of sodium-glucose transporter 2 (SGLT-2) inhibitors in patients with type 2 diabetes: a meta-analysis of cohort studies. Front Pharmacol. 2023;14:1275060.", url: "https://doi.org/10.3389/fphar.2023.1275060" },
  { id: 24, kind: "As cited in the manuscript; not independently re-verified.", text: "Butler J, Usman MS, Khan MS, Greene SJ, Friede T, Vaduganathan M, et al. Efficacy and safety of SGLT2 inhibitors in heart failure: systematic review and meta-analysis. ESC Heart Fail. 2020;7(6):3298-3309.", url: "https://doi.org/10.1002/ehf2.13169" },
  { id: 25, kind: "As cited in the manuscript; not independently re-verified.", text: "Zinman B, Wanner C, Lachin JM, Fitchett D, Bluhmki E, Hantel S, et al. Empagliflozin, cardiovascular outcomes, and mortality in type 2 diabetes. N Engl J Med. 2015;373(22):2117-2128.", url: "https://doi.org/10.1056/NEJMoa1504720" },
  { id: 26, kind: "As cited in the manuscript; not independently re-verified.", text: "Neal B, Perkovic V, Mahaffey KW, de Zeeuw D, Fulcher G, Erondu N, et al. Canagliflozin and cardiovascular and renal events in type 2 diabetes. N Engl J Med. 2017;377(7):644-657.", url: "https://doi.org/10.1056/NEJMoa1611925" },
  { id: 27, kind: "As cited in the manuscript; not independently re-verified.", text: "Peters AL, Buschur EO, Buse JB, Cohan P, Diner JC, Hirsch IB. Euglycemic diabetic ketoacidosis: a potential complication of treatment with sodium-glucose cotransporter 2 inhibition. Diabetes Care. 2015;38(9):1687-1693.", url: "https://doi.org/10.2337/dc15-0843" },
  { id: 28, kind: "As cited in the manuscript; not independently re-verified.", text: "Colacci M, Fralick J, Odutayo A, Fralick M. Sodium-glucose cotransporter-2 inhibitors and risk of diabetic ketoacidosis among adults with type 2 diabetes: a systematic review and meta-analysis. Can J Diabetes. 2022;46(1):10-15.e2.", url: "https://doi.org/10.1016/j.jcjd.2021.04.006" },
  { id: 29, kind: "As cited in the manuscript; not independently re-verified.", text: "Goldenberg RM, Berard LD, Cheng AYY, Gilbert JD, Verma S, Woo VC, et al. SGLT2 inhibitor-associated diabetic ketoacidosis: clinical review and recommendations for prevention and diagnosis. Clin Ther. 2016;38(12):2654-2664.e1.", url: "https://doi.org/10.1016/j.clinthera.2016.11.002" },
  { id: 30, kind: "As cited in the manuscript; not independently re-verified.", text: "Danne T, Garg S, Peters AL, Buse JB, Mathieu C, Pettus JH, et al. International consensus on risk management of diabetic ketoacidosis in patients with type 1 diabetes treated with sodium-glucose cotransporter (SGLT) inhibitors. Diabetes Care. 2019;42(6):1147-1154.", url: "https://doi.org/10.2337/dc18-2316" },
  { id: 31, kind: "As cited in the manuscript; not independently re-verified.", text: "Garg SK, Peters AL, Buse JB, Danne T. Strategy for mitigating DKA risk in patients with type 1 diabetes on adjunctive treatment with SGLT inhibitors: a STICH protocol. Diabetes Technol Ther. 2018;20(9):571-575.", url: "https://doi.org/10.1089/dia.2018.0246" },
  { id: 32, kind: "As cited in the manuscript; not independently re-verified.", text: "Liu J, Li L, Li S, Jia P, Deng K, Chen W, et al. Effects of SGLT2 inhibitors on UTIs and genital infections in type 2 diabetes mellitus: a systematic review and meta-analysis. Sci Rep. 2017;7(1):2824.", url: "https://doi.org/10.1038/s41598-017-02733-w" },
  { id: 33, kind: "As cited in the manuscript; not independently re-verified.", text: "Li D, Wang T, Shen S, Fang Z, Dong Y, Tang H. Urinary tract and genital infections in patients with type 2 diabetes treated with sodium-glucose co-transporter 2 inhibitors: a meta-analysis of randomized controlled trials. Diabetes Obes Metab. 2017;19(3):348-355.", url: "https://doi.org/10.1111/dom.12825" },
  { id: 34, kind: "As cited in the manuscript; not independently re-verified.", text: "Fralick M, MacFadden DR. A hypothesis for why sodium glucose co-transporter 2 inhibitors have been found to cause genital infection, but not urinary tract infection. Diabetes Obes Metab. 2020;22(5):755-758.", url: "https://doi.org/10.1111/dom.13959" },
  { id: 35, kind: "As cited in the manuscript; not independently re-verified.", text: "Yang H, Choi E, Park E, Na E, Chung SY, Kim B, et al. Risk of genital and urinary tract infections associated with SGLT-2 inhibitors as an add-on therapy to metformin in patients with type 2 diabetes mellitus: a retrospective cohort study in Korea. Pharmacol Res Perspect. 2022;10(1):e00910.", url: "https://doi.org/10.1002/prp2.910" },
  { id: 36, kind: "As cited in the manuscript; not independently re-verified.", text: "Dave CV, Schneeweiss S, Patorno E. Comparative risk of genital infections associated with SGLT2 inhibitors: a real-world retrospective cohort study. Diabetes Obes Metab. 2019;21(2):434-438.", url: "https://doi.org/10.1111/dom.13531" },
  { id: 37, kind: "As cited in the manuscript; not independently re-verified.", text: "Gadzhanova S, Pratt N, Roughead E. Use of SGLT2 inhibitors for diabetes and risk of infection: analysis using general practice records from the NPS MedicineWise MedicineInsight program. Diabetes Res Clin Pract. 2017;130:180-185.", url: "https://doi.org/10.1016/j.diabres.2017.06.018" },
  { id: 38, kind: "As cited in the manuscript; not independently re-verified.", text: "Alkabbani W, Zongo A, Minhas-Sandhu JK, Eurich DT, Shah BR, Alsabbagh MW, et al. Sodium-glucose cotransporter-2 inhibitors and urinary tract infections: a propensity score-matched population-based cohort study. Can J Diabetes. 2022;46(4):392-403.e13.", url: "https://doi.org/10.1016/j.jcjd.2021.12.005" },
  { id: 39, kind: "As cited in the manuscript; not independently re-verified.", text: "Imai T, Kato N, Kanda N, Hashimoto H, Yamana H, Hatakeyama S. Risk of urogenital bacterial infection with sodium-glucose cotransporter-2 inhibitors: a retrospective cohort study using a claims database. Diabetes Ther. 2024;15(8):1821-1830.", url: "https://doi.org/10.1007/s13300-024-01613-7" },
  { id: 40, kind: "As cited in the manuscript; not independently re-verified.", text: "Yokoyama H. Incidence of severe urinary tract infections not increased by initiating sodium-glucose cotransporter 2 inhibitors. J Diabetes Investig. 2020;11(3):530-531.", url: "https://doi.org/10.1111/jdi.13189" },
  { id: 41, kind: "As cited in the manuscript; not independently re-verified.", text: "Tada K, Gosho M. Increased risk of urinary tract infection and pyelonephritis under concomitant use of sodium-dependent glucose cotransporter 2 inhibitors with antidiabetic, antidyslipidemic, and antihypertensive drugs: an observational study. Fundam Clin Pharmacol. 2022;36(6):1106-1114.", url: "https://doi.org/10.1111/fcp.12792" },
  { id: 42, kind: "As cited in the manuscript; not independently re-verified.", text: "Shrikrishna A, Archana B. Prevalence of genitourinary infection in diabetic patients treated with SGLT2 inhibitors. Afr Health Sci. 2023;23(1):270-275.", url: "https://doi.org/10.4314/ahs.v23i1.29" },
  { id: 43, kind: "As cited in the manuscript; not independently re-verified.", text: "Ferwani P, Maldar A, Shah N, Chauhan P, Chadha M. Prevalence of bacterial urinary tract infection among patients with type 2 diabetes mellitus on sodium-glucose cotransporter-2 inhibitors: a prospective real-world setting study. J ASEAN Fed Endocr Soc. 2022;37(2):5-8.", url: "https://doi.org/10.15605/jafes.037.02.04" },
  { id: 44, kind: "As cited in the manuscript; not independently re-verified.", text: "Uitrakul S, Aksonnam K, Srivichai P, Wicheannarat S, Incomenoy S. The incidence and risk factors of urinary tract infection in patients with type 2 diabetes mellitus using SGLT2 inhibitors: a real-world observational study. Medicines (Basel). 2022;9(12):59.", url: "https://doi.org/10.3390/medicines9120059" },
  { id: 45, kind: "As cited in the manuscript; not independently re-verified.", text: "Lin YH, Lin CH, Huang YY, Tai AS, Fu SC, Chen ST, et al. Risk factors of first and recurrent genitourinary tract infection in patients with type 2 diabetes treated with SGLT2 inhibitors: a retrospective cohort study. Diabetes Res Clin Pract. 2022;186:109816.", url: "https://doi.org/10.1016/j.diabres.2022.109816" },
  { id: 46, kind: "As cited in the manuscript; not independently re-verified.", text: "McGovern AP, Hogg M, Shields BM, Sattar NA, Holman RR, Pearson ER, et al. Risk factors for genital infections in people initiating SGLT2 inhibitors and their impact on discontinuation. BMJ Open Diabetes Res Care. 2020;8(1):e001238.", url: "https://doi.org/10.1136/bmjdrc-2020-001238" },
  { id: 47, kind: "As cited in the manuscript; not independently re-verified.", text: "Unnikrishnan AG, Kalra S, Purandare V, Vasnawala H. Genital infections with sodium glucose cotransporter-2 inhibitors: occurrence and management in patients with type 2 diabetes mellitus. Indian J Endocrinol Metab. 2018;22(6):837-842.", url: "https://doi.org/10.4103/ijem.IJEM_159_17" },
  { id: 48, kind: "As cited in the manuscript; not independently re-verified.", text: "Bapir R, Bhatti KH, Eliwa A, Garcia-Perdomo HA, Gherabi N, Hennessey D, et al. Risk of urogenital infections in non-diabetic patients treated with sodium glucose transporter 2 (SGLT2) inhibitors: systematic review and meta-analysis. Arch Ital Urol Androl. 2023;95(2):11509.", url: "https://doi.org/10.4081/aiua.2023.11509" },
  { id: 49, kind: "As cited in the manuscript; not independently re-verified.", text: "Engelhardt K, Ferguson M, Rosselli JL. Prevention and management of genital mycotic infections in the setting of sodium-glucose cotransporter 2 inhibitors. Ann Pharmacother. 2021;55(4):543-548.", url: "https://doi.org/10.1177/1060028020951928" },
  { id: 50, kind: "As cited in the manuscript; not independently re-verified.", text: "Pishdad R, Auwaerter PG, Kalyani RR. Diabetes, SGLT-2 inhibitors, and urinary tract infection: a review. Curr Diab Rep. 2024;24(6):108-117.", url: "https://doi.org/10.1007/s11892-024-01537-3" },
  { id: 51, kind: "As cited in the manuscript; not independently re-verified.", text: "Kittipibul V, Cox ZL, Chesdachai S, Fiuzat M, Lindenfeld J, Mentz RJ. Genitourinary tract infections in patients taking SGLT2 inhibitors: JACC review topic of the week. J Am Coll Cardiol. 2024;83(16):1568-1578.", url: "https://doi.org/10.1016/j.jacc.2024.01.040" },
  { id: 52, kind: "As cited in the manuscript; not independently re-verified.", text: "Packer M, Butler J, Zeller C, Pocock SJ, Brueckmann M, Ferreira JP, et al. Blinded withdrawal of long-term randomized treatment with empagliflozin or placebo in patients with heart failure. Circulation. 2023;148(13):1011-1022.", url: "https://doi.org/10.1161/CIRCULATIONAHA.123.065748" },
  { id: 53, kind: "As cited in the manuscript; not independently re-verified.", text: "Kang M, Heo KN, Ah YM, Yang BR, Lee JY. Age- and sex-specific risk of urogenital infections in patients with type 2 diabetes treated with sodium-glucose co-transporter 2 inhibitors: a population-based self-controlled case-series study. Maturitas. 2021;150:30-36.", url: "https://doi.org/10.1016/j.maturitas.2021.06.003" },
  { id: 54, kind: "As cited in the manuscript; not independently re-verified.", text: "Confederat LG, Condurache MI, Alexa RE, Dragostin OM. Particularities of urinary tract infections in diabetic patients: a concise review. Medicina (Kaunas). 2023;59(10):1747.", url: "https://doi.org/10.3390/medicina59101747" },
  { id: 55, kind: "As cited in the manuscript; not independently re-verified.", text: "Nitzan O, Elias M, Chazan B, Saliba W. Urinary tract infections in patients with type 2 diabetes mellitus: review of prevalence, diagnosis, and management. Diabetes Metab Syndr Obes. 2015;8:129-136.", url: "https://doi.org/10.2147/DMSO.S51792" },
  { id: 56, kind: "As cited in the manuscript; not independently re-verified.", text: "Kaur R, Kaur R. Symptoms, risk factors, diagnosis and treatment of urinary tract infections. Postgrad Med J. 2021;97(1154):803-812.", url: "https://doi.org/10.1136/postgradmedj-2020-139090" },
  { id: 57, kind: "As cited in the manuscript; not independently re-verified.", text: "Alicic RZ, Rooney MT, Tuttle KR. Diabetic kidney disease: challenges, progress, and possibilities. Clin J Am Soc Nephrol. 2017;12(12):2032-2045.", url: "https://doi.org/10.2215/CJN.11491116" },
  { id: 58, kind: "As cited in the manuscript; not independently re-verified.", text: "Kuo IC, Lee JJ, Hwang DY, Lim LM, Lin HYH, Hwang SJ, et al. Pyuria, urinary tract infection and renal outcome in patients with chronic kidney disease stage 3-5. Sci Rep. 2020;10(1):19460.", url: "https://doi.org/10.1038/s41598-020-76520-5" },
  { id: 59, kind: "As cited in the manuscript; not independently re-verified.", text: "Bersoff-Matcha SJ, Chamberlain C, Cao C, Kortepeter C, Chong WH. Fournier gangrene associated with sodium-glucose cotransporter-2 inhibitors: a review of spontaneous postmarketing cases. Ann Intern Med. 2019;170(11):764-769.", url: "https://doi.org/10.7326/M19-0085" },
  { id: 60, kind: "As cited in the manuscript; not independently re-verified.", text: "Zhou Z, Yao X. Safety assessment of dapagliflozin: real-world adverse event analysis based on the FAERS database from 2012 to 2023. Heliyon. 2024;10(12):e33306.", url: "https://doi.org/10.1016/j.heliyon.2024.e33306" },
  { id: 61, kind: "As cited in the manuscript; not independently re-verified.", text: "Menne J, Dumann E, Haller H, Schmidt BMW. Acute kidney injury and adverse renal events in patients receiving SGLT2-inhibitors: a systematic review and meta-analysis. PLoS Med. 2019;16(12):e1002983.", url: "https://doi.org/10.1371/journal.pmed.1002983" },
  { id: 62, kind: "As cited in the manuscript; not independently re-verified.", text: "Vasilakou D, Karagiannis T, Athanasiadou E, Mainou M, Liakos A, Bekiari E, et al. Sodium-glucose cotransporter 2 inhibitors for type 2 diabetes: a systematic review and meta-analysis. Ann Intern Med. 2013;159(4):262-274.", url: "https://doi.org/10.7326/0003-4819-159-4-201308200-00007" },
  { id: 63, kind: "As cited in the manuscript; not independently re-verified.", text: "Scheen AJ. SGLT2 inhibitors: benefit/risk balance. Curr Diab Rep. 2016;16(10):92.", url: "https://doi.org/10.1007/s11892-016-0789-4" },
  { id: 64, kind: "As cited in the manuscript; not independently re-verified.", text: "Meier C, Schwartz AV, Egger A, Lecka-Czernik B. Effects of diabetes drugs on the skeleton. Bone. 2016;82:93-100.", url: "https://doi.org/10.1016/j.bone.2015.04.026" },
  { id: 65, kind: "As cited in the manuscript; not independently re-verified.", text: "Katsiki N, Dimitriadis G, Hahalis G, Papanas N, Tentolouris N, Triposkiadis F, et al. Sodium-glucose co-transporter-2 inhibitors (SGLT2i) use and risk of amputation: an expert panel overview of the evidence. Metabolism. 2019;96:92-100.", url: "https://doi.org/10.1016/j.metabol.2019.04.008" },
  { id: 66, kind: "As cited in the manuscript; not independently re-verified.", text: "Guo L, Wang J, Li L, Yuan L, Chen S, Wang H, et al. A multicentre, prospective, non-interventional study evaluating the safety of dapagliflozin in patients with type 2 diabetes in routine clinical practice in China (DONATE). BMC Med. 2023;21(1):198.", url: "https://doi.org/10.1186/s12916-023-02906-7" },
  { id: 67, kind: "As cited in the manuscript; not independently re-verified.", text: "Dandona P, Mathieu C, Phillip M, Hansen L, Griffen SC, Tschope D, et al. Efficacy and safety of dapagliflozin in patients with inadequately controlled type 1 diabetes (DEPICT-1): 24 week results from a multicentre, double-blind, phase 3, randomised controlled trial. Lancet Diabetes Endocrinol. 2017;5(11):864-876.", url: "https://doi.org/10.1016/S2213-8587(17)30308-X" },
  { id: 68, kind: "As cited in the manuscript; not independently re-verified.", text: "Mathieu C, Dandona P, Gillard P, Senior P, Hasslacher C, Araki E, et al. Efficacy and safety of dapagliflozin in patients with inadequately controlled type 1 diabetes (the DEPICT-2 study): 24-week results from a randomized controlled trial. Diabetes Care. 2018;41(9):1938-1946.", url: "https://doi.org/10.2337/dc18-0623" },
  { id: 69, kind: "As cited in the manuscript; not independently re-verified.", text: "Dandona P, Mathieu C, Phillip M, Hansen L, Tschope D, Thoren F, et al. Efficacy and safety of dapagliflozin in patients with inadequately controlled type 1 diabetes: the DEPICT-1 52-week study. Diabetes Care. 2018;41(12):2552-2559.", url: "https://doi.org/10.2337/dc18-1087" },
  { id: 70, kind: "As cited in the manuscript; not independently re-verified.", text: "Li Y, Li H, Dong L, Lin D, Xu L, Lou P, et al. A network meta-analysis of the dose-response effects of dapagliflozin on efficacy and safety in adults with type 1 diabetes. Front Endocrinol (Lausanne). 2022;13:923376.", url: "https://doi.org/10.3389/fendo.2022.923376" },
  { id: 71, kind: "As cited in the manuscript; not independently re-verified.", text: "Butt JH, Dewan P, Merkely B, Belohlavek J, Drozdz J, Kitakaze M, et al. Efficacy and safety of dapagliflozin according to frailty in heart failure with reduced ejection fraction: a post hoc analysis of the DAPA-HF trial. Ann Intern Med. 2022;175(6):820-830.", url: "https://doi.org/10.7326/M21-4776" },
  { id: 72, kind: "As cited in the manuscript; not independently re-verified.", text: "Peikert A, Martinez FA, Vaduganathan M, Claggett BL, Kulac IJ, Desai AS, et al. Efficacy and safety of dapagliflozin in heart failure with mildly reduced or preserved ejection fraction according to age: the DELIVER trial. Circ Heart Fail. 2022;15(10):e010080.", url: "https://doi.org/10.1161/CIRCHEARTFAILURE.122.010080" },
  { id: 73, kind: "As cited in the manuscript; not independently re-verified.", text: "Liew A, Lydia A, Matawaran BJ, Susantitaphong P, Tran HTB, Lim LL. Practical considerations for the use of SGLT-2 inhibitors in the Asia-Pacific countries: an expert consensus statement. Nephrology (Carlton). 2023;28(8):415-424.", url: "https://doi.org/10.1111/nep.14167" },
  { id: 74, kind: "As cited in the manuscript; not independently re-verified.", text: "Nakamura M, Nakade J, Toyama T, Okajima M, Taniguchi T. Severe intoxication caused by sodium-glucose cotransporter 2 inhibitor overdose: a case report. BMC Pharmacol Toxicol. 2020;21(1):5.", url: "https://doi.org/10.1186/s40360-019-0381-z" }
];

/* Each node mirrors one box, decision diamond, or background info panel
   from Figure 1 ("Clinical decision algorithm for suspected dapagliflozin
   overdose, or for the acutely unwell patient taking an SGLT2 inhibitor")
   or the manuscript's Graphical Abstract.
   type: "process" | "decision" | "branch" | "terminal"
   refs: array of REFERENCES ids used in meaning/rationale
   cautions: figure-versus-manuscript-text discrepancies or logical
   ambiguities the manuscript's own Section 4.2 identifies, carried here
   rather than silently resolved — both wordings/figures given, neither
   preferred over the other. */
const NODES = [
  {
    id: "trigger",
    type: "terminal",
    label: "Patient taking dapagliflozin presents unwell, OR suspected overdose",
    meaning:
      "This is the entry criterion for the whole algorithm, covering two presentations at once: a dapagliflozin user who has simply become unwell (unexplained metabolic acidosis, tachypnoea, nausea, vomiting, dizziness, abdominal pain, or dehydration), and a patient with a suspected supratherapeutic or intentional overdose. Expanded prescribing of dapagliflozin across type 2 diabetes, heart failure, and chronic kidney disease means acute-care clinicians now frequently encounter both kinds of presentation, and the manuscript funnels them into one pathway because drug-related ketoacidosis and volume/electrolyte effects present similarly in either context.",
    rationale:
      "Drug-associated emergencies — especially euglycaemic ketoacidosis — are readily missed if clinicians wait for hyperglycaemia before considering them, and acute overdose on its own requires targeted evaluation for co-ingestants, volume/electrolyte loss, and delayed ketogenesis. Treating both scenarios as one entry point reflects that the same first move (check ketones regardless of glucose) answers the question either way.",
    cautions: [
      "The manuscript describes a separate, more conservative pathway for unintentional paediatric ingestion of a small number of tablets — home observation with at least one structured follow-up contact, watching for altered mental status, polyuria, or tachypnoea — but this pathway is not depicted anywhere in Figure 1. Applied literally, Figure 1 would route a toddler who swallowed one tablet through IV access, venous blood gas, and a full laboratory draw; the manuscript's own text treats that as the wrong pathway for a small unintentional paediatric ingestion specifically."
    ],
    refs: [3, 4, 5, 6, 7, 8, 11, 27, 29]
  },
  {
    id: "mechanism",
    type: "process",
    label: "Mechanism: how dapagliflozin produces its effects",
    sub:
      "Blocks SGLT2 in the proximal tubule → Glycosuria\nOsmotic diuresis and natriuresis → Volume loss\nFalling insulin to glucagon ratio → Ketogenesis\nInsulin-independent action → No hypoglycaemia",
    meaning:
      "SGLT2 inhibitors block glucose reabsorption in the S1 segment of the renal proximal tubule — the site that, under normal conditions, reabsorbs roughly 90% of filtered glucose — lowering the renal glucose threshold and causing glycosuria that does not depend on insulin, plus a modest osmotic and natriuretic diuresis. Dapagliflozin is highly selective for SGLT2 over the intestinal SGLT1 transporter. Separately, the resulting glycosuria shifts the body toward a relatively fasted hormonal state: the insulin-to-glucagon ratio falls, which promotes lipolysis and hepatic ketogenesis even when blood glucose itself is normal or only mildly elevated.",
    rationale:
      "This mechanism panel is placed early in the manuscript because it explains, in one place, why the rest of the algorithm asks the questions it does: why ketones are checked regardless of the glucose reading (ketogenesis here is glucose-independent), why volume status matters (osmotic diuresis and natriuresis), and why hypoglycaemia is not expected from the drug itself.",
    cautions: [
      "The manuscript itself uses the label \"Figure 1\" for two different things: Section 1 (Introduction, Paragraph 4) describes this mechanism/adverse-effects summary — which matches the unnumbered Graphical Abstract immediately after the manuscript's own abstract — as \"Figure 1\", while Section 7.3 explicitly captions the overdose decision algorithm (the diagram this page is built around) as \"Figure 1\". This page follows Section 7.3's captioning and treats the decision algorithm as Figure 1."
    ],
    refs: [1, 17, 18]
  },
  {
    id: "adverse_effects",
    type: "process",
    label: "Three effects genuinely attributable to the drug",
    sub:
      "• Genital mycotic infection — ~3× increase vs control. Common but usually mild. → Treat with antifungals. Do not stop the drug.\n• Ketoacidosis (often euglycaemic) — ~2× from a very low baseline in T2D; higher in T1D. → Measure ketones whatever the glucose reading shows.\n• Volume depletion — Modest in trials; matters in frail, diuretic-treated patients. → Sick-day rules. Review diuretic dose.",
    meaning:
      "Across four pivotal placebo-controlled outcome trials enrolling more than 32,000 participants, dapagliflozin's safety profile was broadly comparable with placebo for serious adverse events, discontinuation, hypoglycaemia, fracture, and amputation — but three signals are consistently attributable to the drug itself. Genital mycotic infection is the most common and least dangerous: a meta-analysis of 77 randomised trials (approximately 51,000 participants) found a threefold increase in genital infections versus control, without an overall increase in urinary tract infection, and it is managed with standard antifungals without stopping the drug. Ketoacidosis is uncommon in absolute terms — well under 1% in DECLARE-TIMI 58 — but roughly doubles from an already very low baseline in type 2 diabetes, and is substantially higher in type 1 diabetes, where it is frequently euglycaemic; this is the reason the whole algorithm checks ketones independent of the glucose value. Volume depletion is modest in trial populations but becomes clinically relevant in patients who are frail, on diuretics, or acutely unwell, which is why sick-day rules (temporarily suspending the drug during acute illness or reduced intake) and diuretic-dose review are the specific actions attached to it.",
    rationale:
      "Framing these as the effects \"genuinely attributable to the drug\" — rather than listing every adverse event reported in a trial database — keeps the clinical picture honest: it tells a reader which signals are drug-specific and actionable, distinguishing them from the fracture, amputation, and malignancy signals the manuscript discusses elsewhere and explicitly does not confirm for dapagliflozin specifically.",
    refs: [3, 4, 22, 28, 32, 49, 51, 61, 67, 68]
  },
  {
    id: "initial_assessment",
    type: "process",
    label: "Airway, breathing, circulation · IV access · capillary glucose",
    sub:
      "History: time and quantity ingested, and — decisively — any CO-INGESTANT\n(insulin, sulphonylurea, antihypertensive, cardiotoxic agent)",
    meaning:
      "The initial survey is standard first-hour poisoning assessment, with one item the manuscript treats as decisive: identifying a co-ingestant. The manuscript states that distinguishing isolated SGLT2 inhibitor ingestion from mixed ingestion (involving insulin, a sulphonylurea, an antihypertensive, or a cardiotoxic agent) \"determines almost everything that follows\", because isolated SGLT2 inhibitor ingestion is generally benign and well tolerated, whereas co-ingestion drives hypoglycaemia, haemodynamic instability, severity, and disposition. Systemic exposure is dose-proportional from 0.1 mg to 500 mg, and single doses up to 500 mg were tolerated without dose-limiting toxicity in healthy volunteers, while urinary glucose excretion itself plateaus at roughly 20–50 mg daily.",
    rationale:
      "In an isolated SGLT2 inhibitor ingestion the drug's own toxicity is limited, so the single history question most likely to change management in the first hour is not the dapagliflozin dose itself, but what else was taken with it.",
    cautions: [
      "\"Airway, breathing, circulation\" and \"IV access\" appear in this box as standard resuscitation steps, but are not explicitly discussed in the manuscript's Section 7.3 prose or Table 3 Step 1 — airway protection is mentioned only later, as a prerequisite for considering activated charcoal. Conversely, the manuscript's Section 7.3 and Table 3 group \"capillary and laboratory glucose\" together under initial investigations rather than under history; laboratory glucose specifically does not appear in this box."
    ],
    refs: [11, 19, 63, 74]
  },
  {
    id: "workup",
    type: "process",
    tone: "key",
    label: "Blood β-hydroxybutyrate · venous gas with anion gap · Na⁺, K⁺, Mg²⁺ · renal function · urinalysis",
    sub: "Measure ketones REGARDLESS of the blood glucose value",
    meaning:
      "This panel exists to catch euglycaemic diabetic ketoacidosis, which a glucose-led assessment misses by design: continued urinary glucose excretion lowers plasma glucose while a reduced insulin-to-glucagon ratio drives lipolysis and hepatic ketogenesis, so ketoacidosis frequently presents at normal or only mildly elevated blood glucose. Blood beta-hydroxybutyrate is explicitly preferred over urine ketone testing, because urine dipsticks detect acetoacetate and may substantially underestimate the acute ketone burden. The blood gas with anion gap is a supportive finding: high anion-gap metabolic acidosis and ketonaemia — not hyperglycaemia — establish the diagnosis. Electrolytes (sodium, potassium, magnesium) anticipate the losses caused by osmotic diuresis and natriuresis, particularly hypokalaemia and hypomagnesaemia, and renal function/urinalysis capture both transient prerenal dysfunction from volume contraction and the fact that baseline renal impairment on arrival can attenuate the filtered glucose load and delay or mask osmotic diuresis until renal function recovers.",
    rationale:
      "This is the single instruction the whole algorithm is built around, stated as its own emphasised callout for that reason: a clinician anchored on a normal glucose reading has no other prompt in this pathway to think of ketoacidosis at all, so the instruction to check ketones is written to override that anchor explicitly.",
    cautions: [
      "This box specifies \"venous gas with anion gap\", whereas the manuscript's Section 7.3 prose states \"venous or arterial blood gas with anion gap\" and Table 3 states simply \"blood gas with anion gap\". Section 7.3 and Table 3 also specify \"laboratory glucose\" alongside capillary glucose, which does not appear in this box."
    ],
    refs: [11, 18, 27, 29, 74]
  },
  {
    id: "d1",
    type: "decision",
    label: "Ketones ≥ 3.0 mmol/L and/or raised anion gap acidosis?",
    meaning:
      "This is the branch point of the whole algorithm: whether the patient has biochemical ketoacidosis, regardless of what the glucose reading shows. Ketoacidosis is the complication most likely to cause serious harm in both routine SGLT2 inhibitor use and acute overdose, may occur at normal blood glucose, and requires immediate insulin-plus-dextrose therapy rather than fluid resuscitation alone.",
    rationale:
      "Using an \"and/or\" gate, rather than requiring both findings together, is a deliberately low bar: missing euglycaemic ketoacidosis because a single criterion fell just short of a strict combined threshold is treated as a worse failure mode than over-treating a borderline case along the ketoacidosis pathway.",
    cautions: [
      "The numeric threshold \"ketones ≥ 3.0 mmol/L\" appears only in this figure and is never stated anywhere in the manuscript's own prose or tables — the manuscript's Section 4.2 flags it explicitly as an externally adopted diagnostic threshold, consistent with outside diabetic ketoacidosis consensus guidelines rather than data synthesised in this review.",
      "This box's \"and/or\" wording would route a non-ketotic high-anion-gap acidosis (for example from lactic acidosis, or a salicylate/toxic-alcohol co-ingestion) into the fixed-rate-insulin-infusion ketoacidosis box on the anion gap alone, unless clinically differentiated. By contrast, Table 3 Step 7 and the manuscript's own definition of the syndrome (Section 5.1) both describe ketoacidosis as ketonaemic AND acidotic together, and Section 6.3 separately warns against attributing an unexplained acidosis to lactate without checking ketones. The manuscript's Section 4.2 identifies this \"and/or\" (figure) versus \"and\" (text) difference as a genuine, unresolved ambiguity rather than a simple restatement."
    ],
    refs: [18, 27, 29, 30, 31, 73]
  },
  {
    id: "ketoacidosis_yes",
    type: "branch",
    label: "KETOACIDOSIS — may be euglycaemic",
    sub:
      "• Stop dapagliflozin\n• IV fluid resuscitation\n• Fixed-rate insulin infusion\n• Give IV dextrose from the outset if normoglycaemic\n• Replace K⁺; monitor Mg²⁺\n• Identify and treat the precipitant",
    meaning:
      "This bundle is immediate discontinuation of dapagliflozin plus full diabetic-ketoacidosis treatment, modified for euglycaemia by starting IV dextrose concurrently with IV insulin from the outset, alongside IV fluids, potassium replacement, magnesium monitoring, and treatment of the underlying precipitant (acute infection, fasting/dehydration, surgical stress, alcohol excess, or insulin omission/pump failure). Insulin at ketogenesis-suppressing doses is mandatory to halt lipolysis and ketone production; withholding it because glucose is normal allows ketoacidosis to progress, while giving dextrose from the outset permits adequate insulin dosing without provoking hypoglycaemia. Stopping dapagliflozin removes the ongoing renal glucose loss and ketogenic drive.",
    rationale:
      "The instruction to dextrose-cover from the outset, rather than after a glucose threshold is crossed, is the single clinical point that most distinguishes this pathway from ordinary diabetic ketoacidosis management, and follows directly from the mechanism established earlier: ketogenesis here is driven by the falling insulin:glucagon ratio, not by hyperglycaemia, so treatment has to target the ketosis without being gated by a glucose number that may never rise.",
    cautions: [
      "No numeric insulin infusion rate, no blood glucose threshold defining \"normoglycaemic\"/\"euglycaemic\", no dextrose concentration or fluid infusion rate, and no potassium or magnesium replacement dose are given anywhere in this figure or in the manuscript text. Both the manuscript prose (\"treatment follows the established principles of ketoacidosis management with two modifications\") and this box's phrase \"fixed-rate insulin infusion\" defer directly to external diabetic ketoacidosis guidelines rather than specifying review-derived dosing — use local or published fixed-rate-insulin DKA protocols for the actual numbers."
    ],
    refs: [18, 27, 29, 30, 31]
  },
  {
    id: "ketoacidosis_no",
    type: "process",
    label: "NO KETOACIDOSIS",
    sub:
      "• IV crystalloid to clinical need and urine output\n• Correct K⁺ and Mg²⁺\n• Recheck renal function — usually prerenal\n• Antiemetics as required",
    meaning:
      "In patients without ketoacidosis, the dominant clinical manifestations are osmotic diuresis and natriuresis with consequent volume depletion, orthostatic hypotension, hypokalaemia, hypomagnesaemia, and nausea/vomiting, plus transient prerenal acute kidney injury that does not reflect direct tubular nephrotoxicity and reverses with volume repletion. Management titrates IV crystalloid to clinical volume assessment and urine output, replenishes potassium and magnesium, rechecks renal function expecting prerenal recovery with hydration, and gives antiemetics if needed.",
    rationale:
      "This pathway exists because excluding ketoacidosis does not mean excluding dapagliflozin-related illness altogether — the drug's own osmotic-diuretic mechanism is enough on its own to explain dehydration and a reversible creatinine rise, and this box gives that presentation a specific, proportionate treatment plan.",
    cautions: [
      "\"Antiemetics as required\" appears explicitly in this box, but the manuscript's Section 7.2 only notes that \"nausea, vomiting and dizziness are the commonly reported symptoms\" and does not mention antiemetics in Section 7.3 or Table 3.",
      "Unlike the ketoacidosis box, this box does not explicitly instruct stopping dapagliflozin. The manuscript's Section 5.3 and Section 8 state it should be temporarily suspended during any acute illness with vomiting, diarrhoea, dehydration, or reduced oral intake (\"sick-day guidance\"), while Section 5.2 states it should not be stopped for uncomplicated urogenital infections specifically — and Box 8 at the end of this figure instructs, for every pathway, not to restart the drug until the patient is metabolically stable and eating normally, implying it was in fact withheld at some point along the way even though this box does not say so directly."
    ],
    refs: [1, 11, 51, 61, 74]
  },
  {
    id: "d2",
    type: "decision",
    label: "Hypoglycaemia present?",
    meaning:
      "Having addressed the ketoacidosis question, both the ketoacidosis and no-ketoacidosis branches merge here to check glucose in the other direction. Because dapagliflozin lowers glucose via insulin-independent proximal tubular SGLT2 blockade, monotherapy carries minimal intrinsic hypoglycaemic risk — hypoglycaemia was absent across all 88 single-substance SGLT2 inhibitor exposures in the main poison-centre series, and was absent even in a severe ipragliflozin overdose with an arrival concentration of 9,516 ng/mL. If hypoglycaemia is absent, the pathway proceeds directly to the elimination box below; if present, it is investigated as its own branch, below.",
    rationale:
      "Sequencing the hypoglycaemia question after the ketoacidosis question, rather than screening for both in parallel at triage, keeps the earlier instruction to \"measure ketones regardless of glucose\" unambiguous, and guards against clinicians anchoring on an expected hypoglycaemia from what looks, superficially, like an \"antidiabetic\" overdose — a wrong assumption that could cause a dangerous co-ingestant to be missed.",
    refs: [1, 11, 23, 62, 63, 74]
  },
  {
    id: "hypoglycaemia_yes",
    type: "branch",
    label: "Actively seek a CO-INGESTANT (sulphonylurea or insulin).",
    sub: "Hypoglycaemia is NOT expected from an isolated SGLT2 inhibitor overdose.",
    meaning:
      "If hypoglycaemia is documented, the manuscript calls for actively investigating and treating co-administration or co-ingestion of an insulin secretagogue (such as a sulphonylurea) or exogenous insulin, before continuing down the shared pathway. Hypoglycaemia emerges principally through combination with exogenous insulin or sulphonylureas, and was 0% (0 of 88 cases) in the multi-centre poison-centre series of isolated SGLT2 inhibitor exposures.",
    rationale:
      "Stating explicitly that hypoglycaemia is \"NOT expected\" closes off the most likely diagnostic error at this step: attributing a low glucose to dapagliflozin simply because the patient is known to be diabetic and to have taken \"too much\" of a diabetes medication, when the pharmacology and the real-world case evidence both say this particular medication could not have caused it alone.",
    cautions: [
      "The manuscript's Section 7.2 adds \"or to an alternative diagnosis\" when describing this step (redirecting attention to a co-ingestant \"or to an alternative diagnosis\"), which is condensed out of this box's wording."
    ],
    refs: [11, 14, 16, 23, 62, 63, 74]
  },
  {
    id: "elimination",
    type: "process",
    tone: "alarm",
    label: "DO NOT attempt haemodialysis or haemoperfusion for drug removal",
    sub: "(Vd ≈ 118 L, ~91% protein-bound). Activated charcoal is not routinely indicated.",
    meaning:
      "Dapagliflozin has extensive extravascular distribution (mean volume of distribution approximately 118 L) and high plasma protein binding (approximately 91%), making extracorporeal clearance ineffective — a large volume of distribution means most of the drug has already left the bloodstream, and high protein binding means the fraction of drug free in plasma, the only fraction a dialysis membrane or haemoperfusion cartridge can actually clear, is small to begin with. Activated charcoal is not routinely indicated because isolated dapagliflozin overdose generally follows a mild, self-limiting course — urinary glucose excretion saturates at roughly 20–50 mg daily despite dose-proportional plasma exposure up to 500 mg — while charcoal carries its own aspiration/procedural risk. Additional pharmacokinetic context: peak plasma concentration is reached within about two hours, oral bioavailability is approximately 78%, and urinary recovery as parent drug is less than 2%.",
    rationale:
      "This box is phrased as an explicit prohibition, in a protocol that otherwise phrases its boxes as instructions to act, because the realistic error here is not omission but a well-intentioned but likely futile intervention: a clinician faced with a large or intentional ingestion may reach for dialysis as an intuitive \"get the drug out\" response, and these two pharmacokinetic parameters give good reason to expect it will not meaningfully help.",
    cautions: [
      "This box states only \"activated charcoal is not routinely indicated\". The manuscript's Section 7.3 and Table 3 Step 3 add an explicit conditional exception: gastrointestinal decontamination with activated charcoal \"may be considered for a substantial recent ingestion in a patient with a protected airway, applying standard criteria\" — it is not routinely indicated given the generally benign course. Neither the figure nor the text gives a numeric dose or post-ingestion time cutoff for what counts as a \"substantial recent ingestion\"; this defers to standard toxicology decontamination criteria rather than a review-derived number.",
      "This box and Table 3 Step 4 use the term \"haemoperfusion\", while the manuscript's Section 3.2 and Section 7.3 prose use the broader terms \"extracorporeal removal\" / \"extracorporeal elimination\" alongside \"haemodialysis\" specifically."
    ],
    refs: [11, 19]
  },
  {
    id: "observation",
    type: "process",
    label: "OBSERVATION — extend beyond 4–6 h.",
    sub:
      "Observe ≥ 12–24 h after significant intentional ingestion with repeat ketones and electrolytes; longer if renal function is impaired on arrival, because the pharmacodynamic effect outlasts the plasma half-life of approximately 13 hours.",
    meaning:
      "Do not medically clear an asymptomatic patient with a normal anion gap and normal ketones at 4–6 hours post-ingestion. SGLT2 inhibition at the proximal tubule persists after the parent drug has cleared from plasma, so the pharmacodynamic effect outlasts the terminal elimination half-life, and ketoacidosis can be delayed. Early renal impairment also reduces glomerular glucose filtration and blunts glycosuria; as renal function recovers, SGLT2-mediated osmotic diuresis is unmasked. In the cited severe ipragliflozin overdose (arrival concentration 9,516 ng/mL, initial eGFR 42.3 mL/min/1.73 m²), polyuria was absent at presentation and only unmasked around 36 hours as renal function improved — meaning a patient who appears stable at 12 hours can still develop clinically significant polyuria at 24 to 36 hours.",
    rationale:
      "\"Extend beyond 4–6 h\" is written as a correction to a default reflex: a patient who looks well after a few hours of standard observation, with reassuring first-pass bloods, is exactly the patient at risk of being discharged before a delayed ketoacidosis — or a delayed, renal-function-dependent diuresis — has had time to declare itself.",
    cautions: [
      "This box states the terminal plasma half-life as \"approximately 13 hours\"; the manuscript's Section 3.2 and Table 3 Step 8 both state \"approximately 12.9 hours\" for the same half-life after a 10 mg dose — a rounding difference, not a different figure.",
      "The frequency/interval for \"repeat ketones and electrolytes\", and a numeric eGFR cutoff defining \"impaired on arrival\", are not stated anywhere in the manuscript. The manuscript's own Section 9 states plainly that its overdose-management recommendations generally are \"reasoned extrapolations from pharmacology and limited clinical experience rather than evidence-based protocols\" — this observation window is one of them, not a cited fixed rule."
    ],
    refs: [19, 74]
  },
  {
    id: "disposition",
    type: "terminal",
    label: "Contact a regional poisons centre for large or mixed ingestions.",
    sub:
      "Arrange psychiatric assessment for every intentional overdose, in parallel with medical care. Do not restart the drug until the patient is metabolically stable and eating normally.",
    meaning:
      "Three disposition actions close the pathway. Published clinical experience with SGLT2 inhibitor overdose is limited to fewer than 100 cases overall, so specialist toxicology/regional-poisons-centre consultation is valuable, especially when co-ingestants complicate the course. Psychiatric assessment running in parallel with, rather than after, medical care reflects that medical stability in SGLT2 inhibitor ingestion is often achieved rapidly, while the underlying self-harm risk persists — arranging psychiatric review in parallel prevents premature discharge or unnecessary delay once observation concludes. The restart criterion closes the loop back to the mechanism established earlier: premature reintroduction while fasting, dehydrated, or ketonaemic risks recurrent ketoacidosis, and in the perioperative setting the manuscript's Section 6.3 adds that reintroduction should specifically await normal ketone concentrations and re-established oral intake.",
    rationale:
      "Ending the algorithm on the restart criterion, rather than on the acute treatment, matters because the single most preventable recurrence in this condition is restarting the drug too early during an ongoing illness — the same \"sick-day\" logic introduced at the top of this page, now stated as a discharge-safety instruction.",
    cautions: [
      "This box says only \"regional poisons centre\". The manuscript's Section 7.3 and Table 3 Step 9 both say \"regional poisons centre or clinical toxicologist\".",
      "No numeric tablet count or milligram cutoff defining a \"large\" ingestion is stated anywhere in the manuscript, and no specific post-recovery waiting interval before restarting dapagliflozin is given beyond metabolic stability, normal ketone concentrations, and normal oral intake."
    ],
    refs: [11, 29, 30, 73]
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
  { match: "anion gap", def: "A calculated gap between measured positive and negative blood electrolytes. A raised gap is consistent with an unmeasured acid — such as ketones — being present, but is treated as a supportive finding alongside ketones and acidosis rather than a stand-alone diagnostic criterion." },
  { match: "fixed-rate insulin infusion", def: "A continuous intravenous insulin infusion run at a set rate (rather than adjusted only by a sliding scale), the standard way of switching off ketogenesis in DKA treatment; dextrose is co-administered to prevent it from also causing hypoglycaemia." },
  { match: "co-ingestant", def: "Another substance taken at the same time as the drug in question. Central to this algorithm because dapagliflozin's own toxicity is limited — most of the danger in a mixed or large ingestion comes from what else was taken." },
  { match: "sulphonylurea", def: "A class of oral diabetes drug (e.g. gliclazide, glimepiride) that works by stimulating the pancreas to secrete insulin. Unlike dapagliflozin, sulfonylureas can cause significant hypoglycaemia in overdose, which is why they are specifically sought if a patient on dapagliflozin is found to be hypoglycaemic." },
  { match: "volume of distribution", full: "apparent volume of distribution (Vd)", def: "A pharmacokinetic value describing how far a drug spreads from the bloodstream into body tissue. A large Vd means most of the drug has left the blood, so even efficient blood-side removal (dialysis) can only ever clear a small fraction of the total dose." },
  { match: "protein-bound", full: "plasma protein binding", def: "The proportion of a drug circulating attached to plasma proteins rather than free in solution. Only the free fraction can cross a dialysis membrane, so a highly protein-bound drug is poorly cleared by dialysis regardless of its concentration." },
  { match: "haemoperfusion", def: "An extracorporeal removal technique that passes blood through a cartridge of adsorbent material (rather than a dialysis membrane) to bind and remove a drug. Like haemodialysis, its effectiveness depends on the drug being freely available in plasma, which a highly protein-bound drug like dapagliflozin is not." },
  { match: "sick-day rules", def: "Guidance to temporarily stop an SGLT2 inhibitor during acute illness, reduced oral intake, dehydration, or before major surgery, and to restart it only once the patient's condition has stabilised — because relative fasting is a precipitant of SGLT2-inhibitor-associated ketoacidosis." },
  { match: "prerenal", def: "A pattern of acute kidney function decline caused by reduced blood flow to otherwise-healthy kidneys (e.g. from dehydration), rather than direct injury to the kidney tissue itself — typically reversible with fluid replacement." }
];

// Clinical agent (drug) names to visually emphasise wherever they appear —
// in the diagram boxes themselves and in the readout panel's prose. This
// is a rendering-only concern (app.js wraps each match in a styled span at
// render time); it never touches label/sub, which stay byte-exact as
// authored. Matching is case-insensitive and whole-word, longest name
// first.
// Added at Dr. Özgür Karcıoğlu's request, 2026-11-02 — see METHODOLOGY.md.
const AGENTS = [
  "Dapagliflozin",
  "Insulin",
  "Dextrose",
  "Activated charcoal"
];

if (typeof module !== "undefined") {
  module.exports = { NODES, REFERENCES, GLOSSARY };
}
