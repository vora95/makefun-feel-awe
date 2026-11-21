// "The Roof": a grandfather, a blanket, and a sky that keeps opening above us.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = [
  "The roof was still warm.",
  "My grandfather spread the blanket and lay back.",
  "One star. Then another, the way rain starts.",
  "He only waited.",
  "The sky kept opening above us,",
  "deeper the longer we looked,",
  "until the roof and the street",
  "were only a small warm place underneath it.",
].join("\n");

const points = [...TEXT].length;
if (points < 1 || points > 280) {
  throw new Error(`entry is ${points} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
