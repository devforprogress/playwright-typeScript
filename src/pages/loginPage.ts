import { expect, Page } from "@playwright/test";
import ProductsPage from "./productsPage";
import { decrypt } from "../utils/cryptoUtil";
import logger from "../utils/loggerUtil";
import jdata from "../data/data.json"
import exp from "constants";

export default class LoginPage {

    private readonly username = "Username"
    private readonly password = "Password"
    private readonly loginBtn = "#login-button"

    constructor(private page: Page) { }

    async login() {
        const usrName = process.env.sauceUsername!

        await this.page.getByPlaceholder(this.username).fill(decrypt(usrName))
        await this.page.getByPlaceholder(this.password).fill(process.env.saucePassword!)
        await this.page.locator(this.loginBtn).click().catch((error) => { logger.error(error) })
        logger.info("Clicked LogIn Button")
        const myProductsPage = new ProductsPage(this.page);
        return myProductsPage;


    }

    async loginFromJson() {
        const usrName = jdata[0].username
        logger.info("The Locked user is " + usrName)
        await this.page.getByPlaceholder(this.username).fill(usrName)
        await this.page.getByPlaceholder(this.password).fill(process.env.saucePassword!)
        await this.page.locator(this.loginBtn).click().catch((error) => { logger.error("Login Should be locked for this User") })
        logger.error("Login Should be locked for this User")


        const myProductsPage = new ProductsPage(this.page);
        return myProductsPage;


    }

    async verifyLockedUserError() {

        await expect(this.page.getByText("Sorry, this user has been locked out.")).toBeVisible()
    }

}