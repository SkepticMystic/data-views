var _a, _b, _c, _d, _e;
var rct = input;
function spliceLast(splits, insert) {
    var len = splits === null || splits === void 0 ? void 0 : splits.length;
    if (len > 1) {
        splits[len - 1] = insert + splits[len - 1];
    }
    return splits;
}
var methods = rct.methods, results = rct.results;
var design = methods.design;
var n = methods.groups.map(function (g) { return g.n; }).reduce(function (a, n) { return a + n; });
if (!n) {
    n = methods.total;
}
var nList = methods.groups.map(function (g) { return g.n; }).join(", ");
var groups = methods.groups.length;
var interventions = (_a = spliceLast(methods.groups.map(function (g) { return g.intervention; }), "or ")) === null || _a === void 0 ? void 0 : _a.join(", ");
var primaryOutcome = methods.measure.primaryOutcome;
var CL = (1 - results.ci.alpha) * 100;
var _f = results.ci, lower = _f.lower, upper = _f.upper;
var odds = results.odds;
var _g = (results === null || results === void 0 ? void 0 : results.ht) || {}, conclusion = _g.conclusion, sig = _g.sig;
// let htConc, htSig;
// if (results.ht) {
//   htConc = results.ht.conclusion;
//   htSig = results.ht.sig;
// }
var timings = (_c = spliceLast((_b = methods.measure.waves) === null || _b === void 0 ? void 0 : _b.map(function (w) { return w.timing; }), "and ")) === null || _c === void 0 ? void 0 : _c.join(", ");
var remunerations = (_e = spliceLast((_d = methods.measure.waves) === null || _d === void 0 ? void 0 : _d.map(function (w) { return w.remuneration; }), "and ")) === null || _e === void 0 ? void 0 : _e.join(", ");
dv.paragraph("In this " + design + ", " + n + " participants split between " + groups + " groups" + (nList ? " (" + nList + ")" : "") + " underwent" + (interventions.length > 1 ? " either" : "") + " a " + interventions + " intervention to measure their " + primaryOutcome + ".\n" + (timings ? " Measurement occured at: " + timings + "." : "") + (remunerations ? " Participants recieved " + remunerations + ", respectively." : ""));
dv.header(3, "Results");
dv.paragraph((lower ? "**CI**: [" + lower + ", " + upper + "] (" + CL + "%)" : "") + "\n  " + (odds
    ? "\n  **OR**: " + odds
    : "") + "\n  " + (conclusion
    ? "\n  A HT determined that: " + conclusion + " ($p=" + sig + "$)"
    : ""));
