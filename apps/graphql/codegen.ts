import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  documents: "__tests__/**/!(*.d).{ts,tsx}",
  generates: {
    "./client/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    schema: defineConfig(),
  },
};
export default config;
