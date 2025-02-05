import type { QueryResolvers } from "./../../../types.generated";
export const hello: NonNullable<QueryResolvers["hello"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return { message: "Hello FOO!", info: "This is a hello message" };
};
