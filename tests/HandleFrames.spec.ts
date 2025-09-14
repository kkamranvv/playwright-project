import { test, expect } from "@playwright/test";

test("Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // total frames

  const allFrames = await page.frames();

  console.log(allFrames.length);

  // 1) using name or url
  // const frame1 = await page.frame("name")

  // const frame1 = await page.frame({
  //   url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  // });

  // if (frame1) {
  //   await frame1.fill("input[name='mytext1']", "Hi");
  // } else {
  //   throw new Error("Frame 'frame_1.html' not found");
  // }

  // 2) frame locator

  const input = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("input[name='mytext1']");

  await input.fill("Hi");

  await page.waitForTimeout(5000);
});
