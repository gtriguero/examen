import { Locator, Page } from "playwright";
import { UserData } from "../../models/users";

export class RegisterForm {
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

    constructor(page: Page) {
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
    }

    async fillRegisterForm(user: UserData) {
      this.firstNameInput.fill(user.firstname);
      this.lastNameInput.fill(user.lastname);
      this.addressInput.fill(user.address);
      this.cityInput.fill(user.city);
      this.stateInput.fill(user.state);
      this.zipCodeInput.fill(user.zipCode);
      this.phoneInput.fill(user.phone);
      this.ssnInput.fill(user.ssn);
      this.usernameInput.fill(user.username);
      this.passwordInput.fill(user.password);
      this.repeatedPasswordInput.fill(user.password);
    }
}