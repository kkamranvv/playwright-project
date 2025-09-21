// trace 'on' in config file

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  await page.click("#login2");

  await page.fill("#loginusername", "saleh1");

  await page.fill("#loginpassword", "1234");

  await page.click("button[onclick='logIn()']");

  await expect(page.locator("#logout")).toBeVisible();
});
