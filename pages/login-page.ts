import { BasePage } from './base-page';

export class LoginPage extends BasePage {
    myAccount = this.page.locator('//span[text()="My Account"]');
    loginOption = this.page.locator('//a[text()="Login"]');
    emailInput = this.page.locator('//input[@id="input-email"]');
    passwordInput = this.page.locator('//input[@id="input-password"]');
    loginButton = this.page.locator("//input[@value='Login']")
    loginError = this.page.locator("//div[text()='Warning: No match for E-Mail Address and/or Password.']")

    async gotoLoginPage() {
        await this.page.goto('https://tutorialsninja.com/demo/');
        await this.page.waitForLoadState("networkidle");
        
    }

    async loginWithCredentials(userName: string, password: string) {
        await this.myAccount.click()
        await this.loginOption.click()
        await this.emailInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    
    }

    async loginWithInvalidCredentials(userName: string, password: string){
        await this.myAccount.click()
        await this.loginOption.click()
        await this.emailInput.fill(userName);
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}
