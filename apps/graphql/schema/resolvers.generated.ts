/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { hello as Query_hello } from './hello/resolvers/Query/hello';
import    { user as Query_user } from './user/resolvers/Query/user';
import    { Hello } from './hello/resolvers/Hello';
import    { User } from './user/resolvers/User';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { hello: Query_hello,user: Query_user },
      
      
      Hello: Hello,
User: User,
DateTime: DateTimeResolver
    }