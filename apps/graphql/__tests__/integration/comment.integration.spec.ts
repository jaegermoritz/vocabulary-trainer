import { ExecutionResult, parse } from "graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { prisma } from "../../context";

async function executeOperation<TResult, TVariables>(
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

interface PostLinkResult {
  postLink: {
    id: string;
    description: string;
    url: string;
  };
}

describe("PostComment integration tests", () => {
  it("should create a new comment", async () => {
    // const mutation = parse(/* GraphQL */ `
    //   mutation PostComment($body: String!, $linkId: String!) {
    //     postLink(description: $description, url: $url) {
    //       id
    //       description
    //       url
    //     }
    //   }
    // `) as TypedDocumentNode<
    //   PostLinkResult,
    //   { description: string; url: string }
    // >;
    // const currentDatetime = new Date().toISOString();
    // const description = `A new link - ${currentDatetime}`;
    // const variables = {
    //   description,
    //   url: "http://example.com",
    // };
    // const result = await executeOperation(mutation, variables);
    // expect(result.data?.postLink).toMatchObject({
    //   description: variables.description,
    //   url: variables.url,
    // });
    // const linkInDb = await prisma.link.findUnique({
    //   where: { id: parseInt(result.data?.postLink.id.toString() || "") },
    // });
    // expect(linkInDb).toMatchObject({
    //   description: variables.description,
    //   url: variables.url,
    // });
  });
});
