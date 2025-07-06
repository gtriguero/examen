import { Locator, Page } from "playwright";

export class Navigation {
    readonly page: Page;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerButton = page.getByText('Register');
    }
    
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/', { timeout: 60000 });
        await this.page.waitForLoadState('load');
    }

      async navigateToRegister() {
        await this.page.waitForLoadState('load');
        await this.registerButton.click();
      }
      
      async navigateToLogin() {
        await this.page.waitForLoadState('load');
      }
    }

