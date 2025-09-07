import { test, expect } from "@playwright/test";

test("HomePage", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log("Page title is:", pageTitle);

  await expect(page).toHaveTitle("STORE");

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  await page.close();
});
