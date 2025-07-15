import { GraphiQL } from "graphiql";
import { JSX } from "react";

import { createFetcher } from "../helpers/createFetcher";
import { ShareExplorerQueryButton } from "./shareExplorerQueryButton.client";

export function Explorer(): JSX.Element {
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