import { expect, Page } from "@playwright/test";


export default class HomePage {
    constructor(private page: Page) { }
    private readonly signUpLink = "Sign up";
    private readonly loginLink = "Log in";
    private readonly username = "odo107";
    private readonly pwd = "odo107";

    async invodeSignUpForm() {
        //Pre-req : User on Home page
        await this.page.getByRole("link", { name: this.signUpLink }).click();
        await expect(this.page.getByRole("button", { name: this.signUpLink })).toBeVisible()
    }

    async signUp() {
        // Pre-req : Sign up form is launched
        await this.page.getByLabel("Username:").fill(this.username)
        await this.page.getByLabel("Password:").fill(this.pwd)
        const popupPromise = this.page.on('dialog', async (d) => {
            expect(d.message()).toContain("Sign up successful.")
            await d.accept()
        })
        await this.page.getByRole("button", { name: this.signUpLink }).click()
        await expect(() => {
            expect(this.page.getByRole("link", { name: `Welcome ${this.username}` })).toBeVisible()
        }).toPass()



    }
}