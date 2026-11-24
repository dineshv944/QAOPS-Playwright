import { test, expect } from '@playwright/test'

test('iframes testing', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const frame = page.frameLocator("#courses-iframe");
    await frame.getByRole('link', { name: 'Login' }).click();
})