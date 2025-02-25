import { prisma } from "../../context";

export const resetDB = async () => {
  await prisma.$transaction([
    prisma.link.deleteMany(),
    prisma.comment.deleteMany(),
  ]);
};
