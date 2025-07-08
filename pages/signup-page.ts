import { BasePage } from "./base-page";

export class signupPage extends BasePage{
    myAccount = this.page.locator('//span[text()="My Account"]');
    register = this.page.locator("(//a[text()='Register'])[1]");
    firstName = this.page.locator("//input[@id='input-firstname']");
    lastName = this.page.locator("//input[@id='input-lastname']");
    email = this.page.locator("//input[@id='input-email']");
    telephone = this.page.locator("//input[@id='input-telephone']");
    password = this.page.locator("//input[@id='input-password']");
    confirmPassword = this.page.locator("input-confirm");
    subscribeYes = this.page.locator("//input[@name='newsletter'][@checked='checked']");
    agreeCheckedMark = this.page.locator("//input[@name='agree']")
    continueButton = this.page.locator("//input[@value='Continue']")

    async registerWithMandatoryFields(firstname:string, lastname:string, unqEmail:string, phone:string, pass:string, confPass:string){
        
    }
}