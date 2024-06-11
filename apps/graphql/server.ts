import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { graphqlConfig } from "@repo/shared-config";

const yoga = createYoga({
  graphiql: {
    defaultQuery: /* GraphQL */ `
      query GET_USER {
        user(id: "001") {
          id
          fullName
          isAdmin
        }
      }
    `,
  },
  schema: createSchema({ typeDefs, resolvers }),
});
const server = createServer(yoga);
server.listen(graphqlConfig.port, () => {
  console.log(`Server is running on ${graphqlConfig.url}`);
});
