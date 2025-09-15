import { test, expect } from "@playwright/test";

test("Date Pciker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // await page.fill("#datepicker", "12/20/2008");

  // handle date picker

  const year = "2027";
  const month = "September";
  const date = "15";

  await page.click("#datepicker");

  while (true) {
    const curYear = await page.locator(".ui-datepicker-year").textContent();
    const curMonth = await page.locator(".ui-datepicker-month").textContent();

    if (year == curYear && month == curMonth) {
      break;
    }

    await page.locator('[title="Next"]').click(); // next btn
  }

  const days = await page.$$(".ui-state-default");

  //  date selection using loop
  /*
  for (const dt of days) {
    if ((await dt.textContent()) == date) {
      await dt.click();
      break;
    }
  }
  */
  // date selection

  await page.click(`//a[@class='ui-state-default'][text()='${date}'`);

  await page.waitForTimeout(5000);
});
