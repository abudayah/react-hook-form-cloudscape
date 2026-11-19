import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

import { describe, it, expect } from "vitest";

describe("Package Exports Validation", () => {
  const distRoot = resolve(process.cwd(), "dist");

  it("should have the main package entry files", () => {
    expect(existsSync(resolve(distRoot, "index.js"))).toBe(true);
    expect(existsSync(resolve(distRoot, "index.d.ts"))).toBe(true);
  });

  it("should have component exports matching the wildcard pattern", () => {
    const componentsDir = resolve(distRoot, "components");
    expect(existsSync(componentsDir)).toBe(true);

    const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    expect(componentDirs.length).toBeGreaterThan(0);

    componentDirs.forEach((componentName) => {
      expect(
        existsSync(resolve(componentsDir, componentName, "index.js")),
        `Missing: dist/components/${componentName}/index.js`,
      ).toBe(true);
      expect(
        existsSync(resolve(componentsDir, componentName, "index.d.ts")),
        `Missing: dist/components/${componentName}/index.d.ts`,
      ).toBe(true);
    });
  });
});
