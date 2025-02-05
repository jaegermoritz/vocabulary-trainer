import { parse } from "graphql";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { yoga } from "./../yoga";

// Mock the hello resolver to return static values for testing
jest.mock("./../schema/hello/resolvers/Query/hello", () => ({
  hello: jest.fn().mockResolvedValue({ message: "Hello World!" }),
}));

function assertSingleValue<TValue extends object>(
  value: TValue | AsyncIterable<TValue>
): asserts value is TValue {
  if (Symbol.asyncIterator in value) {
    throw new Error("Expected single value");
  }
}

const executor = buildHTTPExecutor({
  fetch: yoga.fetch,
  endpoint: `http://localhost:4000/api/graphql`,
});

describe("GraphQL Yoga Tests", () => {
  it("should return the correct message from the hello query", async () => {
    const result = await executor({
      document: parse(/* GraphQL */ `
        query MyQuery {
          hello {
            message
          }
        }
      `),
    });

    assertSingleValue(result);

    expect(result.data?.hello.message).toBe("Hello World!");
  });
});
