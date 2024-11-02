import { test, expect } from "@playwright/test";
import sfHomePage from "../pages/sfHomePage";

test("register User", async ({ page }) => {
    const sfHomePage1 = new sfHomePage(page);

    await sfHomePage1.registerUser()
})