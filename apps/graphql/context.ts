import { PrismaClient } from "@prisma/client";
export type GraphQLContext = {
  prisma: PrismaClient;
};

const databaseUrl = process.env.DATABASE_URL || "file:./dev.db";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

export async function createContext(): Promise<GraphQLContext> {
  return { prisma };
}
