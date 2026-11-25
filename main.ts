// Writes the one-line out-of-office reply to the entry file for judging.
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm away until Monday — if it's urgent, it has my full sympathy and none of my attention.";

const graderDir = "/output";
const localDir = join(import.meta.dirname, "output");
const outDir = existsSync(graderDir) ? graderDir : localDir;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
