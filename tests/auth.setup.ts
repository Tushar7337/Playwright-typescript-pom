import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { expect, test as setup } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import * as data from "../utilities/data/this.json";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.loginWithCredentials(
    data.validData.userName,
    data.validData.password,
  );
  await expect(page).toHaveURL(
    "https://tutorialsninja.com/demo/index.php?route=account/account",
  );

  await mkdir(dirname(authFile), { recursive: true });
  await page.context().storageState({ path: authFile });
});
