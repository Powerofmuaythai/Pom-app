import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// One-off config for a fully self-contained, double-click-to-open build.
// Not used by the normal dev/build scripts.
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: "dist-standalone",
  },
});
