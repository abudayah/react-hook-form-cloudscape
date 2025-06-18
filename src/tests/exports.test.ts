import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

import { describe, it, expect } from "vitest";

describe("Package Exports Validation", () => {
  const projectRoot = process.cwd();

  it("should have main entry files", () => {
    expect(existsSync(resolve(projectRoot, "index.js"))).toBe(true);
    expect(existsSync(resolve(projectRoot, "index.d.ts"))).toBe(true);
  });

  it("should have component exports matching the wildcard pattern", () => {
    const componentsDir = resolve(projectRoot, "components");

    // Skip if not built yet
    if (!existsSync(componentsDir)) {
      console.warn("Components directory not found - run build first");
      return;
    }

    const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    expect(componentDirs.length).toBeGreaterThan(0);

    componentDirs.forEach((componentName) => {
      const jsPath = resolve(projectRoot, `components/${componentName}/index.js`);
      const dtsPath = resolve(projectRoot, `components/${componentName}/index.d.ts`);

      expect(existsSync(jsPath), `Missing: components/${componentName}/index.js`).toBe(true);
      expect(existsSync(dtsPath), `Missing: components/${componentName}/index.d.ts`).toBe(true);
    });
  });

  it("should have all files listed in package.json files array", () => {
    const requiredFiles = ["components", "chunks", "index.js", "index.js.map", "index.d.ts"];

    requiredFiles.forEach((file) => {
      const filePath = resolve(projectRoot, file);
      expect(existsSync(filePath), `Missing required file: ${file}`).toBe(true);
    });
  });
});
