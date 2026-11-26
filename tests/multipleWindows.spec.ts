import { test, expect } from '@playwright/test'

test('multiple window', async ({ page, context }) => {

    await page.goto("https://the-internet.herokuapp.com/windows");

    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const newPage = await pagePromise;

    await expect(newPage.locator('h3')).toContainText('Window');


})