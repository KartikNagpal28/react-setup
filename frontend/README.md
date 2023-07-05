# Tunnel Trades

## What is this folder?

This folder contains the Frontend code for Tunnel Trades.

# Development

Use of VScode is encouraged.

Tech:

- Framework: [React](https://react.dev/)
- Programming Lang: [TypeScript](https://www.typescriptlang.org/)

# Requirements

- Runtime Environment: [Node.js](https://nodejs.org/en/) (_≥v16.0.0)_
- Package Manager: [yarn](https://yarnpkg.com/)
- Version Control: [git](https://git-scm.com/)

# Project Setup

This section describes the setup of the project, please copy and paste the following commands into your terminal

- Install the dependencies
  ```markdown
  yarn install
  ```
- Compile and Serve the project
  ```markdown
  yarn start
  ```
- Access the Portal at [localhost:4100](http://localhost:4100)

# Building For Production

Run the following command to compile and bundle the application, optimizing it for production by minimizing file sizes, enabling code optimizations, and removing development-specific features.

```markdown
yarn build
```

For analyzing the final build size, run the following command

```markdown
yarn build --stats
```

And then use the [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to open _build/bundle-stats.json_.

# Linting

To run ESLint and automatically fix fixable issues in JavaScript and TypeScript files, use the following command.

```markdown
yarn lint
```

This command will perform linting on the specified files and attempt to automatically fix any fixable issues. It ensures that your code follows consistent style guidelines and best practices.

## CSS Linting

To perform linting on CSS-like files (JavaScript, TypeScript, and TypeScript React files) using Stylelint, execute the following command

```markdown
yarn lint:styles
```

This command runs Stylelint on the specified CSS-like files and checks for any styling errors or inconsistencies. Stylelint helps enforce consistent and error-free CSS styling throughout your project.

---

To read more about this Project, Go through the detailed [documentation](./src/docs)
