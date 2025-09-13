import { test, expect } from "@playwright/test";

test("Auto suggest dropdown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator(".srcDest___aa6db3").fill("Baku");

  await page.waitForSelector(".suggestion-item");

  const fromCityOptions = await page.$$(".suggestion-item");

  for (let option of fromCityOptions) {
    const value = await option.textContent();

    if (value?.includes("Bakuajari")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
