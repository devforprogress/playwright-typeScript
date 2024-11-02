import { expect, Page } from "@playwright/test";


export default class homePage {
    constructor(private page: Page) { }
    private readonly signUpLink = "Sign up";
    private readonly loginLink = "Log in";

    async invodeSignUpForm() {
        //Pre-req : User on Home page
        await this.page.getByRole("link", { name: this.signUpLink }).click();
        await expect(this.page.getByRole("button", { name: this.signUpLink })).toBeVisible()
    }

    async signUp() {
        // Pre-req : Sign up form is launched
        await this.page.getByLabel("Username:").fill("odo106")
        await this.page.getByLabel("Password:").fill("odo106")
        const popupPromise = this.page.on('dialog', async (d) => {
            expect(d.message()).toContain("Sign up successful.")
            await d.accept()
        })
        await this.page.getByRole("button", { name: this.signUpLink }).click()
        await this.page.waitForTimeout(3000)
        // await expect(this.page.getByRole("link", { name: "Welcome odo105" })).toBeVisible()


    }
}