import { test, expect } from "@playwright/test";

test("Inner Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });

  // if (frame3) {
  //   await frame3.locator("input[name='mytext3']").fill("hi");
  // } else {
  //   throw new Error("Error");
  // }

  // nested frame

  const childFrames = await frame3?.childFrames();

  if (childFrames && childFrames.length > 0) {
    await childFrames[0].locator('//*[@id="i6"]/div[3]/div').check();
  }

  await page.waitForTimeout(5000);
});
