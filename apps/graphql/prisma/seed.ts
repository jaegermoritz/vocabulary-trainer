import { prisma } from "../context";

export async function seedDatabase() {
  console.log("🌱 Seeding database with default data...\n");

  const link1 = await prisma.link.create({
    data: {
      description: "Link 1",
      url: "http://link1.com",
    },
  });

  const link2 = await prisma.link.create({
    data: {
      description: "Link 2",
      url: "http://link2.com",
    },
  });

  console.log("    ✨ 2 links successfully created!\n");

  const comment1 = await prisma.comment.create({
    data: {
      body: "Comment 1",
      linkId: link1.id,
    },
  });
  const comment2 = await prisma.comment.create({
    data: {
      body: "Comment 2",
      linkId: link2.id,
    },
  });
  console.log("    ✨ 2 comments successfully created!\n");

  console.log("✅ Database seeded successfully\n");
}

if (require.main === module) {
  seedDatabase()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
