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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
