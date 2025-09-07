import { test, expect } from "@playwright/test";

test("AssertionsTest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  const logoElement = await page.locator(".header-logo");

  await expect(logoElement).toBeVisible();
});
