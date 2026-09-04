import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly freeShipping;

  constructor(page: Page) {
    this.page = page;

    this.freeShipping = page.getByText('Free Shipping', {
      exact: true
    });
  }

  async isFreeShippingAvailable() {
    return (await this.freeShipping.count()) > 0;
  }
}