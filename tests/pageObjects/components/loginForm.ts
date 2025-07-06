import { Locator, Page } from "playwright";
import { UserData } from "../../models/users";

export class LoginForm {
    readonly leftPanel: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
      this.leftPanel = page.locator('#leftPanel');
      this.userName = this.leftPanel.locator('[name="username"]');
      this.password = this.leftPanel.locator('[name="password"]');
      this.submitButton = this.leftPanel.getByText('Log In');
    }

    async fillLoginForm(user: UserData) {
      await this.userName.fill(user.username);
      await this.password.fill(user.password);
      await this.submitButton.click();
    }
}