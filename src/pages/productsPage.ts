import { Page, expect } from "@playwright/test";

export default class ProductsPage {

    private readonly productsPageIdentifier = 'Products'


    constructor(private page: Page) { }

    async verifyProductsPageLoaded() {

        await expect(this.page.getByText(this.productsPageIdentifier)).toBeVisible()
    }

}