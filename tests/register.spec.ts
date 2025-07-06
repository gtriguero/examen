import { expect } from '@playwright/test';
import { test } from './fixtures/fixture';

test.beforeEach(async ({ pageManager }) => {
    await pageManager.onNavigation().goto();
});

test('register user', async ({ pageManager, user }) => {
  test.slow();
  await pageManager.onNavigation().navigateToRegister();
  await pageManager.onGeneralForm().clickRegisterButton();
  await pageManager.onRegisterComponent().fillRegisterForm(user);
  await pageManager.onGeneralForm().clickSubmitButton();
  await expect(pageManager.onRegisterComponent().titleRightPanel).toHaveText('Welcome ' + user.username);
  await pageManager.onGeneralForm().clickLogoutButton();
  await expect(pageManager.onGeneralForm().registerButton).toBeVisible();
  await pageManager.onLoginComponent().fillLoginForm(user);
});