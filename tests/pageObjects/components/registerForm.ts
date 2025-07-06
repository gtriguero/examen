import { Locator, Page } from "playwright";
import { UserData } from "../../models/users";
import { GeneralForm } from "./generalForm";

export class RegisterForm extends GeneralForm {
  // Extiendo la clase GeneralForm para reutilizar el this.rightPanel en línea 35
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipCodeInput: Locator;
    readonly phoneInput: Locator; 
    readonly ssnInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly repeatedPasswordInput: Locator;
    readonly titleRightPanel: Locator;
   

    constructor(page: Page) {
      super(page);
       this.firstNameInput = page.locator('[id="customer.firstName"]');
       this.lastNameInput = page.locator('[id="customer.lastName"]');
       this.addressInput = page.locator('[id="customer.address.street"]');
       this.cityInput = page.locator('[id="customer.address.city"]');
       this.stateInput = page.locator('[id="customer.address.state"]');
       this.zipCodeInput = page.locator('[id="customer.address.zipCode"]');
       this.phoneInput = page.locator('[id="customer.phoneNumber"]');
       this.ssnInput = page.locator('[id="customer.ssn"]');
       this.usernameInput = page.locator('[id="customer.username"]');
       this.passwordInput = page.locator('[id="customer.password"]');
       this.repeatedPasswordInput = page.locator('[id="repeatedPassword"]');
       this.titleRightPanel = this.rightPanel.locator('h1');
    }

    async fillRegisterForm(user: UserData) {
      await this.firstNameInput.fill(user.firstname);
      await this.lastNameInput.fill(user.lastname);
      await this.addressInput.fill(user.address);
      await this.cityInput.fill(user.city);
      await this.stateInput.fill(user.state);
      await this.zipCodeInput.fill(user.zipCode);
      await this.phoneInput.fill(user.phone);
      await this.ssnInput.fill(user.ssn);
      await this.usernameInput.fill(user.username);
      await this.passwordInput.fill(user.password);
      await this.repeatedPasswordInput.fill(user.password);
    }
}