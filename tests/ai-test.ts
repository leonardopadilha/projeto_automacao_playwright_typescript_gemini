import { test, expect } from '@playwright/test';
import { generatePlaywrightSteps } from './gemini-helper';
import fs from 'fs';

test('gemini-test', async () => {
  const task = `
  1. Open the URL: https://way2automation.com/way2auto_jquery/index.php
  2. Enter the name as "Rahul Arora" in the name field
  3. Enter the mobile number "9999999999" in the phone field
  4. Enter the email as "trainer@way2automation.com" in the email field
  5. Select "Germany" from the country dropdown
  6. Enter the city as "Berlin" in the city field
  `

  const code = await generatePlaywrightSteps(task)
  await fs.promises.writeFile('./tests/generated-test.spec.ts', code, 'utf-8')
})