import { expect, test } from './fixtures';

test.beforeEach('Open authenticated home page', async ({ pages }) => {
  await pages.loginPage.gotoHomePage();
});

test.describe('[@Feature-Search] Verify search products scenario', () => {
  test('[@smoke] Verify search valid product', async ({ pages }) => {
    await pages.searchPage.searchForProduct('HP');
    await expect(pages.searchPage.validProduct).toBeVisible();
  });

  test('Search invalid product', async ({ pages }) => {
    await pages.searchPage.searchForProductWithEnter('Dell');
    await expect(pages.searchPage.searchErrorMessage).toContainText(
      'There is no product that matches the search criteria.',
    );
  });

  test('Search without entering any product', async ({ pages }) => {
    await pages.searchPage.searchForProductWithEnter('');
    await expect(pages.searchPage.searchErrorMessage).toBeVisible();
  });
});
