import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
  readonly myAccount: Locator;
  readonly loginOption: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginError: Locator;

  constructor(page: Page) {
    super(page);
    this.myAccount = page.locator('//span[text()="My Account"]');
    this.loginOption = this.page.locator('//a[text()="Login"]');
    this.emailInput = this.page.locator('//input[@id="input-email"]');
    this.passwordInput = this.page.locator('//input[@id="input-password"]');
    this.loginButton = this.page.locator("//input[@value='Login']");
    this.loginError = this.page.locator(
      "//div[text()='Warning: No match for E-Mail Address and/or Password.']"
    );
  }

  async gotoLoginPage() {
    await this.page.goto("https://tutorialsninja.com/demo/");
    await this.page.waitForLoadState("networkidle");
  }

  async loginWithCredentials(userName: string, password: string) {
    await this.myAccount.click();
    await this.loginOption.click();
    await this.emailInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithInvalidCredentials(userName: string, password: string) {
    await this.myAccount.click();
    await this.loginOption.click();
    await this.emailInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
