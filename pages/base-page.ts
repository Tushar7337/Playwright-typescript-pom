import { Page } from "@playwright/test";

// Defining a base page class that other page objects can extend
export class BasePage {
  // Constructor receives a Playwright 'Page' instance and assigns it to a protected property
  constructor(protected page: Page) {
    this.page = page; // Storing the page instance for use in derived classes
  }
}

export { expect, Page } from "@playwright/test";
