const names: string[] = input.names;
const diffs: { values: { days: number } }[] = input.diffs;

const namesAndDiffs = names.map((note, i) => {
  return { note, diff: diffs[i].values.days };
});

const final = namesAndDiffs
  .filter((note) => note.diff > 0)
  .sort((a, b) => a.diff - b.diff);

const canvas: HTMLCanvasElement = document.querySelector("#DemoCanvas");

const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

ctx.clearRect(0, 0, width, height);

ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
ctx.stroke();

const tickHeight = 10;
const tickSpacing = 50;

const maxDays = Math.max(...final.map((note) => note.diff));
final.forEach((note) => (note.norm = (note.diff / maxDays) * width));

final.forEach((diff, i) => {
  ctx.moveTo(diff.norm, height / 2 - tickHeight);
  ctx.lineTo(diff.norm, height / 2 + tickHeight);
  ctx.stroke();

  ctx.font = "10px Georgia";
  ctx.fillText(
    diff.diff.toFixed(1),
    diff.norm - tickSpacing / 2,
    height / 2 + (-1) ** i * (2 * tickHeight)
  );
  ctx.fillText(
    diff.note,
    diff.norm - tickSpacing / 2,
    height / 2 + (-1) ** i * (3 * tickHeight)
  );
});
