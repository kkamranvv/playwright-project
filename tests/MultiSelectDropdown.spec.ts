import { test, expect } from "@playwright/test";

test("Handle Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select multiple options from multi select dropdown
  // await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);

  // assertions

  // 1) check number of options in dropdown

  // const options = await page.locator("#colors option");

  // await expect(options).toHaveCount(5);

  // 2) check number of options in dropdown - array

  // const options = await page.$$("#colors option");

  // console.log(options.length);

  // await expect(options.length).toBe(7);

  // 2) check presence of value in dropdown

  const content = await page.locator("#colors").textContent();

  await expect(content?.includes("Blue")).toBeTruthy();

  await page.waitForTimeout(5000);
});
