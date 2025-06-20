import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve("./src/index.ts"),
      name: "functions",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /firebase-functions(\/.*)*/,
        /firebase-admin(\/.*)*/,
        /io-ts(\/.*)*/,
        /fp-ts(\/.*)*/,
      ],
    },
    outDir: "dist",
  },
});
