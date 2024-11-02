import { expect, Page } from "@playwright/test";


export default class HomePage {

    private readonly registerLink = "register"
    private readonly signInLink = "Sign in"
    private readonly dontHaveAccountLink = "Don't have an account?"

    constructor(private page: Page) { }

    async navigateToOdo() {
        await this.page.goto("https://www.odoo.com/")
    }

    async navigateToRegister() {
        await this.page.getByRole("link", { name: this.signInLink }).click()
        await this.page.getByRole("link", { name: this.dontHaveAccountLink }).click()
        await expect(this.page.getByRole("button", { name: "Sign up" })).toBeVisible()
    }

}
