import { test, expect } from "@playwright/test"

import LoginPage from "../pages/loginPage"
import { encrypt, decrypt } from "../utils/cryptoUtil"

test.skip("Login Test", async ({ page }) => {
    const loginPage = new LoginPage(page)

    await page.goto("/")
    var thisProductsPage = await loginPage.login()

    await thisProductsPage.verifyProductsPageLoaded()

})

test("Login Locked Test", async ({ page }) => {
    const loginPage = new LoginPage(page)

    await page.goto("/")
    var thisProductsPage = await loginPage.loginFromJson()
    await loginPage.verifyLockedUserError()

    // await thisProductsPage.verifyProductsPageLoaded()

})

test('View Product', async ({ page }) => {
    test.slow()
    const mytext = process.env.sauceUsername!;

    const encryText = await encrypt(mytext)
    console.log(encryText);
    await page.waitForTimeout(2000)
    const deText = decrypt(encryText)
    console.log(deText);



})



