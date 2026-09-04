import { test, expect } from '@playwright/test';

import { DarazHomePage } from '../pages/DarazHomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';


test('Daraz homepage loads successfully', async ({ page }) => {

  const homePage = new DarazHomePage(page);

  await homePage.goto();

  await expect(page).toHaveURL(/daraz\.pk/);

});


test('Search for Electronics', async ({ page }) => {

  const homePage = new DarazHomePage(page);

  await homePage.goto();

  await homePage.search('electronics');

  await expect(page).toHaveURL(/catalog/i);

});


test('Apply Planet X brand filter', async ({ page }) => {

  const homePage = new DarazHomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  await homePage.goto();

  // Search for electronics
  await homePage.search('electronics');

  // Wait for the search results page
  await expect(page).toHaveURL(/catalog/i);

  // Select the Planet X brand filter
  await searchResultsPage.selectPlanetX();

  // Verify that Planet X is visible
  await expect(searchResultsPage.planetX).toBeVisible();

});


test('Apply Price Filter 500 to 5000 PKR', async ({ page }) => {

  const homePage = new DarazHomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  await homePage.goto();

  // Search for electronics
  await homePage.search('electronics');

  // Wait for the search results page
  await expect(page).toHaveURL(/catalog/i);

  // Apply price filter
  await searchResultsPage.applyPriceFilter('500', '5000');

  // Verify that the selected price range is still displayed
  await expect(searchResultsPage.minPrice).toHaveValue('500');
  await expect(searchResultsPage.maxPrice).toHaveValue('5000');

});


test('Validate Product Count', async ({ page }) => {

  const homePage = new DarazHomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  // Open Daraz.pk
  await homePage.goto();

  // Search for electronics
  await homePage.search('electronics');

  // Wait for the search results page
  await expect(page).toHaveURL(/catalog/i);

  // Count the product cards
  const productCount = await searchResultsPage.getProductCount();

  // Display the number of products
  console.log('Number of products displayed:', productCount);

  // Verify that at least one product is displayed
  expect(productCount).toBeGreaterThan(0);

});


test('Open Product Details Page', async ({ page }) => {

  const homePage = new DarazHomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  // Open Daraz.pk
  await homePage.goto();

  // Search for electronics
  await homePage.search('electronics');

  // Wait for the search results page
  await expect(page).toHaveURL(/catalog/i);

  // Click the first product
  await searchResultsPage.openFirstProduct();

  // Verify that the product details page has loaded
  await expect(page).not.toHaveURL(/catalog/i);

});


test('Verify Free Shipping Availability', async ({ page }) => {

  const homePage = new DarazHomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);

  // Open Daraz.pk
  await homePage.goto();

  // Search for electronics
  await homePage.search('electronics');

  // Wait for search results
  await expect(page).toHaveURL(/catalog/i);

  // Click the first product
  await searchResultsPage.openFirstProduct();

  // Verify that the product details page loaded
  await expect(page).not.toHaveURL(/catalog/i);

  // Check if Free Shipping is available
  const isFreeShippingAvailable =
    await productPage.isFreeShippingAvailable();

  if (isFreeShippingAvailable) {

    await expect(productPage.freeShipping.first()).toBeVisible();

    console.log('Free Shipping is available and visible.');

  } else {

    console.log(
      'Free Shipping is not available. Standard Delivery is shown.'
    );

  }

});