import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  fullName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
  isAdmin: ({ isAdmin }) => isAdmin === "YES",
  email: async (_parent, _arg, _ctx) => {
    return _parent.email;
  },
  firstName: async (_parent, _arg, _ctx) => {
    return _parent.firstName;
  },
  lastName: async (_parent, _arg, _ctx) => {
    return _parent.lastName;
  }
};
