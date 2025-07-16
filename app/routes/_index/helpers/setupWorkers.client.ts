import createJSONWorker from "https://esm.sh/monaco-editor/esm/vs/language/json/json.worker.js?worker";
import createGraphQLWorker from "https://esm.sh/monaco-graphql/esm/graphql.worker.js?worker";
import createEditorWorker from "https://esm.sh/monaco-editor/esm/vs/editor/editor.worker.js?worker";

// @ts-ignore
globalThis.MonacoEnvironment = {
  getWorker(_workerId: unknown, label: string) {
    console.info("MonacoEnvironment.getWorker", { label });
    switch (label) {
      case "json":
        // @ts-ignore
        return createJSONWorker();
      case "graphql":
        // @ts-ignore
        return createGraphQLWorker();
    }
    // @ts-ignore
    return createEditorWorker();
  },
};
