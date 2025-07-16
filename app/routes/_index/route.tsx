import { NoSsr } from "@mui/material";
import graphiqlStyles from "graphiql/style.css?url";
import type { JSX } from "react";
import { type LinksFunction, type MetaFunction } from "react-router";

import { Explorer } from "./components/explorer.client";
import "./helpers/setupWorkers.client";
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
      <Explorer/>
    </NoSsr>
  );
}
