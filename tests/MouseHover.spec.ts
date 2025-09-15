import { test, expect } from "@playwright/test";

test("Mouse Hover", async ({ page }) => {
  await page.goto("https://qaplayground.dev/apps/mouse-hover/");

  const img = await page.locator(".poster");

  const buyBtn = await page.locator(".buy-btn");

  // Mouse Hover

  await img.hover();
  await buyBtn.hover();

  await buyBtn.click();

  await page.waitForTimeout(5000);
});
