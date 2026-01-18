import { test, expect } from '@playwright/test';

test('Homepage loads and displays title', async ({ page }) => {
  await page.goto('/');

  // Check title
  await expect(page).toHaveTitle(/Junk Removal Now/);

  // Check main heading exists
  const heading = page.locator('h1');
  await expect(heading).toContainText('Junk Removal Now');

  // Check services section exists
  const servicesHeading = page.locator('text=Our Services');
  await expect(servicesHeading).toBeVisible();

  // Check service cards exist
  const serviceCards = page.locator('[class*="shadow-md"]');
  await expect(serviceCards).toHaveCount(3);
});

test('Book a Service button is clickable', async ({ page }) => {
  await page.goto('/');

  const bookButton = page.locator('button:has-text("Book a Service")');
  await expect(bookButton).toBeVisible();
  await expect(bookButton).toBeEnabled();

  // Verify button has expected styling classes
  const buttonClass = await bookButton.getAttribute('class');
  expect(buttonClass).toContain('bg-blue-600');
});

test('Services are displayed in a responsive grid', async ({ page }) => {
  await page.goto('/');

  // Get all service cards
  const serviceCards = page.locator('[class*="shadow-md"]');
  const count = await serviceCards.count();

  expect(count).toBe(3);

  // Check each card has a title
  for (let i = 0; i < count; i++) {
    const card = serviceCards.nth(i);
    const title = card.locator('h3');
    await expect(title).toBeVisible();
  }
});
