/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

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
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: ".",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
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
      },
    },
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["ace-builds", "ace-builds/esm-resolver"],
  },
  csp: {
    directives: {
      "worker-src": ["self", "blob:"],
      "img-src": ["self", "data:"],
    },
  },
});
