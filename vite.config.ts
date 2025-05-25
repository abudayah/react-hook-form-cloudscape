/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/react-hook-form-cloudscape",
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
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactHookFormCloudscape",
      formats: ["es", "umd"],
      fileName: (format) => `react-hook-form-cloudscape.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-hook-form", /^@cloudscape-design\/.*$/],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-hook-form": "ReactHookForm",
        },
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === "index") {
            return "index.js";
          }
          return "components/[name]/index.js";
        },
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
