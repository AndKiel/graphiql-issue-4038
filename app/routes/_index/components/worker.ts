// @ts-expect-error -- no types
import { GraphQLWorker } from "monaco-graphql/esm/GraphQLWorker";
// @ts-expect-error -- no types
import { initialize } from "monaco-editor/esm/vs/editor/editor.worker";

self.onmessage = () => {
  // @ts-expect-error -- no types
  initialize((ctx, createData) => new GraphQLWorker(ctx, createData));
};
