import { expect, Page } from "@playwright/test";


export default class loginPage {
    constructor(private page: Page) { }
    private readonly loginLink = "Log in"
    private readonly userName = "#loginusername"
    private readonly password = "#loginpassword"
    private readonly user = "odo105"

    private readonly loginBtn = "Log in"

    //Pre-Req home page is loaded
    async login() {
        await this.page.getByRole("link", { name: this.loginLink }).click()
        await this.page.locator(this.userName).fill("odo105")
        await this.page.locator(this.password).fill("odo105")
        await this.page.getByRole("button", { name: this.loginBtn }).click()
        await expect(async () => {
            await expect(this.page.getByRole("link", { name: `Welcome ${this.user}` })).toBeVisible()
        }).toPass({ timeout: 10000 })


    }
}