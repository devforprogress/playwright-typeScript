import { test, expect, chromium } from "@playwright/test"
import productPage from "../pages/demoProductStorePage"
import cartPage from "../pages/demoCartPage"

test("Add to cart check", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ storageState: '../utils/auth.json' });
    const newPage = await context.newPage();
    const myProductsPage = new productPage(newPage);
    const myCartPage = new cartPage(newPage);
    await newPage.goto("https://www.demoblaze.com/index.html")
    await myProductsPage.addToCart('phone');
    // await newPage.waitForTimeout(5000)

    const numberOfProductInCart = await myCartPage.getNumberOfProductsInCart();
    console.log("============ " + numberOfProductInCart);

    expect(numberOfProductInCart).toBe(4)




})