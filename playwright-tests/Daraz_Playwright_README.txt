# Daraz Playwright Automation

## Project Description

This project contains automated UI tests for the Daraz.pk website using Playwright and TypeScript.

The tests use the Page Object Model (POM) to separate page locators and actions from the test scripts.

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code

## Project Structure

playwright-tests
|
+-- pages
|   +-- DarazHomePage.ts
|   +-- SearchResultsPage.ts
|   +-- ProductPage.ts
|
+-- tests
|   +-- daraz.spec.ts
|
+-- playwright.config.ts
+-- package.json

## Setup

### 1. Install Node.js

Make sure Node.js is installed on your computer.

Check it by running:

node --version

### 2. Install Project Dependencies

Open the project folder in VS Code and open the terminal.

Run:

npm install

### 3. Install Playwright Browsers

Run:

npx playwright install

## Running the Tests

### Run all Daraz tests

Run:

npx playwright test tests/daraz.spec.ts

This runs all tests in the Daraz test file.

### Run tests with the browser visible

To watch the tests run in the browser:

npx playwright test tests/daraz.spec.ts --headed

### Run a specific test

For example:

npx playwright test tests/daraz.spec.ts -g "Search for Electronics"

Replace the test name with the name of the test you want to run.

## Automated Test Scenarios

The project contains the following tests:

1. Daraz homepage loads successfully
2. Search for Electronics
3. Apply Planet X brand filter
4. Apply Price Filter 500 to 5000 PKR
5. Validate Product Count
6. Open Product Details Page
7. Verify Free Shipping Availability

## Page Object Model

The page classes contain the locators and actions used by the tests.

### DarazHomePage.ts

Handles:

- Opening the Daraz homepage
- Searching for products

### SearchResultsPage.ts

Handles:

- Product cards
- Product count
- Opening the first product
- Planet X brand filter
- Price filter

### ProductPage.ts

Handles:

- Checking Free Shipping availability

The test file contains the test scenarios and uses these page classes instead of directly managing all page locators.

## Viewing the Test Report

After running the tests, Playwright generates a test report.

To open the report, run:

npx playwright show-report

## GitHub Submission

For submission, upload the complete Playwright project to GitHub.

The repository should include:

- pages folder
- tests folder
- playwright.config.ts
- package.json
- package-lock.json (if present)
- README.md

Do not upload unnecessary generated folders such as:

node_modules/
test-results/
playwright-report/

A .gitignore file can be used to exclude these folders.

## Notes

Make sure you have an active internet connection when running the tests because the tests access the Daraz.pk website.

The website may change its UI or selectors over time, which can cause automated tests to require selector updates.
