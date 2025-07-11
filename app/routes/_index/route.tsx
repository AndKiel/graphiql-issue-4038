import { NoSsr } from "@mui/material";
import { GraphiQL } from "graphiql";
import graphiqlStyles from "graphiql/style.css?url";
import type { JSX } from "react";
import { type LinksFunction, type MetaFunction } from "react-router";

import { createFetcher } from "./helpers/createFetcher";
import explorerStyles from "./styles/explorer.css?url";

export const meta: MetaFunction = () => {
  return [{ title: "API Explorer" }];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: graphiqlStyles },
    { rel: "stylesheet", href: explorerStyles },
  ];
};

export default function Route(): JSX.Element {
  return (
    <NoSsr>
      <GraphiQL
        dangerouslyAssumeSchemaIsValid
        defaultEditorToolsVisibility="variables"
        fetcher={createFetcher("https://graphql.earthdata.nasa.gov/api")}
        isHeadersEditorEnabled={false}
      >
        <GraphiQL.Logo>API Explorer</GraphiQL.Logo>
      </GraphiQL>
    </NoSsr>
  );
}
