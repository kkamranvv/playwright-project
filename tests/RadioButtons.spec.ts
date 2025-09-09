import { test, expect } from "@playwright/test";

test("Handle InputBox", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await page.locator("#gender-male").check();

  await expect(await page.locator("#gender-male")).toBeChecked();
  await expect(await page.locator("#gender-male").isChecked()).toBeTruthy();

  await page.waitForTimeout(5000); // pause code
});
