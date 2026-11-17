import { Page } from '@playwright/test';

// Defining a base page class that other page objects can extend
export class BasePage {
  // Constructor receives a Playwright 'Page' instance and assigns it to a protected property
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

export { expect, Page } from '@playwright/test';
