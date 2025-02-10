/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { feed as Query_feed } from './feed/resolvers/Query/feed';
import    { hello as Query_hello } from './hello/resolvers/Query/hello';
import    { postLink as Mutation_postLink } from './feed/resolvers/Mutation/postLink';
import    { Hello } from './hello/resolvers/Hello';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { feed: Query_feed,hello: Query_hello },
      Mutation: { postLink: Mutation_postLink },
      
      Hello: Hello,
DateTime: DateTimeResolver
    }