import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  server: {
    allowedHosts: ["11342cda1029e9.lhr.life"],
  },
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname, // ✅ ESM-friendly alias
    },
  },
});
