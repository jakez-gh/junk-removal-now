import { Page } from '@playwright/test';
import path from 'path';
import fs from 'fs/promises';

/**
 * Test utilities for capturing and managing screenshots
 */
export class TestUtils {
  /**
   * Capture a screenshot with a descriptive name and store it in the obsidian demo folder
   * @param page - Playwright page object
   * @param testName - Name of the test
   * @param screenshotName - Descriptive name for the screenshot
   */
  static async captureScreenshot(
    page: Page,
    testName: string,
    screenshotName: string
  ): Promise<void> {
    const screenshotsDir = path.join(
      process.cwd(),
      'docs',
      'obsidian',
      'demo',
      'screenshots',
      testName
    );

    // Ensure directory exists
    await fs.mkdir(screenshotsDir, { recursive: true });

    const screenshotPath = path.join(screenshotsDir, `${screenshotName}.png`);

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });

    console.log(`📸 Screenshot saved: ${screenshotPath}`);
  }

  /**
   * Wait for page to be fully loaded including network idle
   * @param page - Playwright page object
   */
  static async waitForPageLoad(page: Page): Promise<void> {
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');
  }

  /**
   * Capture screenshots at multiple viewport sizes for responsive testing
   * @param page - Playwright page object
   * @param testName - Name of the test
   * @param pageName - Name of the page being tested
   */
  static async captureResponsiveScreenshots(
    page: Page,
    testName: string,
    pageName: string
  ): Promise<void> {
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 667 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await this.waitForPageLoad(page);
      await this.captureScreenshot(page, testName, `${pageName}-${viewport.name}`);
    }
  }
}
