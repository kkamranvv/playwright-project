import { test, expect } from "@playwright/test";

test("Test1", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page).toHaveTitle("STORE");
});

test("Test2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page).toHaveTitle("OrangeHRM");
});

test("Test3", async ({ page }) => {
  await page.goto("https://appetize.io/demo");
  await expect(page).toHaveTitle("Appetiz Demo");
});
