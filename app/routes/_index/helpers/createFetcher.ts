import type { GraphiQLProps } from "graphiql";

export function createFetcher(apiUrl: string): GraphiQLProps["fetcher"] {
  return async function (graphQLParams, opts) {
    if (graphQLParams.operationName === "IntrospectionQuery") return {};

    const headers: HeadersInit = {
      ...opts?.headers,
      "Content-Type": "application/json",
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(graphQLParams),
    });

    return response.json();
  };
}
