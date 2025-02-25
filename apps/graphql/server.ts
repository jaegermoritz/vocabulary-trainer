import "@dotenvx/dotenvx";
import { createServer } from "http";
import { yoga } from "./yoga";
import { prisma } from "./context";
import { emojify } from "node-emoji";

const server = createServer(yoga);

export async function startServer() {
  console.log(emojify(`:rocket: Starting server...\n`));
  await prisma.$connect();
  console.log(emojify(`:link: Connected to database.\n`));
  const port = process.env.GRAPHQL_SERVER_PORT;
  if (!port) {
    throw new Error("GRAPHQL_SERVER_PORT is not defined in the environment");
  }
  return new Promise<void>((resolve) => {
    server.listen(port, () => {
      console.log(
        emojify(
          `:globe_with_meridians: Server is running on http://localhost:${port}/graphql \n`
        )
      );
      resolve();
    });
  });
}

export async function stopServer() {
  console.log(emojify(`:stop_sign: Stopping server...\n`));
  await prisma.$disconnect();
  console.log(emojify(`:electric_plug: Disconnected from database\n`));
  return new Promise<void>((resolve, reject) => {
    server.close((err) => {
      if (err) {
        console.error(emojify(`:x: Error stopping server\n`), err);
        reject(err);
      } else {
        console.log(
          emojify(`:white_check_mark: Server stopped successfully\n`)
        );
        resolve();
      }
    });
  });
}

if (process.env.NODE_ENV === "development") {
  startServer().catch((error) => {
    console.error(emojify(`:x: Failed to start server:\n`), error);
    process.exit(1);
  });
}
