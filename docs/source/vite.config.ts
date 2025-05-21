import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-hook-form-cloudscape/",
  build: {
    assetsDir: "./assets/",
    outDir: "../",
    emptyOutDir: false,
  },
});
