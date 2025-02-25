import { createJsWithTsPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createJsWithTsPreset({
  //...options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  testMatch: ["**/__tests__/**/*.integration.spec.ts"],
  globalSetup: "./jest.integration.setup.ts",
  globalTeardown: "./jest.integration.teardown.ts",
};

export default jestConfig;
