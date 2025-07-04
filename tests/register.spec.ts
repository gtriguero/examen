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