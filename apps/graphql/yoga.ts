import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { createContext } from "./context";

export const schema = createSchema({ typeDefs, resolvers });

export const yoga = createYoga({
  schema,
  context: createContext,
});
