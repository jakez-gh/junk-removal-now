import { test, expect } from '@playwright/test';
import { TestUtils } from '../utils/test-utils';

/**
 * Admin Interface Tests
 *
 * These tests verify the admin interface loads and captures screenshots
 * for documentation in docs/obsidian/demo/screenshots
 */

test.describe('Admin Interface', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport for consistent screenshots
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Admin login page loads correctly', async ({ page }) => {
    await page.goto('/admin');
    await TestUtils.waitForPageLoad(page);

    // Wait for Netlify Identity widget to load
    await page.waitForTimeout(2000);

    await TestUtils.captureScreenshot(page, 'admin', '01-admin-login');

    // Verify key elements exist
    const title = await page.textContent('title');
    expect(title).toContain('Admin');
  });

  test('Admin interface structure documentation', async ({ page }) => {
    // Navigate to admin page
    await page.goto('/admin');
    await TestUtils.waitForPageLoad(page);
    await page.waitForTimeout(2000);

    // Capture initial state
    await TestUtils.captureScreenshot(page, 'admin', '02-admin-initial-load');

    // Note: Actual CMS interface requires authentication
    // These screenshots show the public-facing parts
  });

  test('Admin configuration is valid', async ({ page }) => {
    // Check that config.yml exists and is accessible
    const response = await page.goto('/admin/config.yml');
    expect(response?.status()).toBe(200);

    const content = await response?.text();
    expect(content).toContain('backend');
    expect(content).toContain('git-gateway');
    expect(content).toContain('collections');
  });
});

test.describe('Admin Documentation Screenshots', () => {
  test('Capture admin workflow screens', async ({ page }) => {
    // Main site pages for context
    await page.goto('/');
    await TestUtils.waitForPageLoad(page);
    await TestUtils.captureScreenshot(page, 'admin', '03-public-homepage');

    // Services page
    await page.goto('/services');
    await TestUtils.waitForPageLoad(page);
    await TestUtils.captureScreenshot(page, 'admin', '04-public-services');

    // About page
    await page.goto('/about');
    await TestUtils.waitForPageLoad(page);
    await TestUtils.captureScreenshot(page, 'admin', '05-public-about');

    // Contact page
    await page.goto('/contact');
    await TestUtils.waitForPageLoad(page);
    await TestUtils.captureScreenshot(page, 'admin', '06-public-contact');
  });

  test('Capture responsive views for documentation', async ({ page }) => {
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 667 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      await page.goto('/');
      await TestUtils.waitForPageLoad(page);
      await TestUtils.captureScreenshot(page, 'admin', `07-responsive-${viewport.name}`);
    }
  });
});
