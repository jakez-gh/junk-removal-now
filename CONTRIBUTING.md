# Contributing to Junk Removal Now

Thank you for your interest in contributing to Junk Removal Now! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/jakez-gh/junk-removal-now.git
cd junk-removal-now

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/your-feature-name
```

### Install Recommended Extensions (VS Code)

1. ESLint - for code quality
2. Prettier - for code formatting
3. Tailwind CSS IntelliSense - for styling
4. Playwright Test - for running tests
5. Git Graph - for visualizing commits

## Development Workflow

### 1. Create a Feature Branch

```bash
# Always branch from main for new features
git checkout main
git pull origin main
git checkout -b feature/descriptive-name

# Or for bug fixes
git checkout -b fix/bug-description

# Or for documentation
git checkout -b docs/doc-description
```

### 2. Make Your Changes

Follow these guidelines when making changes:

- **One feature per branch** - Keep changes focused and atomic
- **Test frequently** - Run tests as you develop
- **Follow code style** - Prettier and ESLint will help
- **Add tests** - Include E2E tests for UI changes
- **Update docs** - Update relevant documentation in `docs/obsidian/`

### 3. Run Quality Checks Locally

Before committing, ensure all checks pass:

```bash
# Run type checking
npm run type-check

# Run linter
npm run lint

# Format code (auto-fixes formatting issues)
npm run format

# Run tests
npm test

# Build for production
npm run build
```

### 4. Commit Your Changes

All commits must follow the Conventional Commit format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Commit Types

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, missing semicolons, etc.)
- **refactor:** Code refactoring without feature changes
- **test:** Adding or updating tests
- **chore:** Build system, dependencies, or tooling changes
- **perf:** Performance improvements

#### Commit Scope

Choose a scope relevant to your changes:

- `pages` - Page files
- `components` - React components
- `tests` - E2E tests
- `styles` - CSS/Tailwind changes
- `config` - Configuration files
- `docs` - Documentation
- `deps` - Dependency updates

#### Commit Examples

```bash
# Feature with body
git commit -m "feat(pages): add FAQ section to services page

Add a new collapsible FAQ section on the services page
to answer common customer questions about junk removal
process and pricing.

This reduces support requests and improves user engagement.
Closes #34"

# Bug fix
git commit -m "fix(components): correct form input focus state

Update focus state styling for contact form inputs
to match Tailwind design system and improve accessibility.

Fixes #42"

# Documentation
git commit -m "docs(contributing): add development workflow section

Add detailed instructions for the development workflow
to make it easier for new contributors to understand
the process.

Refs #8"
```

### 5. Create a Pull Request

1. Push your branch to GitHub:

```bash
git push origin feature/your-feature-name
```

2. Create a Pull Request on GitHub with:
   - Clear title describing the change
   - Detailed description of what changed and why
   - Link to related issues (if any)
   - Screenshots for UI changes

3. Ensure all automated checks pass:
   - ✅ Tests pass
   - ✅ Build succeeds
   - ✅ Linting passes
   - ✅ Type checking passes

4. Request code review from at least one team member

5. Address feedback and update your PR

6. Once approved, merge your PR

## Testing Guidelines

### Writing Tests

All UI changes should include E2E tests. Tests go in `tests/e2e/`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('New Feature', () => {
  test('should display correctly', async ({ page }) => {
    await page.goto('/');
    const element = page.locator('[data-testid="my-feature"]');
    await expect(element).toBeVisible();
  });

  test('should handle user interaction', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('button:has-text("Click me")');
    await button.click();
    const result = page.locator('[data-testid="result"]');
    await expect(result).toHaveText('Clicked!');
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npx playwright test tests/e2e/homepage.spec.ts

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests with visible browser
npm run test:headed

# Debug mode
npm run test:debug

# View test report
npx playwright show-report
```

### Test Best Practices

- Use `data-testid` attributes for reliable element selection
- Test user interactions, not implementation details
- Include both positive and negative test cases
- Use meaningful test descriptions
- Keep tests focused and independent

## Code Style Guidelines

### TypeScript

- Enable strict mode - all new code must be type-safe
- Avoid `any` types - use proper type annotations
- Use interfaces over type aliases when possible
- Document complex types with comments

```typescript
// Good
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

// Avoid
type UserProfile = {
  id: string;
  name: string;
  email: string;
};
```

### React Components

- Use functional components with hooks
- Keep components focused - single responsibility
- Extract reusable logic into custom hooks
- Document complex props with JSDoc comments

```typescript
interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary';
  /** Click handler function */
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

### CSS/Tailwind

- Use Tailwind utility classes, not custom CSS when possible
- Avoid inline styles
- Use consistent spacing and sizing
- Follow mobile-first responsive design

```typescript
// Good
<div className="flex flex-col gap-4 p-4 md:p-6 lg:p-8">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
  <p className="text-gray-600">Description</p>
</div>

// Avoid
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Title</h1>
</div>
```

## Documentation Updates

When making changes that affect documentation, update the relevant files:

### Obsidian Vault

Update documentation in `docs/obsidian/`:

- **Implementation Progress** - Track completed features
- **Architecture** - Document major design decisions
- **API Reference** - Document new endpoints
- **Guidelines** - Update if workflows change

### Code Comments

- Add JSDoc comments to functions and components
- Explain why, not what - the code shows what it does
- Keep comments current with code changes

````typescript
/**
 * Formats a date string for display.
 *
 * @param date - The date to format
 * @param format - The format string (e.g., 'YYYY-MM-DD')
 * @returns Formatted date string
 *
 * @example
 * ```typescript
 * formatDate(new Date(), 'YYYY-MM-DD');
 * // Returns: "2026-01-18"
 * ```
 */
export function formatDate(date: Date, format: string): string {
  // Implementation...
}
````

## Common Development Tasks

### Adding a New Page

1. Create the page file in `pages/`:

```typescript
// pages/new-page.tsx
import Head from 'next/head';

export default function NewPage() {
  return (
    <>
      <Head>
        <title>New Page - Junk Removal Now</title>
        <meta name="description" content="Description of new page" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">New Page</h1>
        {/* Content */}
      </main>
    </>
  );
}
```

2. Add tests in `tests/e2e/new-page.spec.ts`
3. Add link to navigation in `pages/_app.tsx` if needed
4. Update sitemap documentation

### Adding a New Component

1. Create the component in `components/`:

```typescript
// components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

export function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

2. Add tests if component is complex
3. Document in Storybook if available
4. Update `components/index.ts` for exports

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update a specific package
npm update package-name

# Update all packages
npm update

# Install new package
npm install package-name

# Install dev dependency
npm install --save-dev package-name
```

## Troubleshooting

### Pre-commit Hook Failures

If pre-commit hooks fail:

```bash
# Check what failed
npm run lint     # ESLint errors
npm run format:check  # Formatting issues
npm run type-check    # TypeScript errors

# Auto-fix most issues
npm run format   # Fixes formatting
npm run lint -- --fix  # Fixes most linting errors
```

### Test Failures

```bash
# Run tests with more details
npm run test:debug

# Update test snapshots (if needed)
npx playwright test --update-snapshots

# Check browser compatibility
npm run test -- --project=firefox
npm run test -- --project=webkit
```

### Build Issues

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild from scratch
npm run build

# Check for TypeScript errors
npm run type-check
```

## Performance Considerations

When making changes, consider performance:

- Minimize bundle size - avoid large dependencies
- Use code splitting for large features
- Optimize images and assets
- Implement lazy loading for components
- Profile performance with browser DevTools

## Accessibility

Ensure changes are accessible to all users:

- Use semantic HTML elements
- Add alt text to images
- Ensure color contrast meets WCAG standards
- Test with keyboard navigation
- Include ARIA labels where needed

```typescript
// Good accessibility practice
<button
  aria-label="Close menu"
  aria-pressed={isOpen}
  onClick={handleClose}
>
  ✕
</button>
```

## Security Considerations

- Never commit secrets or credentials
- Validate and sanitize user inputs
- Use HTTPS for external resources
- Keep dependencies updated
- Review code for SQL injection risks (if applicable)
- Follow OWASP guidelines

## Getting Help

- **Questions?** Open a GitHub Discussion
- **Found a bug?** Open a GitHub Issue
- **Need advice?** Ask in the project Discord/Slack
- **Documentation unclear?** Suggest improvements

## Recognition

Contributors are recognized in:

- GitHub commit history
- Project CONTRIBUTORS.md file
- Release notes for major contributions

## License

By contributing to Junk Removal Now, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Junk Removal Now!**

Your contributions help improve the platform for customers and the development team. We appreciate your time and effort.
