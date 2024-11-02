import { Page } from "@playwright/test";

export default class sfHomePage {




    constructor(private page: Page) { }
    async registerUser() {
        await this.page.goto('https://www.salesforce.com/in/?ir=1');
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: 'Try for free' }).click();
        const page1 = await page1Promise;
        await page1.getByLabel('First name').click();
        await page1.getByLabel('First name').fill('Raju');
        await page1.getByLabel('Last name').click();
        await page1.getByLabel('Last name').click();
        await page1.getByLabel('Last name').fill('Jain');
        await page1.getByLabel('Last name').press('Tab');
        await page1.getByLabel('Email').fill('rajJain@yopmail.com');
        await page1.getByLabel('Email').press('Tab');
        await page1.getByLabel('Job Title').press('ArrowDown');
        await page1.getByLabel('Job Title').press('Tab');
        await page1.getByLabel('Company', { exact: true }).fill('ABC Enterpicses');
        await page1.getByLabel('Company', { exact: true }).press('Tab');
        await page1.getByLabel('Employees').press('ArrowDown');
        await page1.getByLabel('Employees').press('Tab');
        await page1.getByLabel('Phone').fill('7878656511');
        await page1.locator('.msaCheckbox > div > .field > .checkbox-ui').click();
        await page1.getByRole('button', { name: 'start my free trial' }).click();
        await page1.pause()
    }

}