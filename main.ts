import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke (134 chars, single sentence, no trailing newline).
const JOKE =
  "The office coffee machine has a loyalty card, so after nine cups it gives you a free one and a formal warning about your life choices.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
