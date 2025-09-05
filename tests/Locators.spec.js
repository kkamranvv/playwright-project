import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // await page.locator("id=login2").click();
  // click on login button - property
  await page.click("id=login2");

  // provide username - CSS
  await page.fill("#loginusername", "saleh1");

  // provide password
  await page.fill("input[id='loginpassword']", "1234");

  // Click on login button
  await page.click("//button[normalize-space()='Log in']");

  // verify logout link presents
  const logout = await page.locator("//a[normalize-space()='Log out']");

  await expect(logout).toBeVisible();

  await page.close();
});
