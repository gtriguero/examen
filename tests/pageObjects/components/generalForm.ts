import { Locator, Page } from "playwright";

export class GeneralForm {
    readonly leftPanel: Locator;
    readonly rightPanel: Locator;
    readonly registerButton: Locator;
    readonly loginButton: Locator;
    readonly logOutButton: Locator;
    readonly submitButton: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly titleRightPanel: Locator;

    constructor(page: Page) {
      this.leftPanel = page.locator('#leftPanel');
      this.rightPanel = page.locator('#rightPanel');
      this.registerButton = page.getByText('Register');
      this.loginButton = page.getByText('Log In ');
      this.logOutButton = page.getByText('Log Out');
      this.submitButton = this.rightPanel.getByText('Register');
      this.userName = this.leftPanel.locator('[name="username"]');
      this.password = this.leftPanel.locator('[name="password"]');
      this.titleRightPanel = this.rightPanel.locator('h1');
    }
  
  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async clickLogoutButton() {
    await this.logOutButton.click();
  }

    async clickLoginButton() {
    await this.loginButton.click();
  }

}