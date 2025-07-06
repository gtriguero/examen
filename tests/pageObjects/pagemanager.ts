import { Page } from "playwright";
import { Navigation } from "./navigation";
import { RegisterForm } from "./components/registerForm";
import { GeneralForm } from "./components/generalForm";
import { LoginForm } from "./components/loginForm";

export class PageManager {
    protected readonly navigation: Navigation;
    protected readonly registerForm: RegisterForm;
    protected readonly generalForm: GeneralForm;
    protected readonly loginForm: LoginForm;

    constructor(page: Page) {
        this.navigation = new Navigation(page);
        this.registerForm = new RegisterForm(page);
        this.generalForm = new GeneralForm(page);
        this.loginForm = new LoginForm(page);
    }

    onNavigation() {
        return this.navigation;    
    }

    onGeneralForm() {
        return this.generalForm;    
    }

    onRegisterComponent() {
        return this.registerForm;    
    }

    onLoginComponent() {
        return this.loginForm;    
    }
}