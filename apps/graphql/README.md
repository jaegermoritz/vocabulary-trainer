## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have installed [pnpm](https://pnpm.io/installation). You can install it by running `npm install -g pnpm`.
- You have installed [turbo](https://turbo.sh/). You can install it by running `npm install -g turbo-cli`.
- You have a `Unix/Linux` machine. This project uses `cross-env`, which might not work properly on Windows.
- You have read [GraphQL Code Generator](https://graphql-code-generator.com/) documentation to understand how code generation works in this project.

## Setup

Follow these steps to get your development environment set up:

1. Clone the monorepo to your local machine using `git clone https://github.com/jaegermoritz/nextjs-starter.git`.

2. Navigate to the monorepo directory with `cd nextjs-starter`.

3. Install `pnpm` globally if you haven't done so already, by running `npm install -g pnpm`.

4. Install the dependencies for the entire monorepo with `pnpm install`.

5. Navigate to the project directory within the monorepo with `cd apps/graphql`.

6. Start the development server for this project with `pnpm run dev`.

Now, you should be able to see the application running at `http://localhost:4000` (or whatever port you've configured). You can make changes in your code and the server will automatically reload with the new changes.

## Scripts

- `codegen`: This script runs the `graphql-codegen` command. [GraphQL Code Generator](https://graphql-code-generator.com/) is a tool that generates code out of your GraphQL schema. Whether you are developing a frontend or backend, you can utilize this tool to generate TypeScript typings, resolvers, hooks and more.

- `codegen:watch`: This script is similar to `codegen`, but it runs the `graphql-codegen` command in watch mode. This means that it will automatically re-run whenever it detects changes in your GraphQL schema.

- `dev`: This script sets the `NODE_ENV` environment variable to `development` and runs two other scripts concurrently: `codegen:watch` and `ts-node-dev`. The `ts-node-dev` command is a tool that restarts target node process when any of required files changes. The `--exit-child` flag ensures that the child process is properly killed when `ts-node-dev` restarts. The `--respawn` flag ensures that `ts-node-dev` will restart the `server.ts` script whenever it crashes.

- `prestart`: This script is a pre-hook for the `start` script. It will run the `codegen` script before the `start` script is run.

- `start`: This script runs the `server.ts` file with `ts-node`. `ts-node` is a tool that allows you to run TypeScript code directly, without having to compile it to JavaScript first.

## Issues

```text
ERR TypeError: Cannot read properties of undefined (reading 'body') at getLocation ...
```

When this error appears, check for unused types i.e. in your schema.graphql files
