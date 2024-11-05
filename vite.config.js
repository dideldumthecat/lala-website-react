import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 1056,
        open: true,
    },
    preview: {
        port: 1056,
    },
    build: {
        sourcemap: true,
        outDir: "dist",
    },
    css: {
        devSourcemap: true,
    },
});
