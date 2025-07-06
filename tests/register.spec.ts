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

test('register user', async ({ page }) => {

  const registerButton = page.getByText('Register');
  const loginButton = page.getByText('Log In ');
  const logOutButton = page.getByText('Log Out');
  const leftPanel = page.locator('#leftPanel');
  const userName = leftPanel.locator('[name="username"]');
  const password = leftPanel.locator('[name="password"]');
  const rightPanel = page.locator('#rightPanel');
 const titleRightPanel = rightPanel.locator('h1');

  const user = createUser();
  await page.goto('https://parabank.parasoft.com/', { timeout: 60000 });
  await page.waitForLoadState('load');
  await registerButton.click();
  await page.locator('[id="customer.firstName"]').fill(user.firstname);
  await page.locator('[id="customer.lastName"]').fill(user.lastname);
  await page.locator('[id="customer.address.street"]').fill(user.address);
  await page.locator('[id="customer.address.city"]').fill(user.city);
  await page.locator('[id="customer.address.state"]').fill(user.state);
  await page.locator('[id="customer.address.zipCode"]').fill(user.zipCode);
  await page.locator('[id="customer.phoneNumber"]').fill(user.phone);
  await page.locator('[id="customer.ssn"]').fill(user.ssn);
  await page.locator('[id="customer.username"]').fill(user.username);
  await page.locator('[id="customer.password"]').fill(user.password);
  await page.locator('[id="repeatedPassword"]').fill(user.password);
 await page.locator('[value="Register"]').click();

await expect(titleRightPanel).toHaveText('Welcome ' + user.username);
 await logOutButton.click();
 await expect(userName).toBeVisible();
 await userName.fill(user.username);
 await password.fill(user.password);
 await loginButton.click();
 await expect(logOutButton).toBeVisible();
});