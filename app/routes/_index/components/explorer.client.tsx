import { GraphiQL } from "graphiql";
import { JSX } from "react";

import { createFetcher } from "../helpers/createFetcher";

export function Explorer(): JSX.Element {
  return <GraphiQL
    dangerouslyAssumeSchemaIsValid
    defaultEditorToolsVisibility="variables"
    fetcher={createFetcher("https://graphql.earthdata.nasa.gov/api")}
    isHeadersEditorEnabled={false}
  >
    <GraphiQL.Logo>API Explorer</GraphiQL.Logo>
  </GraphiQL>
}