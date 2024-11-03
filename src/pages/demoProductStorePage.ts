import { expect, Page, test } from "@playwright/test";



export default class ProductPage {
    constructor(private page: Page) { }
    private readonly phonesPageLink = 'Phones'
    private readonly laptopsPageLink = 'Laptops'
    private readonly monitorsPageLink = 'Monitors'
    private readonly phoneNokiaLink = 'Nokia lumia 1520'
    private readonly phoneNokiaHeading = 'Nokia lumia 1520'
    private readonly addToCartLink = 'Add to cart'
    // private readonly addtoCartLocator = '//a[@class="btn btn-success btn-lg"]'
    // typeOfProduct can be either phone, laptop or monitor
    async addToCart(typeOfProduct: string) {
        if (typeOfProduct === 'phone') {
            // Test Step
            await test.step("Go to phones page", async () => {
                await this.page.getByRole("link", { name: this.phonesPageLink }).click()
                await expect(this.page.getByRole("link", { name: this.phoneNokiaLink })).toBeVisible()
            })
            // Test Step
            await test.step("Add to Cart", async () => {
                await this.page.getByRole("link", { name: this.phoneNokiaLink }).click()
                await expect(this.page.getByRole("heading", { name: this.phoneNokiaHeading })).toBeVisible()
                const popupPromise = this.page.on('dialog', async (d) => {
                    expect(d.message()).toContain("Product added.")
                    await d.accept()
                })
                await this.page.getByRole("link", { name: this.addToCartLink }).click()

                console.log("phoneAdded");
            })



        }

    }








}