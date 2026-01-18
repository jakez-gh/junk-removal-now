import { test, expect } from '@playwright/test';

test('Services page loads and displays all services', async ({ page }) => {
  await page.goto('/services');

  // Check page title
  await expect(page).toHaveTitle(/Our Services/);

  // Check main heading
  const heading = page.locator('h1');
  await expect(heading).toContainText('Our Services');

  // Check service cards are visible
  const serviceCards = page.locator('[class*="shadow-md"]');
  const count = await serviceCards.count();
  expect(count).toBeGreaterThan(0);

  // Check "Why Choose Us" section
  const whyChooseHeading = page.locator('text=Why Choose Us');
  await expect(whyChooseHeading).toBeVisible();

  // Check Book Now button
  const bookButton = page.locator('button:has-text("Book Now")');
  await expect(bookButton).toBeVisible();
  await expect(bookButton).toBeEnabled();
});

test('About page displays company information', async ({ page }) => {
  await page.goto('/about');

  // Check page title
  await expect(page).toHaveTitle(/About Us/);

  // Check main heading
  const heading = page.locator('h1');
  await expect(heading).toContainText('About');

  // Check "Who We Are" section
  const whoWeAre = page.locator('text=Who We Are');
  await expect(whoWeAre).toBeVisible();

  // Check "Our Process" section
  const ourProcess = page.locator('text=Our Process');
  await expect(ourProcess).toBeVisible();

  // Check process steps are numbered
  const steps = page.locator('[class*="rounded-full"]');
  expect(await steps.count()).toBe(4);
});

test('Contact page displays form and contact info', async ({ page }) => {
  await page.goto('/contact');

  // Check page title
  await expect(page).toHaveTitle(/Contact Us/);

  // Check main heading
  const heading = page.locator('h1');
  await expect(heading).toContainText('Contact');

  // Check contact form fields
  const nameField = page.locator('input#name');
  const emailField = page.locator('input#email');
  const phoneField = page.locator('input#phone');
  const messageField = page.locator('textarea#message');

  await expect(nameField).toBeVisible();
  await expect(emailField).toBeVisible();
  await expect(phoneField).toBeVisible();
  await expect(messageField).toBeVisible();

  // Check submit button
  const submitButton = page.locator('button:has-text("Get Free Estimate")');
  await expect(submitButton).toBeVisible();
  await expect(submitButton).toBeEnabled();

  // Check hours section
  const hoursHeading = page.locator('text=Hours');
  await expect(hoursHeading).toBeVisible();
});

test('Contact form submission works', async ({ page }) => {
  await page.goto('/contact');

  // Fill out the form
  await page.fill('input#name', 'John Doe');
  await page.fill('input#email', 'john@example.com');
  await page.fill('input#phone', '555-1234');
  await page.selectOption('select#serviceType', 'furniture');
  await page.fill('textarea#message', 'Need furniture removal');

  // Submit the form
  await page.click('button:has-text("Get Free Estimate")');

  // Check success message
  const successMessage = page.locator('text=Thank You!');
  await expect(successMessage).toBeVisible();

  const thankYouText = page.locator("text=We've received your inquiry");
  await expect(thankYouText).toBeVisible();
});

test('Navigation links work between pages', async ({ page }) => {
  await page.goto('/');

  // Click Services link in footer
  await page.click('a[href="/services"]:has-text("View Services")');
  await expect(page).toHaveURL(/\/services/);

  // Click About link in footer
  await page.click('a[href="/about"]:has-text("Read More")');
  await expect(page).toHaveURL(/\/about/);

  // Navigate back to home
  await page.goto('/');

  // Click Contact link in footer
  await page.click('a[href="/contact"]:has-text("Contact Us")');
  await expect(page).toHaveURL(/\/contact/);
});
