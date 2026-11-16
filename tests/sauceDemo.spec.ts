import { testFixture } from '../Utils/pomFixtures'
import { expect } from '@playwright/test'
import dataset from '../testData/sauceDemo.json'

testFixture('Sauce demo', async ({ page, dashboardPage }) => {

    await page.goto("https://www.saucedemo.com/inventory.html");

    await expect(dashboardPage.products).toHaveText("Products");
    await dashboardPage.productToCart(dataset.productName[2]);
    await expect(dashboardPage.addtocart).toBeEnabled();
    await dashboardPage.addCart();

    console.log("github actions pipeline test")
    console.log("new branch for pipeline")


})