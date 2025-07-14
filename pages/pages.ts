import { Page } from '@playwright/test';
import { LoginPage } from './login-page';
import { SearchPage } from './search-page';
import { SignupPage } from './signup-page';


// Factory function that initializes and returns instances of all page objects
export const Pages = (page: Page) => {
    return {
        loginPage: new LoginPage(page),
        searchPage: new SearchPage(page),
        signUpPage: new SignupPage(page)

    };
};
