import { Page } from '@playwright/test';
import { LoginPage } from './login-page';
import { SearchPage } from './search-page';


export const Pages = (page: Page) => {
    return {
        loginPage: new LoginPage(page),
        searchPage: new SearchPage(page)

    };
};
