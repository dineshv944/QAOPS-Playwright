import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Dashboard } from '../pages/Dashboard';


type newfixture = {
    loginPage: LoginPage;
    dashboardPage: Dashboard;
}



const testFixture = baseTest.extend<newfixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new Dashboard(page);
        await use(dashboardPage);
    }
})


export { testFixture }

