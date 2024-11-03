import { chromium, test, expect } from "@playwright/test"
// Import the test and expect from custom fixture defined in base.ts
// import { test, expect } from "../pages/base"
import ProductPage from "../pages/demoProductStorePage";
import CartPage from "../pages/demoCartPage";

test("Add to cart check", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ storageState: '../utils/auth.json' });
    const newPage = await context.newPage();
    const myProductsPage = new ProductPage(newPage);
    const myCartPage = new CartPage(newPage);
    await newPage.goto("https://www.demoblaze.com/index.html")
    await myProductsPage.addToCart('phone');
    // await newPage.waitForTimeout(5000)

    const numberOfProductInCart = await myCartPage.getNumberOfProductsInCart();
    console.log("============ " + numberOfProductInCart);

    expect(numberOfProductInCart).toBe(3)




})