import editorWorker from "https://esm.sh/monaco-editor/esm/vs/editor/editor.worker.js?worker";
import jsonWorker from "https://esm.sh/monaco-editor/esm/vs/language/json/json.worker.js?worker";
import graphqlWorker from "https://esm.sh/monaco-graphql/esm/graphql.worker.js?worker";

window.MonacoEnvironment = {
  getWorker(_workerId: unknown, label: string) {
    console.info("MonacoEnvironment.getWorker", { label });
    switch (label) {
      case "json":
        return new jsonWorker();
      case "graphql":
        return new graphqlWorker();
      case "editorWorkerService":
      default:
        return new editorWorker();
    }
  },
};
