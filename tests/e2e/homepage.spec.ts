import { test, expect } from '@playwright/test';
import { TestUtils } from '../utils/test-utils';

test.describe('Homepage Tests', () => {
  test('Homepage loads and displays title', async ({ page }) => {
    await page.goto('/');
    await TestUtils.waitForPageLoad(page);

    // Capture initial state
    await TestUtils.captureScreenshot(page, 'homepage', '01-initial-load');

    // Check title
    await expect(page).toHaveTitle(/Junk Removal Now/);

    // Check main heading exists
    const heading = page.locator('h1');
    await expect(heading).toContainText('Junk Removal Now');

    // Check services section exists
    const servicesHeading = page.locator('h2:has-text("Our Services")').first();
    await expect(servicesHeading).toBeVisible();

    // Check service cards exist in services section
    const serviceSection = page.locator('section').nth(1);
    const serviceCards = serviceSection.locator('[class*="shadow-md"]');
    await expect(serviceCards).toHaveCount(3);

    // Capture responsive screenshots
    await TestUtils.captureResponsiveScreenshots(page, 'homepage', 'full-page');
  });

  test('Book a Service button is clickable', async ({ page }) => {
    await page.goto('/');
    await TestUtils.waitForPageLoad(page);

    const bookButton = page.locator('button:has-text("Book a Service")');
    await expect(bookButton).toBeVisible();
    await expect(bookButton).toBeEnabled();

    // Capture button state
    await TestUtils.captureScreenshot(page, 'homepage', '02-book-button');

    // Verify button has expected styling classes
    const buttonClass = await bookButton.getAttribute('class');
    expect(buttonClass).toContain('bg-green-700');
  });

  test('Services are displayed in a responsive grid', async ({ page }) => {
    await page.goto('/');
    await TestUtils.waitForPageLoad(page);

    // Get all service cards in the main services section (not footer)
    const serviceSection = page.locator('section').nth(1);
    const serviceCards = serviceSection.locator('[class*="shadow-md"]');
    const count = await serviceCards.count();

    // New layout has 3 service cards plus 3 feature cards (donation, recycle, judgment-free)
    expect(count).toBeGreaterThanOrEqual(3);

    // Check each card has a title
    for (let i = 0; i < count; i++) {
      const card = serviceCards.nth(i);
      const title = card.locator('h3');
      await expect(title).toBeVisible();
    }

    // Capture services section
    await TestUtils.captureScreenshot(page, 'homepage', '03-services-grid');
  });
});
