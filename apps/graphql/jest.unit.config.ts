import { createJsWithTsPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createJsWithTsPreset({
  //...options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  testMatch: ["**/__tests__/**/*.unit.spec.ts"],
};

export default jestConfig;
