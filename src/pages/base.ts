/* Custom fixture to create pages and use as fixtures directly in pages and tests */
import { test as base } from "@playwright/test"
import LoginPage from "./demoLoginPage"
import CartPage from "./demoCartPage"
import ProductPage from "./demoProductStorePage"
import HomePage from "./demoHomePage"

type myPageFixtures = {
    demoLoginPage: LoginPage,
    demoCartPage: CartPage,
    demoProductsPage: ProductPage,
    demoHomePage: HomePage
}

export const test = base.extend<myPageFixtures>({

    demoLoginPage: async ({ page }, use) => {

        await use(new LoginPage(page))
    },

    demoCartPage: async ({ page }, use) => {
        await use(new CartPage(page))
    },
    demoProductsPage: async ({ page }, use) => {
        await use(new ProductPage(page))
    },
    demoHomePage: async ({ page }, use) => {
        await use(new HomePage(page))
    }


})


export { expect } from "@playwright/test"