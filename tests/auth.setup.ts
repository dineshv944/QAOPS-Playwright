import { test as setup, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';


const path = '.auth/user.json';

setup('authentication setup', async ({ page }) => {

    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.context().storageState({ path });


})