import { config } from "@dotenvx/dotenvx";
import { emojify } from "node-emoji";
import { resolve } from "path";

console.log("Loading environment variables...");
console.log(
  emojify(`:seedling: Current environment is: ${process.env.NODE_ENV}`)
);

const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;
config({ path: resolve(__dirname, envFile) });

console.log(emojify(`:package: Loaded environment variables from ${envFile}`));
