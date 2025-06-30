import { reactRouter } from "@react-router/dev/vite";
import monacoEditorEsmPlugin from "vite-plugin-monaco-editor-esm";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    reactRouter(),
    monacoEditorEsmPlugin({
      customWorkers: [
        {
          label: "graphql",
          entry: "monaco-graphql/esm/graphql.worker.js",
        },
      ],
      languageWorkers: ["editorWorkerService", "json"],
    }),
  ],
  worker: {
    format: "es",
  },
});
