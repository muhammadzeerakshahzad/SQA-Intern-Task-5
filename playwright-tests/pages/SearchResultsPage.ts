import { Page } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly productCards;
  readonly planetX;
  readonly minPrice;
  readonly maxPrice;
  readonly applyButton;

  constructor(page: Page) {
    this.page = page;

    this.productCards = page.locator('.Bm3ON');

    this.planetX = page.getByText('Planet X', { exact: true });

    this.minPrice = page.getByRole('spinbutton', { name: 'Min' });

    this.maxPrice = page.getByRole('spinbutton', { name: 'Max' });

    this.applyButton = page.getByRole('button').nth(2);
  }

  async getProductCount() {
    await this.productCards.first().waitFor({
      state: 'visible'
    });

    return await this.productCards.count();
  }

  async openFirstProduct() {
    await this.productCards.first().waitFor({
      state: 'visible'
    });

    await this.productCards.first().click();
  }

  async selectPlanetX() {
    await this.planetX.click();
  }

  async applyPriceFilter(min: string, max: string) {
    await this.minPrice.fill(min);
    await this.maxPrice.fill(max);

    await this.applyButton.click();
  }
}