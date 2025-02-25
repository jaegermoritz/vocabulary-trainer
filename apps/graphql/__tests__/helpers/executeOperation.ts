import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { ExecutionResult } from "graphql";

export async function executeOperation<TResult, TVariables>(
  operation: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables
): Promise<ExecutionResult<TResult>> {
  const response = await fetch(
    `http://localhost:${process.env.GRAPHQL_SERVER_PORT}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: operation.loc?.source.body,
        variables,
      }),
    }
  );
  return response.json();
}
