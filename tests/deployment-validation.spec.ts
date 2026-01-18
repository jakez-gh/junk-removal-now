/**
 * Pre-deployment validation test
 * Ensures we're deploying the correct project to prevent overwriting other sites
 */

import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Deployment Validation', () => {
  test('should have correct project identification in package.json', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    // Verify this is the junk-removal-now project
    expect(packageJson.name).toBe('junk-removal-now');
    expect(packageJson.description).toContain('Junk Removal');
  });

  test('should have correct Netlify site ID configured', () => {
    const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
    const netlifyToml = fs.readFileSync(netlifyTomlPath, 'utf-8');

    // Verify Netlify config exists
    expect(netlifyToml).toContain('Netlify Configuration for Junk Removal Now');
  });

  test('should have DEPLOYMENT.md with correct site ID', () => {
    const deploymentMdPath = path.join(process.cwd(), 'DEPLOYMENT.md');
    const deploymentMd = fs.readFileSync(deploymentMdPath, 'utf-8');

    // Verify correct Netlify Site ID
    expect(deploymentMd).toContain('4b53c516-efae-46ef-a9d3-33df02b24d27');
    expect(deploymentMd).toContain('celebrated-mermaid-d8b042');
  });

  test('should NOT contain references to other projects', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    // Ensure this is not office-hero or other projects
    expect(packageJson.name).not.toBe('office-hero');
    expect(packageJson.name).not.toBe('office.hero');
  });

  test('homepage should reference Junk Removal Now', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check title and content
    await expect(page).toHaveTitle(/Junk Removal Now/);
    const h1 = page.locator('h1').first();
    await expect(h1).toContainText('Junk Removal Now');
  });

  test('should have correct environment variable documentation', () => {
    const deploymentMdPath = path.join(process.cwd(), 'DEPLOYMENT.md');
    const deploymentMd = fs.readFileSync(deploymentMdPath, 'utf-8');

    // Verify deployment docs mention project name
    expect(deploymentMd).toContain('Junk Removal Now');
    expect(deploymentMd.toLowerCase()).not.toContain('office hero');
    expect(deploymentMd.toLowerCase()).not.toContain('office-hero');
  });
});
