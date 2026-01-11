import { th } from "@faker-js/faker";
import { BasePage } from "./base-page";
import { test, expect, Locator, Page } from "@playwright/test";

export class SignupPage extends BasePage {
  readonly myAccount: Locator;
  readonly register: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly subscribeYesButton: Locator;
  readonly agreeCheckedMark: Locator;
  readonly continueButton: Locator;
  readonly accountCreated: Locator;
  readonly duplicateEmailmessage: Locator;

  constructor(paage: Page) {
    super(paage);
    this.myAccount = this.page.locator('//span[text()="My Account"]');
    this.register = this.page.locator("(//a[text()='Register'])[1]");
    this.firstNameInput = this.page.locator("//input[@id='input-firstname']");
    this.lastNameInput = this.page.locator("//input[@id='input-lastname']");
    this.emailInput = this.page.locator("//input[@id='input-email']");
    this.telephoneInput = this.page.locator("//input[@id='input-telephone']");
    this.passwordInput = this.page.locator("//input[@id='input-password']");
    this.confirmPasswordInput = this.page.locator(
      "//input[@id='input-confirm']"
    );
    this.subscribeYesButton = this.page.locator(
      "//input[@name='newsletter'][@checked='checked']"
    );
    this.agreeCheckedMark = this.page.locator("//input[@name='agree']");
    this.continueButton = this.page.locator("//input[@value='Continue']");
    this.accountCreated = this.page.locator("//div[@id='content']/h1");
    this.duplicateEmailmessage = this.page.locator(
      "//div[@class='alert alert-danger alert-dismissible']"
    );
  }

  async navigateToRegisterPage() {
    await this.myAccount.click();
    await this.register.click();
  }

  async registerWithMandatoryFields(
    firstname: string,
    lastname: string,
    unqEmail: string,
    phone: string,
    pass: string,
    confPass: string
  ) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.emailInput.fill(unqEmail);
    await this.telephoneInput.fill(phone);
    await this.passwordInput.fill(pass);
    await this.confirmPasswordInput.fill(confPass);
    await this.subscribeYesButton.click();
    await this.agreeCheckedMark.click();
    await this.continueButton.click();
  }

  async verifyAccountCreatedSuccessfully(expectedText) {
    await expect(this.accountCreated).toContainText(expectedText);
  }

  async registerWithDuplicateEmail(
    firstname: string,
    lastname: string,
    unqEmail: string,
    phone: string,
    pass: string,
    confPass: string
  ) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.emailInput.fill(unqEmail);
    await this.telephoneInput.fill(phone);
    await this.passwordInput.fill(pass);
    await this.confirmPasswordInput.fill(confPass);
    await this.subscribeYesButton.click();
    await this.agreeCheckedMark.click();
    await this.continueButton.click();
  }

  async verifyDuplicateEmailmessage(expectedText) {
    await expect(this.duplicateEmailmessage).toContainText(expectedText);
  }
}
