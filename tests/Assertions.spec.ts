import { test, expect } from "@playwright/test";

test("AssertionsTest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  const logoElement = await page.locator(".header-logo");

  await expect(logoElement).toBeVisible();

  const searchStoreBox = await page.locator("#small-searchterms");

  await expect(searchStoreBox).toBeEnabled();

  const femaleBtn = await page.locator("#gender-female");
  await femaleBtn.click();
  await expect(femaleBtn).toBeChecked();

  const newsletterCheckbox = await page.locator("#Newsletter");
  await expect(newsletterCheckbox).toBeChecked();

  const registerBtn = await page.locator("#register-button");

  await expect(registerBtn).toHaveAttribute("type", "submit");

  const registerHeading = await page.locator("div[class='page-title'] h1");

  await expect(registerHeading).toHaveText("Register");

  await expect(registerHeading).toContainText("Reg");

  const inputFirstName = await page.locator("#FirstName");

  await inputFirstName.fill("Kamran");

  await expect(inputFirstName).toHaveValue("Kamran");

  const options = await page.locator("//select[@id='customerCurrency']/option");

  await expect(options).toHaveCount(2);
});
