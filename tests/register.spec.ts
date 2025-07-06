import { expect } from '@playwright/test';
import { test } from './fixtures/fixture';

import { createUser } from './models/users';

test.beforeEach(async ({ pageManager }) => {
    await pageManager.onNavigation().goto();
});

test('create user', async ({ pageManager }) => {
  const user = createUser();
});



test('register user', async ({ pageManager, user }) => {
test.slow();
  await pageManager.onNavigation().navigateToRegister();
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