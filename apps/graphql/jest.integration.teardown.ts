import { stopServer } from "./server";
import fs from "fs";
import path from "path";
import { emojify } from "node-emoji";

const testDbPath = path.resolve(__dirname, "prisma", "test.db");

module.exports = async () => {
  try {
    // Stop the server
    await stopServer();

    // Delete the test database
    if (fs.existsSync(testDbPath)) {
      console.log(
        emojify(`:wastebasket: Deleting test database at ${testDbPath}`)
      );
      fs.unlink(testDbPath, (unlinkError) => {
        if (unlinkError) {
          console.error(
            emojify(`:x: Failed to delete test database:`),
            unlinkError
          );
        } else {
          console.log(
            emojify(`:white_check_mark: Test database deleted successfully`)
          );
        }
      });
    } else {
      console.log(
        emojify(`:warning: Test database not found at ${testDbPath}`)
      );
    }
  } catch (error) {
    console.error(emojify(`):x: Error during Jest global teardown:`), error);
    process.exit(1);
  }
};
