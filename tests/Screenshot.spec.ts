import { test, expect } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const timeNow = Date.now();

  await page.screenshot({
    path: `tests/screenshots/HomePage_${timeNow}.png`,
  });
});

test("Full Page Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const timeNow = Date.now();

  await page.screenshot({
    path: `tests/screenshots/FullPage${timeNow}.png`,
    fullPage: true,
  });
});

test.only("Element Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const timeNow = Date.now();

  await page.locator("#tbodyid").screenshot({
    path: `tests/screenshots/Element${timeNow}.png`,
  });
});
