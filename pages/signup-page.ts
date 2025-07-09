import { BasePage } from "./base-page";

export class signupPage extends BasePage{
    myAccount = this.page.locator('//span[text()="My Account"]');
    register = this.page.locator("(//a[text()='Register'])[1]");
    firstNameInput = this.page.locator("//input[@id='input-firstname']");
    lastNameInput = this.page.locator("//input[@id='input-lastname']");
    emailInput = this.page.locator("//input[@id='input-email']");
    telephoneInput = this.page.locator("//input[@id='input-telephone']");
    passwordInput = this.page.locator("//input[@id='input-password']");
    confirmPasswordInput = this.page.locator("input-confirm");
    subscribeYesButton = this.page.locator("//input[@name='newsletter'][@checked='checked']");
    agreeCheckedMark = this.page.locator("//input[@name='agree']")
    continueButton = this.page.locator("//input[@value='Continue']")

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
}