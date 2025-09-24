import { test, expect, chromium } from "@playwright/test";

test("Handle Pages", async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page1 = await context.newPage();

  const page2 = await context.newPage();

  const allPages = context.pages();
  console.log(allPages.length);

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page1).toHaveTitle("OrangeHRM");

  await page2.goto("https://demoblaze.com/cart.html#");

  await expect(page2).toHaveTitle("STORE");
});

test.only("Handle Multiple Pages", async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page).toHaveTitle("OrangeHRM");

  const pagePromise = context.waitForEvent("page");
  await page.click("a[href='http://www.orangehrm.com']");

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle(
    "Human Resources Management Software | HRMS | OrangeHRM"
  );

  await page.waitForTimeout(3000);
  await newPage.waitForTimeout(3000);

  await browser.close();
});
