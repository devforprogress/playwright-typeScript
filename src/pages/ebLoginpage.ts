import { expect, Page } from "@playwright/test";

export default class LoginPage {
    private readonly signInLink = "Sign In";
    private readonly emailIdInput = "Email";
    private readonly passwordInput = "#password";
    constructor(private page: Page) {

    }
    async launchOdo() {
        await this.page.goto("/")
    }

    async logInOdoo() {

        await this.page.getByRole("link", { name: this.signInLink });
        await this.page.getByPlaceholder(this.emailIdInput);
        await this.page.locator(this.passwordInput).fill(process.env.odoPwd!)


    }

}