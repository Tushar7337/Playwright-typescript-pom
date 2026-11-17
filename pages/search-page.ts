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

  // Method to search for a valid product
  async enterValidProduct(productName: string) {
    await this.searchBar.click();
    await this.searchBar.fill(productName);
    await this.searchIcon.click();
  }

  // Method to search for an invalid product using the Enter key
  async enterInvalidProduct(productName: string) {
    await this.searchBar.fill(productName);
    // To press ENTER instead of clicking the Search button
    await this.searchBar.press('Enter');
  }
}
