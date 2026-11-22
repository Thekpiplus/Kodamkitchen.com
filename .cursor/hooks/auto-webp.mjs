#!/usr/bin/env node
/**
 * Cursor hook: after agent stops / after shell finishes, convert any
 * leftover raster images under images/ to .webp.
 */
import fs from "fs";
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const convertScript = path.join(root, "scripts", "convert-to-webp.mjs");

let input = "";
try {
  input = fs.readFileSync(0, "utf8");
} catch {
  input = "";
}

const result = spawnSync(process.execPath, [convertScript], {
  cwd: root,
  encoding: "utf8",
});

const out = (result.stdout || "").trim();
const err = (result.stderr || "").trim();
const converted = /converted ([1-9]\d*)/.test(out);

const payload = {
  additional_context: converted
    ? `Auto WebP: ${out}`
    : undefined,
  followup_message: converted
    ? "Images were auto-converted to .webp. Update any remaining image paths if needed."
    : undefined,
};

if (err && result.status !== 0) {
  payload.additional_context = `Auto WebP warning: ${err}`;
}

// Always emit valid JSON for Cursor hooks
process.stdout.write(JSON.stringify(payload));
process.exit(0);
