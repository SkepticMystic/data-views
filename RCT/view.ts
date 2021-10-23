const rct: {
  methods: {
    design: string;
    sampling: { type: string };
    measure: {
      primaryOutcome: string;
      waves: { timing: string; remuneration: string }[];
    };
    total?: number;
    groups: { type: string; intervention: string; n?: number }[];
  };
  results: {
    ht: { conclusion: string; sig: number };
    ci: { alpha: number; lower: number; upper: number };
    odds: number;
  };
} = input;

function spliceLast(splits: string[], insert: string) {
  const len = splits?.length;
  if (len > 1) {
    splits[len - 1] = insert + splits[len - 1];
  }
  return splits;
}

const { methods, results } = rct;
const design = methods.design;
let n = methods.groups.map((g) => g.n).reduce((a, n) => a + n);
if (!n) {
  n = methods.total;
}
const nList = methods.groups.map((g) => g.n).join(", ");
const groups = methods.groups.length;
const interventions = spliceLast(
  methods.groups.map((g) => g.intervention),
  "or "
)?.join(", ");

const { primaryOutcome } = methods.measure;
const CL = (1 - results.ci.alpha) * 100;
const { lower, upper } = results.ci;
const { odds } = results;

const { conclusion, sig } = results?.ht || {};

// let htConc, htSig;
// if (results.ht) {
//   htConc = results.ht.conclusion;
//   htSig = results.ht.sig;
// }
const timings = spliceLast(
  methods.measure.waves?.map((w) => w.timing),
  "and "
)?.join(", ");
const remunerations = spliceLast(
  methods.measure.waves?.map((w) => w.remuneration),
  "and "
)?.join(", ");

dv.paragraph(`In this ${design}, ${n} participants split between ${groups} groups${
  nList ? ` (${nList})` : ""
} underwent${
  interventions.length > 1 ? " either" : ""
} a ${interventions} intervention to measure their ${primaryOutcome}.
${timings ? ` Measurement occured at: ${timings}.` : ""}${
  remunerations ? ` Participants recieved ${remunerations}, respectively.` : ""
}`);

dv.header(3, "Results");

dv.paragraph(
  `${lower ? `**CI**: [${lower}, ${upper}] (${CL}%)` : ""}
  ${
    odds
      ? `
  **OR**: ${odds}`
      : ""
  }
  ${
    conclusion
      ? `
  A HT determined that: ${conclusion} ($p=${sig}$)`
      : ""
  }`
);
