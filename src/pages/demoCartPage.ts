import { Page } from "@playwright/test";

export default class CartPage {
    constructor(private page: Page) { }
    private readonly tableBodyId = '#tbodyid'
    private readonly cartLink = '#cartur'

    async getNumberOfProductsInCart() {
        await this.page.locator(this.cartLink).click()
        await this.page.waitForTimeout(3000)
        const tableBody = this.page.locator(this.tableBodyId);
        // Get all table rows within the table body
        const rows = tableBody.locator('tr');
        // Check the number of rows
        const rowCount = await rows.count();
        return rowCount
    }

    async deleteEntryFromCart() {



    }
}