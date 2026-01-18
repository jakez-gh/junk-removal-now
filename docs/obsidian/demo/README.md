# Demo Screenshots

This folder contains automatically generated screenshots from E2E tests for documentation purposes.

## Organization

```
demo/
├── screenshots/
│   ├── admin/           # Admin interface screenshots
│   ├── homepage/        # Homepage screenshots
│   └── pages/           # Other page screenshots
└── README.md            # This file
```

## Screenshot Naming Convention

Screenshots follow this pattern:

- `##-descriptive-name.png` - Where ## is a sequence number
- Examples:
  - `01-admin-login.png`
  - `02-homepage-hero.png`
  - `03-services-grid.png`

## How Screenshots Are Generated

Screenshots are automatically captured during E2E test runs using Playwright.

### Run Tests to Generate Screenshots

```bash
# Run all tests (generates screenshots)
npm test

# Run specific test file
npx playwright test tests/e2e/admin.spec.ts

# Run with UI to see tests execute
npm run test:ui
```

### Screenshot Location

All test screenshots are saved to: `docs/obsidian/demo/screenshots/`

This location is:

- ✅ Inside the obsidian vault for easy documentation
- ✅ Git-tracked for version history
- ✅ Organized by test category
- ✅ Automatically updated on test runs

## Using Screenshots in Documentation

### In Obsidian

```markdown
![[demo/screenshots/admin/01-admin-login.png]]
```

### In Markdown

```markdown
![Admin Login](screenshots/admin/01-admin-login.png)
```

## Screenshot Categories

### Admin Interface (`admin/`)

- Login page
- Dashboard views
- Content editing interfaces
- Settings pages

### Homepage (`homepage/`)

- Hero section
- Services grid
- Testimonials
- Call-to-action buttons

### Pages (`pages/`)

- Services page
- About page
- Contact page with form

## Maintenance

- Screenshots are regenerated on each test run
- Old screenshots are overwritten
- Delete unused screenshots manually if needed
- Keep filenames descriptive and sequential

## Related Documentation

- [Admin User Guide](../DEE_ADMIN_GUIDE.md)
- [Admin Interface Preview](../ADMIN_INTERFACE_PREVIEW.md)
- [Testing Documentation](../../../README.md#testing)
