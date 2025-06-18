/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import dts from "vite-plugin-dts";
import { readdirSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamically discover component directories
const getComponentEntries = () => {
  const componentsDir = resolve(__dirname, "src/components");
  const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const entries = {
    index: resolve(__dirname, "src/index.ts"),
  };

  // Add each component's index as an entry point
  componentDirs.forEach((componentName) => {
    const indexPath = resolve(__dirname, `src/components/${componentName}/index.ts`);
    entries[`components/${componentName}/index`] = indexPath;
  });

  return entries;
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: ".",
    lib: {
      entry: getComponentEntries(),
      name: "ReactHookFormCloudscape",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-hook-form", /^@cloudscape-design\/.*$/],
      output: {
        format: "es",
        entryFileNames: (chunkInfo) => {
          // Main entry point
          if (chunkInfo.name === "index") {
            return "index.js";
          }
          // Component entries - maintain the path structure
          if (chunkInfo.name.startsWith("components/")) {
            return `${chunkInfo.name}.js`;
          }
          return `${chunkInfo.name}.js`;
        },
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["ace-builds", "ace-builds/esm-resolver"],
  },
  server: {
    headers: {
      "Content-Security-Policy": "worker-src 'self' blob:; img-src 'self' data:",
    },
  },
});
