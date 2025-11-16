import { expect ,test } from "@playwright/test";
test('Verify Google Title',async({page})=>{
    await page.goto('https://www.google.com/');
    expect(page.title).toBe('Google');
    expect(page).toHaveTitle('Google');
    console.log("Opened Page URL that showing",page.url);
})