import { chromium, test } from "@playwright/test"
// import { test } from "../pages/base";
import LoginPage from "../pages/demoLoginPage";


test("Login Test", async () => {
    const browser = await chromium.launch({ headless: false }); // Adjust headless mode as needed
    const context = await browser.newContext();
    const newPage = await context.newPage();

    await newPage.goto("/");
    const loginPage1 = new LoginPage(newPage);
    await loginPage1.login()
    // Save the authentication state to a JSON file
    await context.storageState({ path: '../utils/auth.json' });


})