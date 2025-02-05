import { createServer } from "http";
import { graphqlConfig } from "@repo/shared-config";
import { yoga } from "./yoga";
const server = createServer(yoga);
server.listen(graphqlConfig.port, () => {
  console.log(`Server is running on ${graphqlConfig.url}`);
});
