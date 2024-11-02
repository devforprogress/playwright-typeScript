import { test, expect } from "@playwright/test"
import homePage from "../pages/demoHomePage"


test(" Sign up test", async ({ page }) => {

    const homePage1 = new homePage(page)

    await page.goto("/")
    await homePage1.invodeSignUpForm()
    await homePage1.signUp()
    await page.pause()

})
