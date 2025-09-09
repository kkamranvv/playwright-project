import { test, expect } from "@playwright/test";

test("Handle InputBox", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(await page.locator("#Email")).toBeVisible();

  await expect(await page.locator("#Email")).toBeEmpty();

  await expect(await page.locator("#Email")).toBeEditable();

  await expect(await page.locator("#Email")).toBeEnabled();

  const InputEmail = await page.locator("#Email");

  InputEmail.fill("qwerty@gmail.com");

  await page.waitForTimeout(5000); // pause code
});
