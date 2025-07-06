import { expect } from '@playwright/test';
import { test } from './fixtures/fixture';

import { createUser } from './models/users';

test('create user', async ({ pageManager }) => {
  const user = createUser();
});

test('register user', async ({ pageManager }) => {


  const user = createUser();
  await pageManager.goto('https://parabank.parasoft.com/', { timeout: 60000 });
  await pageManager.waitForLoadState('load');

  await pageManager.onGeneralForm().clickRegisterButton();
  await pageManager.onRegisterComponent().fillRegisterForm(user);
  await pageManager.onGeneralForm().clickSubmitButton();
  await pageManager.onGeneralForm().clickLogoutButton();
  await pageManager.onGeneralForm().clickLoginButton();
  await pageManager.onLoginComponent().fillLoginForm(user);
/*
  
test.only('Register form', async ({ pageManager, user }) => {
    await pageManager.onRegisterComponent().fillForm(user);
    await expect(pageManager.onHomeComponent().lightOnDiv).toBeVisible()^*/
});