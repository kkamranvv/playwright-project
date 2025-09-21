import { test, expect } from "@playwright/test";
import { Page, Locator } from "@playwright/test";

test("Handling table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  // total number of rows and columns

  const columns = await table.locator("thead tr th");

  console.log(await columns.count());

  await expect(await columns.count()).toBe(4);

  const rows = await table.locator("tbody tr");

  console.log(await rows.count());

  await expect(await rows.count()).toBe(5);

  // select checkbox for product 4

  /* const matchedRow = rows.filter({
  //   // has: page.locator("td"),
  //   hasText: "Smartwatch",
  // });

   await matchedRow.locator("input").check();
  */

  // select multiple products

  // await selectProduct(rows, page, "Laptop");
  // await selectProduct(rows, page, "Smartphone");
  // await selectProduct(rows, page, "Tablet");

  // print all product details using loop

  /* for (let i = 0; i < (await rows.count()); i++) {
  //   const row = rows.nth(i);
  //   const tds = row.locator("td");

  //   for (let j = 0; j < (await tds.count()) - 1; j++) {
  //     console.log(await tds.nth(j).textContent());
  //   }
    }
  */

  // read data from all the pages in the table

  const pages = await page.locator(".pagination li a");
  console.log(await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }

    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }

    await page.waitForTimeout(3000);
  }

  await page.waitForTimeout(5000);
});

async function selectProduct(rows: Locator, page: Page, name: string) {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });

  await matchedRow.locator("input").check();
}
