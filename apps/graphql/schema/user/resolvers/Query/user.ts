import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  _arg,
  _ctx
) => {
  return {
    id: "005",
    firstName: "Bart",
    lastName: "Simpson",
    fullName: "Bart Simpson",
    isAdmin: "YES",
    email: "bart@simpson.com",
  };
};
