import { test, expect } from '@playwright/test';

test('fill form', async ({ page }) => {
  await page.goto('https://way2automation.com/way2auto_jquery/index.php');

  await page.locator('input[name="name"]').fill('Rahul Arora');
  await page.locator('input[name="phone"]').fill('9999999999');
  await page.locator('input[name="email"]').fill('trainer@way2automation.com');
  await page.locator('select[name="country"]').selectOption('Germany');
  await page.locator('input[name="city"]').fill('Berlin');
  await page.waitForTimeout(3000)
});
