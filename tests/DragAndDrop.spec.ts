import { test, expect } from "@playwright/test";

test("Drag And Drop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const drag = await page.locator("#draggable");

  const drop = await page.locator("#droppable");

  // 1)

  await drag.hover();
  await page.mouse.down();

  await drop.hover();
  await page.mouse.up();

  await page.waitForTimeout(5000);

  // 2)

  await drag.dragTo(drop);
});
