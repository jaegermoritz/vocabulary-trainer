# Getting Started

## Tests

This project uses Jest for unit and integration testing, and Playwright for end-to-end (E2E) testing. Below is a brief overview of the testing setup and how to run the tests.

### Test Locations

- `tests/unit`: Unit and Integration Tests are located here.
- `tests/e2e`: End to End tests are located here.

### Running Tests

To run the tests, ensure that the environment variables are correctly set and then execute the test scripts:

```bash
# Run unit tests
npm run test:unit

# Run e2e tests
npm run test:e2e

# Run all tests
npm run test
```

### Configuration

- **Jest Configuration**: Jest configuration files (`jest.config.ts` and `jest.setup.ts`) are located in the root directory of the app .
- **Playwright Configuration**: Playwright configuration is located in the `playwright.config.ts` file in the web directory.

### Official Documentation

- **Jest**: For more information on how to [configure](https://jestjs.io/docs/configuration) and [use](https://nextjs.org/docs/app/building-your-application/testing/jest) Jest with NextJS, refer to the documentation.
- **Playwright**: For more information on how to [configure](https://playwright.dev/docs/test-configuration) and [use](https://playwright.dev/docs/writing-tests) Playwright, refer to the Playwright documentation.

## Authentication Providers

This application uses secure authentication providers for user authentication. The primary provider used is GitHub. However, for testing purposes, a password credentials provider is also included. This is only enabled in development and test environments to facilitate automated testing, such as end-to-end (E2E) tests with Playwright.

### Secure Providers

The application uses the following secure provider for authentication:

- GitHub: Users can authenticate using their GitHub accounts.
- Password Credentials Provider (For Testing Only)

:warning: _In development and test environments, the application includes a password credentials provider. This is intended solely for automated testing and should not be used in production._

### Configuration

The password credentials provider is configured to be used only when the NODE_ENV environment variable is set to development or test. The password for the test user is specified in the environment variable TEST_PASSWORD.

### Example Configuration

`.env`:

```
NODE_ENV=development
TEST_PASSWORD=your_test_password
```

## Feature Flags Integration

This project integrates **[flags-sdk](https://github.com/open-feature/flags-sdk)** for feature flag management, leveraging **[OpenFeature](https://openfeature.dev/docs)** as the underlying framework. Currently, the **[EnvVarProvider](https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/env-var)** is used for local development and testing, but the plan is to migrate to **[Unleash](https://docs.getunleash.io/)** as the feature flag service in the future.

#### Overview

- **`flags-sdk`**: Provides a simple and developer-friendly API for managing feature flags in Next.js.
- **`openfeature`**: A standardized framework for feature flag evaluation.
- **`env-var-provider`**: A provider for managing feature flags via environment variables (used for local development and testing).
- **Future Plan**: Replace `env-var-provider` with **Unleash** for production-ready feature flag management.

---

### Current Configuration

The feature flag integration is configured in the `flags.ts` file. Below is a summary of the setup:

1. **User Identification**:

   - The `identify` function deduplicates and identifies users based on cookies and headers.
   - The `EvaluationContext` is used to pass user-specific data (e.g., `targetingKey`) for flag evaluation.

   ```typescript
   const identify = dedupe(async ({ headers, cookies }) => {
     const context: EvaluationContext = {
       targetingKey: '5', // Replace with user-specific logic
     }
     return context
   })
   ```

2. **Feature Flag Adapter**:

   - The `openFeatureAdapter` is created using the `EnvVarProvider` for local development.
   - The `EnvVarProvider` reads feature flag values from environment variables.

   ```typescript
   const openFeatureAdapter = createOpenFeatureAdapter(async () => {
     const provider = new EnvVarProvider()
     await OpenFeature.setProviderAndWait(provider)
     return OpenFeature.getClient()
   })
   ```

3. **Example Flag**:

   - A sample feature flag (`exampleFlag`) is defined using `flags-sdk`.
   - The flag has a default value of `false` and uses the `openFeatureAdapter` for evaluation.

   ```typescript
   export const exampleFlag = flag<boolean, EvaluationContext>({
     key: 'EXAMPLE_FLAG',
     identify,
     defaultValue: false,
     adapter: openFeatureAdapter.booleanValue(),
   })
   ```

---

### Adding a New Feature Flag

Follow these steps to add and use a new feature flag:

1. **Define the Flag**:

   - Add a new flag in the flags.ts file.
   - Use the `flag` function from `flags-sdk` to define the flag.

   ```typescript
   export const newFeatureFlag = flag<boolean, EvaluationContext>({
     key: 'NEW_FEATURE_FLAG',
     identify,
     defaultValue: true, // Set the default value
     adapter: openFeatureAdapter.booleanValue(),
   })
   ```

2. **Set the Flag Value**:

   - For local development, add the flag to your `.env` file using the `EnvVarProvider`.

   **`.env`**:

   ```env
   NEW_FEATURE_FLAG=true
   ```

3. **Use the Flag in Your Code**:

   - Import the flag and use it in your components or logic.

   ```typescript
   import { newFeatureFlag } from './flags'

   const isEnabled = await newFeatureFlag.getValue()
   if (isEnabled) {
     console.log('New feature is enabled!')
   }
   ```

---

### Future Migration to Unleash

The current setup uses the `EnvVarProvider` for local development. In the future, the plan is to migrate to **Unleash** for production-ready feature flag management. Once Unleash is integrated:

1. Replace the `EnvVarProvider` with the Unleash provider in the `openFeatureAdapter` setup.
2. Update the `EvaluationContext` to include user-specific data required by Unleash for flag targeting.
