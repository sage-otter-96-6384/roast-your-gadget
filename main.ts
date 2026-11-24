// roast-your-gadget: writes one original one-line roast of a gadget I use
// every day to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The roast is my own invention: my phone's autocorrect renames my boss
// in every email, and it has never been wrong. Single line, no trailing
// newline. The program refuses to write anything outside the gate's
// 1-to-200 character window, so a bad edit fails loudly instead of
// submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My phone's autocorrect renames my boss 'Beast' in every email, and honestly, it has never been wrong.";

if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} characters, outside the 1-200 gate`);
}
if (ROAST.includes("\n")) {
  throw new Error("roast must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
