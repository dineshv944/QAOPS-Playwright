import { test, expect } from '@playwright/test'


test('alerts test', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");


    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    })

    await page.getByRole("button", { name: 'Click for JS Confirm' }).click();
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");


    page.once('dialog', async dialog => {

        console.log(dialog.message());
        await dialog.accept('Alert testing');
    })

    await page.getByRole("button", { name: 'Click for JS Prompt' }).click();
    await expect(page.locator("#result")).toHaveText("You entered: Alert testing");



})