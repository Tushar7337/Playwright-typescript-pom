import { test, expect } from "@playwright/test";
import { Pages } from "../pages/pages";
import * as data from "../utilities/data/this.json";

test.describe("[@Feature-Login] Verify Login test scenarios", () => {
  test("[@P1 @Smoke] Verify user login with valid credentials and logout successfully", async ({ page }) => {
    const pages = Pages(page);
    // Login with valid credentials
    await pages.loginPage.gotoLoginPage();
    await pages.loginPage.loginWithCredentials(
      data.validData.userName,
      data.validData.password
    );
    // console.log(data.validData.password)
    await expect(page).toHaveURL(
      "https://tutorialsninja.com/demo/index.php?route=account/account"
    );
  });

  test("[@P1 @Regression] Verify user is unable to login with invalid credentials", async ({
    page,
  }) => {
    // Login with invalid credentials
    const pages = Pages(page);
    await pages.loginPage.gotoLoginPage();
    await pages.loginPage.loginWithInvalidCredentials(
      data.invalidData.userName,
      data.invalidData.password
    );
    await expect(pages.loginPage.loginError).toContainText(data.errorMessage);
  });
});
