import type { Link, MutationResolvers } from "./../../../types.generated";
export const postLink: NonNullable<MutationResolvers["postLink"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { description, url } = _arg;
  const newLink = await _ctx.prisma.link.create({
    data: {
      url,
      description,
    },
  });
  return newLink;
};
