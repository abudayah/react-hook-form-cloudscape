import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const distDir = resolve("dist");

function getJavaScriptFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return getJavaScriptFiles(path);
    return entry.isFile() && path.endsWith(".js") ? [path] : [];
  });
}

const files = getJavaScriptFiles(distDir);
if (files.length === 0) {
  throw new Error("React runtime verification failed: no JavaScript files found in dist/");
}

const forbiddenInternals = [
  "ReactCurrentDispatcher",
  "ReactCurrentOwner",
  "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
];

const bundledRuntimeFiles = files.filter((file) => {
  const content = readFileSync(file, "utf8");
  return forbiddenInternals.some((internal) => content.includes(internal));
});

if (bundledRuntimeFiles.length > 0) {
  throw new Error(
    [
      "React runtime verification failed: private React internals were found in the built package.",
      ...bundledRuntimeFiles.map((file) => " - " + file),
      "Check that react, react-dom, and all their subpaths are externalized in vite.config.ts.",
    ].join("\n"),
  );
}

const hasExternalJsxRuntime = files.some((file) =>
  /from\s+["']react\/jsx-runtime["']/.test(readFileSync(file, "utf8")),
);

if (!hasExternalJsxRuntime) {
  throw new Error(
    "React runtime verification failed: the built package does not import react/jsx-runtime as an external dependency.",
  );
}

console.log("React runtime verification passed: React internals are not bundled.");
