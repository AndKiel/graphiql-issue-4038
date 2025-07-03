import { reactRouter } from "@react-router/dev/vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    reactRouter(),
    // @ts-ignore
    monacoEditorPlugin.default({
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
