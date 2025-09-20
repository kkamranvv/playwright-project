import { test, expect } from "@playwright/test";

test("Single File", async ({ page }) => {
  await page.goto("https://www.file.io/");

  await page.waitForSelector("label[for='select-files-input']");
  await page.click("label[for='select-files-input']");

  await page
    .locator("label[for='select-files-input']")
    .setInputFiles("tests/uploadFiles/photo.jpg");

  await page.waitForTimeout(5000);
});

test.only("Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page.click("#filesToUpload");

  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/uploadFiles/photo.jpg",
      "tests/uploadFiles/photo2.jpg",
    ]);

  await page.waitForTimeout(3000);

  await expect(page.locator("#fileList li:nth-child(1)")).toHaveText(
    "photo.jpg"
  );
  await expect(page.locator("#fileList li:nth-child(2)")).toHaveText(
    "photo2.jpg"
  );

  await page.waitForTimeout(3000);

  await page.locator("#filesToUpload").setInputFiles([]);

  await expect(page.locator("ul[id='fileList'] li")).toHaveText(
    "No Files Selected"
  );

  await page.waitForTimeout(5000);
});
