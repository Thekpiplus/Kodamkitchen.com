#!/usr/bin/env node
/**
 * Convert raster images under images/ to .webp, rewrite HTML/JS/CSS refs,
 * and delete the originals. Pass file paths to convert only those files;
 * otherwise scan the whole images/ tree.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const imagesRoot = path.join(root, "images");
const TEXT_EXTS = new Set([".html", ".js", ".css", ".json", ".md", ".txt"]);
const IMAGE_RE = /\.(jpe?g|png|gif|bmp|tiff?|avif)$/i;

async function loadSharp() {
  try {
    const mod = await import("sharp");
    return mod.default || mod;
  } catch {
    console.error(
      "[webp] sharp is not installed. Run: npm install"
    );
    process.exit(1);
  }
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function collectTargets(cliArgs) {
  if (cliArgs.length) {
    return cliArgs
      .map((p) => path.resolve(p))
      .filter((p) => IMAGE_RE.test(p) && fs.existsSync(p));
  }
  return walk(imagesRoot).filter((p) => IMAGE_RE.test(p));
}

function rewriteReferences(fromRel, toRel) {
  const files = walk(root).filter((p) => {
    if (p.includes(`${path.sep}node_modules${path.sep}`)) return false;
    if (p.includes(`${path.sep}.git${path.sep}`)) return false;
    return TEXT_EXTS.has(path.extname(p).toLowerCase());
  });

  const fromPosix = fromRel.split(path.sep).join("/");
  const toPosix = toRel.split(path.sep).join("/");
  const fromExt = path.extname(fromPosix);
  let changed = 0;

  for (const file of files) {
    let text = fs.readFileSync(file, "utf8");
    if (!text.includes(fromPosix) && !text.includes(fromExt.replace(".", ""))) {
      // still try basename replace for loose refs
    }
    const next = text.split(fromPosix).join(toPosix);
    if (next !== text) {
      // favicon mime type
      let final = next;
      if (/\.png$/i.test(fromPosix)) {
        final = final.replaceAll('type="image/png"', 'type="image/webp"');
      } else if (/\.jpe?g$/i.test(fromPosix)) {
        final = final.replaceAll('type="image/jpeg"', 'type="image/webp"');
      }
      fs.writeFileSync(file, final);
      changed += 1;
    }
  }
  return changed;
}

async function convertOne(sharp, file) {
  const webpPath = file.replace(IMAGE_RE, ".webp");
  if (path.resolve(file) === path.resolve(webpPath)) return null;

  const input = fs.readFileSync(file);
  const isPng = /\.png$/i.test(file);
  const buffer = await sharp(input)
    .webp({ quality: isPng ? 90 : 80, alphaQuality: 90, effort: 4 })
    .toBuffer();

  fs.writeFileSync(webpPath, buffer);

  const fromRel = path.relative(root, file);
  const toRel = path.relative(root, webpPath);
  const refs = rewriteReferences(fromRel, toRel);
  fs.unlinkSync(file);

  return {
    from: fromRel,
    to: toRel,
    before: input.length,
    after: buffer.length,
    refs,
  };
}

async function main() {
  const sharp = await loadSharp();
  const targets = collectTargets(process.argv.slice(2));

  if (!targets.length) {
    console.log("[webp] nothing to convert");
    return;
  }

  const results = [];
  for (const file of targets) {
    try {
      const result = await convertOne(sharp, file);
      if (result) {
        results.push(result);
        console.log(
          `[webp] ${result.from} -> ${result.to} (${(result.before / 1024).toFixed(0)}KB -> ${(result.after / 1024).toFixed(0)}KB, refs:${result.refs})`
        );
      }
    } catch (err) {
      console.error(`[webp] failed ${path.relative(root, file)}:`, err.message);
    }
  }

  console.log(`[webp] converted ${results.length} file(s)`);
}

const isMain =
  process.argv[1] &&
  pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  main();
}

export { convertOne, collectTargets, IMAGE_RE, imagesRoot, root };
