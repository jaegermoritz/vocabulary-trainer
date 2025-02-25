import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";
import { executeOperation } from "../helpers/executeOperation";
import { prisma } from "../../context";

interface PostCommentOnLinkResult {
  postCommentOnLink: {
    body: string;
    id: number;
    createdAt: Date;
    linkId: number;
  };
}

const postCommentOnLinkMutation = parse(/* GraphQL */ `
  mutation PostComment($body: String!, $linkId: ID!) {
    postCommentOnLink(body: $body, linkId: $linkId) {
      id
      createdAt
      body
      link {
        id
      }
    }
  }
`) as TypedDocumentNode<
  PostCommentOnLinkResult,
  { body: string; linkId: string }
>;

async function createComment(variables: { body: string; linkId: string }) {
  return await executeOperation(postCommentOnLinkMutation, {
    body: variables.body,
    linkId: variables.linkId,
  });
}

describe("PostCommentOnLink integration tests", () => {
  it("should create a new comment", async () => {
    const currentDatetime = new Date().toISOString();
    const body = `A new comment - ${currentDatetime}`;
    const linkId = "1";
    const result = await createComment({ body, linkId });

    expect(result.errors).toBeUndefined();
    expect(result.data!.postCommentOnLink).toMatchObject({
      body,
      createdAt: expect.any(String),
      id: expect.any(String),
      link: { id: "1" },
    });

    const commentInDb = await prisma.comment.findUnique({
      where: { id: parseInt(result.data!.postCommentOnLink.id.toString()) },
    });
    expect(commentInDb).toMatchObject({
      body,
      linkId: 1,
    });
  });
});
