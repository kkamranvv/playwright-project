import { test, expect } from "@playwright/test";

test("Mouse Right Click", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  const rightClickBtn = await page.locator(".context-menu-one.btn.btn-neutral");

  await rightClickBtn.click({ button: "right" });
  // await rightClickBtn.click({ button: "left" });

  await page.waitForTimeout(5000);
});
