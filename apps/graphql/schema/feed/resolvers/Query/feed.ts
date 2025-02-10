import type { QueryResolvers } from "./../../../types.generated";

export const feed: NonNullable<QueryResolvers["feed"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return _ctx.prisma.link.findMany();
};
