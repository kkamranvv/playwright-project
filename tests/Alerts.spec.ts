import { test, expect } from "@playwright/test";

test.skip("Alert with OK", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling dialog window handle

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("#alertBtn");

  await page.waitForTimeout(5000);
});

test.skip("Confirmation Dialog-Alert with OK abd cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling dialog window handle

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button");
    await dialog.accept(); // close by using OK
    // await dialog.dismiss(); // close by cancel
  });

  await page.click("#confirmBtn");

  const validationText = await page.locator("#demo");

  await expect(validationText).toHaveText("You pressed OK!");

  await page.waitForTimeout(5000);
});

test("Prompt Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling dialog window handle

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Kamran");
  });

  await page.click("#promptBtn");

  const validationText = await page.locator("#demo");

  await expect(validationText).toHaveText("Hello Kamran! How are you today?");

  await page.waitForTimeout(5000);
});
