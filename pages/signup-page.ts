import { th } from "@faker-js/faker";
import { BasePage } from "./base-page";
import {test, expect} from "@playwright/test"

export class SignupPage extends BasePage{
    myAccount = this.page.locator('//span[text()="My Account"]');
    register = this.page.locator("(//a[text()='Register'])[1]");
    firstNameInput = this.page.locator("//input[@id='input-firstname']");
    lastNameInput = this.page.locator("//input[@id='input-lastname']");
    emailInput = this.page.locator("//input[@id='input-email']");
    telephoneInput = this.page.locator("//input[@id='input-telephone']");
    passwordInput = this.page.locator("//input[@id='input-password']");
    confirmPasswordInput = this.page.locator("//input[@id='input-confirm']");
    subscribeYesButton = this.page.locator("//input[@name='newsletter'][@checked='checked']");
    agreeCheckedMark = this.page.locator("//input[@name='agree']")
    continueButton = this.page.locator("//input[@value='Continue']")
    accountCreated = this.page.locator("//div[@id='content']/h1")
    duplicateEmailmessage = this.page.locator("//div[@class='alert alert-danger alert-dismissible']");

    async navigateToRegisterPage(){
        await this.myAccount.click()
        await this.register.click()
    }

    async registerWithMandatoryFields(firstname:string, lastname:string, unqEmail:string, phone:string, pass:string, confPass:string){
        await this.firstNameInput.fill(firstname)
        await this.lastNameInput.fill(lastname)
        await this.emailInput.fill(unqEmail)
        await this.telephoneInput.fill(phone)
        await this.passwordInput.fill(pass)
        await this.confirmPasswordInput.fill(confPass)
        await this.subscribeYesButton.click()
        await this.agreeCheckedMark.click()
        await this.continueButton.click()
    }

    async verifyAccountCreatedSuccessfully(expectedText){
        await expect(this.accountCreated).toContainText(expectedText);
    }

    async registerWithDuplicateEmail(firstname:string, lastname:string, unqEmail:string, phone:string, pass:string, confPass:string){
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

    async verifyDuplicateEmailmessage(expectedText){
        await expect(this.duplicateEmailmessage).toContainText(expectedText)

    }
}