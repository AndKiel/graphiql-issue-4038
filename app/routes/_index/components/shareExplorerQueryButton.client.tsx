import { ToolbarButton, useOperationsEditorState, useVariablesEditorState } from "@graphiql/react";
import { JSX } from "react";

import { copyToClipboard } from "../helpers/copyToClipboard.client";
import { encode } from "../helpers/encode";

export function ShareExplorerQueryButton(): JSX.Element {
  const [operations] = useOperationsEditorState();
  const [variables] = useVariablesEditorState();

  async function onShareExplorer(): Promise<void> {
    // RESULT: <empty string> <empty string>
    console.log(operations, variables)

    const shareableURL = new URL("/explorer", window.location.origin);
    if (operations) shareableURL.searchParams.set("query", encode(operations));
    if (variables) shareableURL.searchParams.set("variables", encode(variables));
    await copyToClipboard(shareableURL.toString());
  }

  return <ToolbarButton
    label="Share your Explorer query"
    onClick={() => void onShareExplorer()}
    style={{ textAlign: "center" }}
    title="Share your Explorer query"
  >
    S
  </ToolbarButton>
}