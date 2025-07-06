import { test as base, expect } from '@playwright/test'
import { PageManager } from "../pageObjects/pagemanager"
import { createUser, UserData } from '../models/users';

export type TestOptions = {
    pageManager: PageManager;
    user: UserData;
}

export const test = base.extend<TestOptions>({
    pageManager: async ({ page }, use) => {
        let pm = new PageManager(page)
        await use(pm)
    }, 
     user: async ({}, use) => {
    const user = createUser();
        await use(user)
    },
   
})