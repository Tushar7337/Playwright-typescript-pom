# Playwright Page Object Model with TypeScript

This repository demonstrates the implementation of the Page Object Model (POM) design pattern with Playwright. This project is designed to provide a robust and maintainable testing framework for web applications using Playwright and TypeScript, with a focus on the Page Object Model pattern. The site under test is [QA Fox](https://tutorialsninja.com/demo/index.php?route=common/home) , a demo eCommerce store.

## Installation
Before following the steps given below, please ensure that npm and node are installed on your machine.
- **Step1:** Install Playwright's latest version `npm init playwright@latest`
- **Step2:** Install Playwright supported browsers `npx playwright install`

## Execution
- Run all the test cases from the "./tests" folder
  ```bash
  npx playwright test
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
  npx playwright test --project {browser-name}
  ```
