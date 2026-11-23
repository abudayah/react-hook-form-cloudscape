import { readFileSync } from "node:fs";

const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
const entries = Object.entries(lock.packages ?? {});
const resolved = entries.filter(([path, entry]) => path && entry?.resolved && !entry.link);
const missing = resolved.filter(([, entry]) => !entry.integrity).map(([path]) => path);

if (missing.length > 0) {
  console.error("Lockfile entries missing integrity metadata:");
  for (const path of missing.slice(0, 20)) console.error(`  ${path}`);
  if (missing.length > 20) console.error(`  ...and ${missing.length - 20} more`);
  process.exit(1);
}

console.log(`Lockfile integrity verified for ${resolved.length} resolved packages.`);
