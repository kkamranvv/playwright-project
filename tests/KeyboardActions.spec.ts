import { test, expect } from "@playwright/test";

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  const text = await page
    .locator("textarea[placeholder='Paste one version of the text here.']")
    .fill("Welcome to QA");

  // await page.type("name='text1'", "Welcome to QA");

  // CTRL + A

  await page.keyboard.press("Control+A");

  // CTRL + C

  await page.keyboard.press("Control+C");

  // TAB

  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  // CTRL + V

  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});
