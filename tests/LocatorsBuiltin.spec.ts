import { test, expect } from "@playwright/test";

test("BuiltInLocators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const logo = await page.getByAltText("company-branding");
  console.log(logo);
  await expect(logo).toBeVisible();

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  const actualName = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();

  if (!actualName) {
    throw new Error("User dropdown name not found");
  }

  const name = await page.getByText(actualName);

  await expect(name).toBeVisible();
});
