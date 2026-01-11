import { test, expect } from "@playwright/test";
import { Pages } from "../pages/pages";

test.beforeEach("Login with valid credentials", async ({ page }) => {
  const pages = Pages(page);
  await pages.loginPage.gotoLoginPage();
});

test.describe("[@Feature-Search] Verify search products scenario", () => {
  test("[@smoke] Verify search valid product", async ({ page }) => {
    const pages = Pages(page);
    await pages.searchPage.enterValidProduct("HP");
  });

  test("Search invalid product", async ({ page }) => {
    const pages = Pages(page);
    await pages.searchPage.enterInvalidProduct("Dell");
    await expect(pages.searchPage.searchErrorMessage).toContainText(
      "There is no product that matches the search criteria."
    );
  });

  test("Search without entering any product", async ({ page }) => {
    const pages = Pages(page);
    await pages.searchPage.enterInvalidProduct("");
    await expect(pages.searchPage.searchErrorMessage).toBeVisible();
  });
});

test.afterEach("Close Browser", async ({ page }) => {
  await page.close();
});
