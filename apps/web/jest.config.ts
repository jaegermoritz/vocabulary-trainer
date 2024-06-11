/**
 * Jest configuration file for the project.
 *
 * For more information on configuring Jest, please refer to the official documentation:
 * {@link https://jestjs.io/docs/configuration}
 *
 * * For more information on how next confiures Jest review this file:
 * {@link https://github.com/vercel/next.js/blob/v14.2.3/packages/next/src/build/jest/jest.ts}
 */
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  collectCoverage: true,
  coverageProvider: 'v8',

  // we must map the baseUrl / path according to the ts-config, especially
  // for the alias-imports
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    uuid: require.resolve('uuid'),
  },
  modulePaths: [compilerOptions.baseUrl],
  roots: ['<rootDir>'],
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
