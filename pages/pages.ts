import { Page } from '@playwright/test';
import { LoginPage } from './login-page';
import { SearchPage } from './search-page';
import { SignupPage } from './signup-page';


export const Pages = (page: Page) => {
    return {
        loginPage: new LoginPage(page),
        searchPage: new SearchPage(page),
        signUpPage: new SignupPage(page)

    };
};
