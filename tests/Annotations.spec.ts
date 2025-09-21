import { test, expect } from "@playwright/test";

// test.only("test1", async ({ page }) => {
//   console.log("Test1");
// });

// test.skip("test2", async ({ page }) => {
//   console.log("Test2");
// });

// test("Annotations", async ({ page, browserName }) => {
//   console.log("Test");

//   if (browserName === "firefox") {
//     test.skip();
//   }
// });

// test("test4", async ({ page }) => {
//   console.log(1);
//   test.fixme();
//   console.log("test4");
// });

// test("test5", async ({ page }) => {
//   test.fail();
//   console.log("Test5");
//   expect(1).toBe(2);
// });

// test("test6", async ({ page, browserName }) => {
//   console.log("Test6");

//   if (browserName === "chromium") {
//     test.fail();
//   }
// });

test("test7", async ({ page }) => {
  // test.slow();

  test.setTimeout(5000);

  await page.goto("https://demoblaze.com/");
  console.log("Test7");
});
