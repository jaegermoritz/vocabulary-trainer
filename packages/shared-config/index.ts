export const graphqlConfig = {
  port: process.env.GRAPHQL_API_PORT || 4000,
  // The path at which the GraphQL API will be served.
  path: process.env.GRAPHQL_API_PATH || "/graphql",
  // The URL to use when fetching operations.
  url:
    process.env.GRAPHQL_API_URL ||
    `http://localhost:${process.env.GRAPHQL_API_PORT || 4000}${process.env.GRAPHQL_API_PATH || "/graphql"}`,
};
