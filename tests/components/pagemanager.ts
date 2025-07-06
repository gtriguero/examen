import { Page } from "playwright";
import { Navigation } from "../pageObjects/navigation";

export class PageManager {
    protected readonly navigation: Navigation;

constructor(page: Page) {
        this.navigation = new Navigation(page);

    }
 onNavigation() {
        return this.navigation;    
    }
}