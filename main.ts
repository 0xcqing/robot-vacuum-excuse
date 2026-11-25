import { mkdirSync, writeFileSync, chmodSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE: string =
  "The sock was on the floor. I am a vacuum. Do the math, then do the laundry.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath: string = join(outputDir, "entry.txt");
const content: string = `${LINE}\n`;

function assertEntry(line: string, fileContent: string): void {
  if (!line.trim()) {
    throw new Error("entry must not be only white space");
  }
  const codePoints: number = [...line].length;
  if (codePoints < 1 || codePoints > 200) {
    throw new Error(`entry must be 1..200 characters, got ${codePoints}`);
  }
  const lineBytes: number = Buffer.byteLength(line, "utf8");
  if (lineBytes < 1 || lineBytes > 200) {
    throw new Error(`entry must be 1..200 bytes of UTF-8, got ${lineBytes}`);
  }
  if (fileContent !== `${line}\n`) {
    throw new Error("file content must be the entry line plus exactly one newline");
  }
}

function main(): void {
  process.umask(0o022);

  assertEntry(LINE, content);

  mkdirSync(outputDir, { recursive: true });
  chmodSync(outputDir, 0o755);

  writeFileSync(outputPath, content, { encoding: "utf8" });
  chmodSync(outputPath, 0o644);

  const written: Buffer = readFileSync(outputPath);
  if (!written.equals(Buffer.from(content, "utf8"))) {
    throw new Error("written bytes do not match the entry content");
  }

  const fileBytes: number = written.byteLength;
  if (fileBytes < 2 || fileBytes > 201 || written[fileBytes - 1] !== 0x0a || written[fileBytes - 2] === 0x0a) {
    throw new Error(`unexpected file bytes: ${fileBytes}`);
  }

  console.log(outputPath);
  console.log(`chars=${[...LINE].length} lineBytes=${Buffer.byteLength(LINE, "utf8")} fileBytes=${fileBytes}`);
  console.log(LINE);
}

try {
  main();
} catch (error: unknown) {
  const message: string = error instanceof Error ? error.message : String(error);
  process.stderr.write(`entry failed: ${message}\n`);
  process.exitCode = 1;
}
