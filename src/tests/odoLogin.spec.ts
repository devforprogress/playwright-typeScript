import { test, expect } from "@playwright/test"

import LoginPage from "../pages/odoLoginPage.ts"

test("Login to Odo", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto("/")
    await loginPage.login()

})