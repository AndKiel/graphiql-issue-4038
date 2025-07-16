import editorWorker from "https://esm.sh/monaco-editor/esm/vs/editor/editor.worker.js?worker";
import jsonWorker from "https://esm.sh/monaco-editor/esm/vs/language/json/json.worker.js?worker";
import graphqlWorker from "https://esm.sh/monaco-graphql/esm/graphql.worker.js?worker";

import { GraphiQL } from "graphiql";
import { JSX } from "react";

import { createFetcher } from "../helpers/createFetcher";
import { ShareExplorerQueryButton } from "./shareExplorerQueryButton.client";

export function Explorer(): JSX.Element {
  window.MonacoEnvironment = {
    getWorker(workerId, label) {
      console.debug("MonacoEnvironment.getWorker", { workerId, label });
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

  return <GraphiQL
    dangerouslyAssumeSchemaIsValid
    defaultEditorToolsVisibility="variables"
    fetcher={createFetcher("https://graphql.earthdata.nasa.gov/api")}
    isHeadersEditorEnabled={false}
  >
    <GraphiQL.Logo>API Explorer</GraphiQL.Logo>
    <GraphiQL.Toolbar>
      {({ prettify, copy, merge }) => (
        <>
          {prettify}
          {copy}
          {merge}
          <ShareExplorerQueryButton/>
        </>
      )}
    </GraphiQL.Toolbar>
  </GraphiQL>
}