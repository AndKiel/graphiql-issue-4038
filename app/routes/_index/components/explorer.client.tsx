import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker.js?worker&url";
import graphqlWorker from "./worker.js?worker&url";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker.js?worker&url";

import { GraphiQL } from "graphiql";
import { JSX, useEffect } from "react";

import { createFetcher } from "../helpers/createFetcher";
import { ShareExplorerQueryButton } from "./shareExplorerQueryButton.client";

export function Explorer(): JSX.Element {
  useEffect(() => {
    window.MonacoEnvironment = {
      getWorkerUrl: (_moduleId: string, label: string) => {
        switch (label) {
          case "json":
            return jsonWorker;
          case "graphql":
            return graphqlWorker;
          case "editorWorkerService":
          default:
            return editorWorker;
        }
      },
    };
  }, []);

  return (
    <GraphiQL
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
            <ShareExplorerQueryButton />
          </>
        )}
      </GraphiQL.Toolbar>
    </GraphiQL>
  );
}
