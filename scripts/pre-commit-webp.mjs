#!/usr/bin/env node
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { IMAGE_RE } from "./convert-to-webp.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const convertScript = path.join(root, "scripts", "convert-to-webp.mjs");

const staged = spawnSync(
  "git",
  ["diff", "--cached", "--name-only", "--diff-filter=ACMR"],
  { cwd: root, encoding: "utf8" }
);

if (staged.status !== 0) process.exit(staged.status ?? 1);

const images = staged.stdout
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter(Boolean)
  .filter((f) => IMAGE_RE.test(f));

if (!images.length) process.exit(0);

const convert = spawnSync(
  process.execPath,
  [convertScript, ...images.map((f) => path.join(root, f))],
  { cwd: root, encoding: "utf8" }
);

process.stdout.write(convert.stdout || "");
process.stderr.write(convert.stderr || "");
if (convert.status !== 0) process.exit(convert.status ?? 1);

// Stage newly created webp files + rewritten text + removals
const add = spawnSync("git", ["add", "-A", "--", "images", "."], {
  cwd: root,
  encoding: "utf8",
});
process.stdout.write(add.stdout || "");
process.stderr.write(add.stderr || "");
process.exit(add.status ?? 0);
