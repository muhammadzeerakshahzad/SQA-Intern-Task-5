import { Page } from '@playwright/test';

export class DarazHomePage {
  readonly page: Page;
  readonly searchBar;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator('input[type="search"]');
  }

  async goto() {
    await this.page.goto('https://www.daraz.pk/', {
      waitUntil: 'domcontentloaded'
    });
  }

  async search(product: string) {
    await this.searchBar.fill(product);
    await this.searchBar.press('Enter');
  }
}