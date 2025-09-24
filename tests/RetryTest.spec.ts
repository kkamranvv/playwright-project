import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";

import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test("test", async ({ page }) => {
  // Login

  const login = new LoginPage(page);
  await login.gotoLoginPage();

  await login.login("saleh1", "1234");

  await page.waitForTimeout(3000);

  // Home

  const homePage = new HomePage(page);

  await homePage.addProductToCart("Iphone 6 32gb");
  await page.waitForTimeout(3000);
  await homePage.gotoCart();

  // Cart

  const cart = new CartPage(page);

  await page.waitForTimeout(3000);

  const status = await cart.checkProductInCart("Iphone 6 32gb");

  await page.waitForTimeout(3000);
});
