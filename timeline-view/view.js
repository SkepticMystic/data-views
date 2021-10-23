var names = input.names;
var diffs = input.diffs;
var namesAndDiffs = names.map(function (note, i) {
    return { note: note, diff: diffs[i].values.days };
});
var final = namesAndDiffs
    .filter(function (note) { return note.diff > 0; })
    .sort(function (a, b) { return a.diff - b.diff; });
var canvas = document.querySelector("#DemoCanvas");
canvas;
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
ctx.clearRect(0, 0, width, height);
ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
ctx.stroke();
var tickHeight = 10;
var tickSpacing = 50;
var maxDays = Math.max.apply(Math, final.map(function (note) { return note.diff; }));
final.forEach(function (note) { return (note.norm = (note.diff / maxDays) * width); });
final.forEach(function (diff, i) {
    ctx.moveTo(diff.norm, height / 2 - tickHeight);
    ctx.lineTo(diff.norm, height / 2 + tickHeight);
    ctx.stroke();
    ctx.font = "10px Georgia";
    ctx.fillText(diff.diff.toFixed(1), diff.norm - tickSpacing / 2, height / 2 + Math.pow((-1), i) * (2 * tickHeight));
    ctx.fillText(diff.note, diff.norm - tickSpacing / 2, height / 2 + Math.pow((-1), i) * (3 * tickHeight));
});
