import { BasePage } from "./base-page";

export class SearchPage extends BasePage{
    searchBar = this.page.locator("//input[@name='search']")
    searchIcon = this.page.locator("//div[@id='search']//button")
    verifyValidProduct = this.page.locator("HP LP3065")
    searchErrorMessage = this.page.locator("//input[@id='button-search']/following-sibling::p")

    async enterValidProduct(productName: string){
        await this.searchBar.click()
        await this.searchBar.fill(productName)
        await this.searchIcon.click()
        await (this.page).isVisible;
    }

    async enterInvalidProduct(productName: string){
        await this.searchBar.fill(productName)
        // To press ENTER instead of clicking the Search button
        await this.searchBar.press('Enter')
    }

}

