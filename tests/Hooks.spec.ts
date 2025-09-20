import { test, expect } from "@playwright/test";

test("Home Page Test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Login

  await page.click("#login2");

  await page.fill("#loginusername", "saleh1");

  await page.fill("#loginpassword", "1234");

  await page.click("button[onclick='logIn()']");

  // Home Page

  const products = await page.$$(".hrefch");

  await expect(products).toHaveLength(9);

  // log out

  await page.click("#logout2");
});

test("Add Product to cart Test", async ({ page }) => {
  // Login
  await page.goto("https://demoblaze.com/");

  // Login

  await page.click("#login2");

  await page.fill("#loginusername", "saleh1");

  await page.fill("#loginpassword", "1234");

  await page.click("button[onclick='logIn()']");

  // Add product to cart

  await page.click("//a[normalize-space()='Samsung galaxy s6']");

  await page.click(".btn.btn-success.btn-lg");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("Alert");
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });
  // log out

  await page.click("#logout2");
});
