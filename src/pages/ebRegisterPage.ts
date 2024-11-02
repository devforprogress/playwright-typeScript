import { Page, expect } from "@playwright/test";

import testData from "../data/data.json"
import { getDataByAppName } from "../utils/getDataFromJsonUtil";
import { getAppData } from "../utils/getDataFromJsonUtil";
// const ebData = testData[1]


export default class RegisterPage {
    // Ebay Locators
    private readonly personalBtn = "Personal";
    private readonly businessBtn = "Business";
    private readonly firstNameInput = "#firstname"
    private readonly lastNameInput = "#lastname"
    private readonly emainInput = "#Email"
    private readonly passwordInput = "#password"
    private readonly createPersonalAccountBtn = "Create personal account"
    private readonly tryFreeBtnLink = "Try it free"
    private readonly appChoosePageHeading = "Choose your Apps"

    // Oddo Locators
    private readonly odoMyAccountLoginConfirm = "My account"
    constructor(private page: Page) { }



    // async registerPersonalUser() {

    //     await this.page.getByRole("button", { name: this.personalBtn });
    //     await this.page.locator(this.firstNameInput).fill(ebData.firstname!)
    //     await this.page.locator(this.lastNameInput).fill(ebData.lastname!)
    //     await this.page.locator(this.emainInput).fill(ebData.email!)
    //     await this.page.locator(this.passwordInput).fill(ebData.password!)
    //     await this.page.getByRole("button", { name: this.createPersonalAccountBtn }).click()

    // }

    async registerOdoo() {

        // await expect(this.page.getByRole("button", { name: "Sign up" })).toBeVisible()
        await this.page.locator("#login").fill(process.env.odoEmail!)
        await this.page.locator("#name").fill(process.env.odoUser!)
        await this.page.locator("#password").fill(process.env.odoPwd!)
        await this.page.getByRole("button", { name: "Sign up" }).click()
        await expect(this.page.getByRole("heading", { name: "My account" })).toBeVisible()


    }

    async gettingFirstApp() {
        await this.page.getByRole("link", { name: this.tryFreeBtnLink }).click()
        await expect(this.page.getByRole("heading", { name: this.appChoosePageHeading })).toBeVisible();
        await this.page.getByRole("img", { name: "Odoo Knowledge icon" }).click()
        await expect(this.page.getByRole("button", { name: "Odoo Knowledge icon" })).toBeVisible()


    }
}