#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hookDir = path.join(root, ".git", "hooks");
const hookPath = path.join(hookDir, "pre-commit");

if (!fs.existsSync(path.join(root, ".git"))) {
  process.exit(0);
}

fs.mkdirSync(hookDir, { recursive: true });

const hook = `#!/bin/sh
# Auto-convert raster images to WebP before commit
node "$(dirname "$0")/../../scripts/pre-commit-webp.mjs"
status=$?
if [ $status -ne 0 ]; then
  echo "pre-commit webp convert failed"
  exit $status
fi
exit 0
`;

fs.writeFileSync(hookPath, hook.replace(/\r\n/g, "\n"));
try {
  fs.chmodSync(hookPath, 0o755);
} catch {
  // Windows may ignore chmod
}
console.log("[webp] installed git pre-commit hook");
