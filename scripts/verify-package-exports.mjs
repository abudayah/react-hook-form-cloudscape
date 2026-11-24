import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const distRoot = resolve(process.cwd(), "dist");
const requiredFiles = ["index.js", "index.d.ts"];

for (const file of requiredFiles) {
  const filePath = resolve(distRoot, file);
  assert.ok(existsSync(filePath), `Missing package entry: dist/${file}`);
}

const componentsDir = resolve(distRoot, "components");
assert.ok(existsSync(componentsDir), "Missing package component directory: dist/components");

const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

assert.ok(componentDirs.length > 0, "No component entry directories were generated");

for (const componentName of componentDirs) {
  for (const extension of ["js", "d.ts"]) {
    const relativePath = `components/${componentName}/index.${extension}`;
    assert.ok(
      existsSync(resolve(distRoot, relativePath)),
      `Missing component export: dist/${relativePath}`,
    );
  }
  const componentEntryJs = readFileSync(resolve(distRoot, `components/${componentName}/index.js`), "utf8");
  assert.ok(
    componentEntryJs.startsWith('"use client";'),
    `Missing "use client" directive in dist/components/${componentName}/index.js`,
  );
  const componentImplPath = resolve(distRoot, `components/${componentName}/${componentName}.js`);
  if (existsSync(componentImplPath)) {
    const implJs = readFileSync(componentImplPath, "utf8");
    assert.ok(
      implJs.startsWith('"use client";'),
      `Missing "use client" directive in dist/components/${componentName}/${componentName}.js`,
    );
    assert.ok(
      !/from\s+["']@cloudscape-design\/components["']/.test(implJs),
      `Barrel import from "@cloudscape-design/components" found in dist/components/${componentName}/${componentName}.js; use subpath imports instead.`,
    );
  }
}

console.log(`Verified package entrypoints and ${componentDirs.length} component exports.`);
