import { parse } from "graphql";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { yoga } from "../../yoga";

// // Mock the hello resolver to return static values for testing
// jest.mock("./../../schema/hello/resolvers/Query/hello", () => ({
//   hello: jest.fn().mockResolvedValue({ message: "Hello World!" }),
// }));

// function assertSingleValue<TValue extends object>(
//   value: TValue | AsyncIterable<TValue>
// ): asserts value is TValue {
//   if (Symbol.asyncIterator in value) {
//     throw new Error("Expected single value");
//   }
// }

// const executor = buildHTTPExecutor({
//   fetch: yoga.fetch,
//   endpoint: `http://localhost:4000/graphql`,
// });

// describe("GraphQL Yoga Tests", () => {
//   it("should return the correct message from the hello query", async () => {
//     const result = await executor({
//       document: parse(/* GraphQL */ `
//         query MyQuery {
//           hello {
//             message
//           }
//         }
//       `),
//     });

//     assertSingleValue(result);

//     expect(result.data?.hello.message).toBe("Hello World!");
//   });
// });

import { hello } from "../../schema/hello/resolvers/Query/hello";
import { GraphQLContext } from "../../context";

import { GraphQLResolveInfo } from "graphql";
import { PrismaClient } from "@prisma/client";

jest.mock("@prisma/client", () => {
  const mPrismaClient = {
    user: {
      findUnique: jest.fn(),
    },
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});
const mockInfo = {} as GraphQLResolveInfo;

describe("hello resolver", () => {
  it("should return the correct message", async () => {
    // Create a mock instance of PrismaClient
    const prisma = new PrismaClient();

    // Mock the context if needed
    const context: GraphQLContext = {
      prisma,
    };

    // Call the resolver function directly
    const result = await hello({}, {}, context, mockInfo);

    // Assert the result
    expect(result).toEqual({ message: "Hello World!" });
  });
});
