import { test, expect } from "@playwright/test"
import testData from "../data/data.json"
import { getDataByAppName } from "../utils/getDataFromJsonUtil";
import { log } from "console";

import RegisterPage from "../pages/ebRegisterPage";

import HomePage from "../pages/ebHomePage";

test("Register User", async ({ page }) => {


    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page)
    await homePage.navigateToOdo()
    await homePage.navigateToRegister()
    await registerPage.registerOdoo()
    await registerPage.gettingFirstApp()


})