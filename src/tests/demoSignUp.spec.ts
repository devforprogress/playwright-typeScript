import { test, expect } from "../pages/base"
import homePage from "../pages/demoHomePage"


test(" Sign up test", async ({ page, demoHomePage }) => {



    await page.goto("/")
    await demoHomePage.invodeSignUpForm()
    await demoHomePage.signUp()


})
