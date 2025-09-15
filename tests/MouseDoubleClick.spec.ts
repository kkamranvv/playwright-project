import { test, expect } from "@playwright/test";

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const copyTextBtn = await page.locator("button[ondblclick='myFunction1()']");

  await copyTextBtn.dblclick();

  const field2 = await page.locator("#field2");

  await expect(field2).toHaveValue("Hello World!");

  await page.waitForTimeout(5000);
});
