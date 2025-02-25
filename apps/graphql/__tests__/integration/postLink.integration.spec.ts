import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";
import { prisma } from "../../context";
import { executeOperation } from "../helpers/executeOperation";

interface PostLinkResult {
  postLink: {
    id: string;
    description: string;
    url: string;
  };
}

const postLinkMutation = parse(/* GraphQL */ `
  mutation PostLink($description: String!, $url: String!) {
    postLink(description: $description, url: $url) {
      id
      description
      url
    }
  }
`) as TypedDocumentNode<PostLinkResult, { description: string; url: string }>;

async function createLink(
  description: string,
  url: string
): Promise<PostLinkResult> {
  const result = await executeOperation(postLinkMutation, {
    description,
    url,
  });

  if (result.errors) {
    throw new Error(
      `Failed to create link: ${result.errors.map((e) => e.message).join(", ")}`
    );
  }

  return result.data!;
}

describe("postLink integration tests", () => {
  it("should create a new link", async () => {
    const currentDatetime = new Date().toISOString();
    const description = `A new link - ${currentDatetime}`;
    const url = "http://example.com";

    const result = await createLink(description, url);

    expect(result.postLink).toMatchObject({
      description: description,
      url: url,
    });

    const linkInDb = await prisma.link.findUnique({
      where: { id: parseInt(result.postLink.id.toString() || "") },
    });

    expect(linkInDb).toMatchObject({
      description: description,
      url: url,
    });
  });
});
