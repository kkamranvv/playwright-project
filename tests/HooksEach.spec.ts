import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";

interface TestPage {
  page: Page | undefined;
}

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();

  await page.goto("https://demoblaze.com/");

  // Login

  await page.click("#login2");

  await page.fill("#loginusername", "saleh1");

  await page.fill("#loginpassword", "1234");

  await page.click("button[onclick='logIn()']");
});

test.afterEach(async () => {
  await page.click("#logout2");
});

test("Home Page Test", async () => {
  const products = await page.$$(".hrefch");

  await expect(products).toHaveLength(9);
});

test("Add Product to cart Test", async () => {
  await page.click("//a[normalize-space()='Samsung galaxy s6']");

  await page.click(".btn.btn-success.btn-lg");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("Alert");
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });
});
