import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    proxy: {
      "/products": "http://127.0.0.1:8080",
      "/incentive": "http://127.0.0.1:8080",
      "/user": "http://127.0.0.1:8080",
      "/auth": "http://127.0.0.1:8080",
      "/apps": "http://127.0.0.1:8080",
      "/run_sse": "http://127.0.0.1:8080",
    },
  },
});
