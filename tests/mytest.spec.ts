import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('saleh1');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('New message').getByText('Close').click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('New message').getByText('Close').click();
});