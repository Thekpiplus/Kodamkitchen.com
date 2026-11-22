#!/usr/bin/env node
/**
 * Watch images/ and auto-convert new/changed raster files to .webp.
 */
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { IMAGE_RE, imagesRoot, root } from "./convert-to-webp.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const convertScript = path.join(__dirname, "convert-to-webp.mjs");
const pending = new Map();
const DEBOUNCE_MS = 400;

function queue(file) {
  if (!IMAGE_RE.test(file)) return;
  if (!file.startsWith(imagesRoot)) return;

  clearTimeout(pending.get(file));
  pending.set(
    file,
    setTimeout(() => {
      pending.delete(file);
      if (!fs.existsSync(file)) return;
      console.log(`[watch] converting ${path.relative(root, file)}`);
      const child = spawn(process.execPath, [convertScript, file], {
        cwd: root,
        stdio: "inherit",
      });
      child.on("exit", (code) => {
        if (code !== 0) console.error(`[watch] convert exited ${code}`);
      });
    }, DEBOUNCE_MS)
  );
}

function watchDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    const full = path.join(dir, filename);
    if (IMAGE_RE.test(full)) queue(full);
  });
}

watchDir(imagesRoot);
console.log(`[watch] watching ${path.relative(root, imagesRoot)} for image uploads…`);
console.log("[watch] drop .jpg/.png/.gif/.bmp/.tif/.avif here — they become .webp automatically");
