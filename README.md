# Playwright Page Object Model with TypeScript

This repository demonstrates the implementation of the Page Object Model (POM) design pattern with Playwright. This project is designed to provide a robust and maintainable testing framework for web applications using Playwright and TypeScript, with a focus on the Page Object Model pattern. The site under test is [QA Fox](https://tutorialsninja.com/demo/index.php?route=common/home) , a demo eCommerce store.

## Built With

- [Playwright](https://playwright.dev)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

Install Node.js 20.19 or later, then install the project dependencies:

```bash
npm install
```

The `postinstall` script automatically downloads Playwright's Chromium browser, so it is ready when installation completes. For a clean install in CI, use `npm ci`; it runs the same browser installation. ESLint, Prettier, and TypeScript checks are installed with the development dependencies.

## Execution

- Run all the test cases from the "./tests" folder
  ```bash
  npm test
  ```
- Run test cases for a specific file
  ```bash
  npx playwright test tests/{file-name.spec.ts}
  ```
- Run test cases in headed mode
  ```bash
  npx playwright test --headed
  ```
- Run test cases using trace
  ```bash
  npx playwright test --trace on
  npx playwright show-report
  ```
- Run test cases with a specific browser
  ```bash
  npx playwright test --project chromium
  ```
- Check lint, formatting, and TypeScript types
  ```bash
  npm run check
  ```
- Fix lint and formatting issues
  ```bash
  npm run lint:fix
  npm run format
  ```
