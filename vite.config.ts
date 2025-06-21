/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import dts from "vite-plugin-dts";
import { glob } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const componentEntries = glob.sync("src/components/**/index.ts").map((file) => resolve(__dirname, file));

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
    outDir: "dist",
    lib: {
      entry: [resolve(__dirname, "src/index.ts"), ...componentEntries],
      name: "ReactHookFormCloudscape",
      formats: ["es"],
    },
    rollupOptions: {
      external: [/^@cloudscape-design\/.*$/, "react", "react-dom", "react-hook-form"],
      output: {
        format: "es",
        exports: "auto",
        preserveModules: true,
        preserveModulesRoot: "src",
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
