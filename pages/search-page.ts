import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class SearchPage extends BasePage {
  readonly searchBar: Locator;
  readonly searchIcon: Locator;
  readonly validProduct: Locator;
  readonly searchErrorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.searchBar = page.locator("//input[@name='search']");
    this.searchIcon = page.locator("//div[@id='search']//button");
    this.validProduct = page.getByText('HP LP3065', { exact: true });
    this.searchErrorMessage = page.locator(
      "//input[@id='button-search']/following-sibling::p",
    );
  }

  async searchForProduct(productName: string) {
    await this.searchBar.fill(productName);
    await this.searchIcon.click();
  }

  async searchForProductWithEnter(productName: string) {
    await this.searchBar.fill(productName);
    await this.searchBar.press('Enter');
  }
}
