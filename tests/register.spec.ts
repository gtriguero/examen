import { test, expect } from '@playwright/test';
import { createUser } from './models/users';

test('create user', async ({ page }) => {
  const user = createUser();
  console.log('Username: ' + user.firstname);
  console.log('lastname: ' + user.lastname);
  console.log('Address: ' + user.address);
  console.log('City: ' + user.city);
  console.log('State: ' + user.state);
  console.log('Zip Code: ' + user.zipCode);
  console.log('Phone: ' + user.phone);
  console.log('SSN: ' + user.ssn);
  console.log('Username: ' + user.username);
  console.log('Password: ' + user.password);
});

test('create user with custom data', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm', { timeout: 60000 });
  await page.locator('[id="customer.firstName"]').fill('John');
  await page.locator('[id="customer.lastName"]').fill('Doe');
  await page.locator('[id="customer.address.street"]').fill('123 Main St');
  await page.locator('[id="customer.address.city"]').fill('Anytown');
  await page.locator('[id="customer.address.state"]').fill('CA');
  await page.locator('[id="customer.address.zipCode"]').fill('12345');
  await page.locator('[id="customer.phoneNumber"]').fill('123-456-7890');
  await page.locator('[id="customer.ssn"]').fill('123-45-6789');
  await page.locator('[id="customer.username"]').fill('johndoe');
  await page.locator('[id="customer.password"]').fill('password123');
  await page.locator('[id="repeatedPassword"]').fill('password123');
 await page.locator('[value="Register"]').click();
});