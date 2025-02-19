import { startServer } from "./server";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { emojify } from "node-emoji";
import { seedDatabase } from "./prisma/seed";

const testDbPath = path.resolve(__dirname, "test.db");

module.exports = async () => {
  try {
    console.log("\n");
    // Ensure test.db is available
    if (!fs.existsSync(testDbPath)) {
      console.log(
        emojify(`:package: Creating test database at ${testDbPath}\n`)
      );
      fs.writeFileSync(testDbPath, "");
    }

    // Sync the database with the Prisma schema
    console.log(
      emojify(`:link: Syncing test database with Prisma schema...\n`)
    );
    execSync(
      "npx prisma migrate dev --name init --schema=./prisma/schema.prisma",
      {
        stdio: "inherit",
      }
    );

    // Seed the database with default data
    try {
      await seedDatabase();
    } catch (seedError) {
      console.error(emojify(`:x: Error seeding database:\n`), seedError);
      process.exit(1);
    }

    // Start the server
    await startServer();
  } catch (error) {
    console.error(emojify(`:x: Error during Jest global setup:\n`), error);
    process.exit(1);
  }
};
