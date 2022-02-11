import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const mode = process.env === "production";

console.log("mode", import.meta.env);

// https://vitejs.dev/config/
// export default defineConfig({
//   envDir: "./",
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       output: {
//         dir: "../docs",
//       },
//     },
//   },
// });

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
      base: "/pulsar/",
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
