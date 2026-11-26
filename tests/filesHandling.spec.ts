import { test, expect } from '@playwright/test'


//file upload
test('file upload', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles("testData/files/Batman-Logo-Evolution-1-1155x770.png");
    await page.locator("#file-submit").click();
    await expect(page.locator('#uploaded-files')).toHaveText('Batman-Logo-Evolution-1-1155x770.png');
})

//file-download
test('file download', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Images.txt' }).click();
    const download = await downloadPromise;
    console.log(download.suggestedFilename());
    await download.saveAs(`testData/files/${download.suggestedFilename()}`);

})