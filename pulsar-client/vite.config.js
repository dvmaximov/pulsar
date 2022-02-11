import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    return {
      envDir: "./",
      plugins: [react()],
      build: {
        rollupOptions: {
          output: {
            dir: "../docs",
          },
        },
      },
    };
  } else {
    // command === 'build'
    return {
      envDir: "./",
      base: "/pulsar",
      plugins: [react()],
      build: {
        rollupOptions: {
          output: {
            dir: "../docs",
          },
        },
      },
    };
  }
});
