import { stopServer } from "./server";
import fs from "fs";
import path from "path";
import { emojify } from "node-emoji";

const testDbPath = path.resolve(__dirname, "test.db");

module.exports = async () => {
  try {
    // Stop the server
    await stopServer();

    // Delete the test database
    if (fs.existsSync(testDbPath)) {
      console.log(
        emojify(`:wastebasket: Deleting test database at ${testDbPath}`)
      );
      fs.unlinkSync(testDbPath);
    }
  } catch (error) {
    console.error(emojify(`):x: Error during Jest global teardown:`), error);
    process.exit(1);
  }
};
