/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { comment as Query_comment } from "./feed/resolvers/Query/comment";
import { feed as Query_feed } from "./feed/resolvers/Query/feed";
import { hello as Query_hello } from "./hello/resolvers/Query/hello";
import { info as Query_info } from "./feed/resolvers/Query/info";
import { link as Query_link } from "./feed/resolvers/Query/link";
import { postCommentOnLink as Mutation_postCommentOnLink } from "./feed/resolvers/Mutation/postCommentOnLink";
import { postLink as Mutation_postLink } from "./feed/resolvers/Mutation/postLink";
import { Comment } from "./feed/resolvers/Comment";
import { Hello } from "./hello/resolvers/Hello";
import { Link } from "./feed/resolvers/Link";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: {
    comment: Query_comment,
    feed: Query_feed,
    hello: Query_hello,
    info: Query_info,
    link: Query_link,
  },
  Mutation: {
    postCommentOnLink: Mutation_postCommentOnLink,
    postLink: Mutation_postLink,
  },

  Comment: Comment,
  Hello: Hello,
  Link: Link,
  DateTime: DateTimeResolver,
};
