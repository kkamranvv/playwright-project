import { test, expect } from "@playwright/test";

test("Bootstrap dropdown", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click(); // Click on dropdown

  const options = await page.locator("ul>li label input");

  await expect(options).toHaveCount(11);

  await page.waitForTimeout(5000);
});
