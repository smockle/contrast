import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: [
      { find: /^(\.{1,2}\/.*)\.js$/, replacement: "$1" },
      {
        find: /^@\/(.*)\.js$/,
        replacement: `${fileURLToPath(new URL("./src/", import.meta.url))}/$1`,
      },
    ],
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  test: {
    coverage: {
      provider: "v8",
    },
    environment: "node",
    include: ["src/**/*.test.ts"],
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
});
