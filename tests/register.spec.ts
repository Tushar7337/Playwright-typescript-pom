import {test, expect} from "@playwright/test"
import {Pages} from "../pages/pages"
import * as data from "../tests/data/this.json"
import { generateRandomData } from "./data/generateRandomData"

test.beforeEach('Navigate to home screen', async ({page})=>{
    const pages = Pages(page)
    await pages.loginPage.gotoLoginPage();
})

test.describe('[@Feature-SignUp]', () =>{
    test('[@P1 @Smoke] Verify user sign up with all mandatory fields', async ({page}) =>{
        const pages = Pages(page);
        const userData = generateRandomData();

        await pages.signUpPage.navigateToRegisterPage();
        await pages.signUpPage.registerWithMandatoryFields(userData.firstname, userData.lastname, userData.unqEmail, userData.phone, userData.pass, userData.confPass)
        await pages.signUpPage.verifyAccountCreatedSuccessfully(data.SignUp.accountCreated)
    })

test.afterEach('Close Browser', async ({page}) => {
    await page.close();
    })

})
