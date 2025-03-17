## Getting Started

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
