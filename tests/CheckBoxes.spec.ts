import { test, expect } from "@playwright/test";

test("Handle CheckBoxes", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  // single checkbox
  await page.check("input:nth-child(1)");

  await expect(page.locator("input:nth-child(1)")).toBeChecked();
  await expect(page.locator("input:nth-child(1)").isChecked()).toBeTruthy();
  await expect(
    page.locator("(//input[@type='checkbox'])[2]").isChecked()
  ).toBeTruthy();

  await page.uncheck("(//input[@type='checkbox'])[2]");
  await page.uncheck("input:nth-child(1)");

  // multiple checkboxes

  const checkBoxesArr = [
    "input:nth-child(1)",
    "(//input[@type='checkbox'])[2]",
  ];

  for (const locator of checkBoxesArr) {
    // select multiple checkboxes
    await page.locator(locator).check();
  }

  await page.waitForTimeout(5000);

  for (const locator of checkBoxesArr) {
    // unselect multiple checkboxes
    if (await page.locator(locator).isChecked())
      await page.locator(locator).uncheck();
  }

  await page.waitForTimeout(5000);
});
