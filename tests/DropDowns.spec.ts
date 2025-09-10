import { test, expect } from "@playwright/test";

test("Handle DropDowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // await page.locator("#country").selectOption({ label: "France" }); // label - 1
  // await page.locator("#country").selectOption("France"); // text - 2
  // await page.locator("#country").selectOption({ value: "france" }); // value - 3
  // await page.locator("#country").selectOption({ index: 4 }); // index - 4
  // await page.selectOption("#country", "France"); // text - 5

  // assertions

  // 1) check number of options in dropdown - 1
  // const options = await page.locator("#country option");

  // await expect(options).toHaveCount(10);

  // 2) check number of options in dropdown - 2
  // const options = await page.$$("#country option");

  // console.log("Number of options:", options.length);

  // await expect(options.length).toBe(10);

  // 3) check presence of value in the dropdown - 1

  // const content = await page.locator("#country").textContent();

  // console.log(content);

  // await expect(content?.includes("France")).toBeTruthy();

  // 4) check presence of value in the dropdown - 2 for loop

  const options = await page.$$("#country option");

  let status = false;

  for (const option of options) {
    // console.log(await option.textContent());
    let value = await option.textContent();
    if (value?.includes("France")) {
      status = true;
      break;
    }
  }

  await expect(status).toBeTruthy();

  await page.waitForTimeout(5000);
});
