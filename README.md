# Junk Removal Now

[![Tests](https://github.com/jakez-gh/junk-removal-now/actions/workflows/tests.yml/badge.svg)](https://github.com/jakez-gh/junk-removal-now/actions/workflows/tests.yml)
[![Deploy](https://github.com/jakez-gh/junk-removal-now/actions/workflows/deploy.yml/badge.svg)](https://github.com/jakez-gh/junk-removal-now/actions/workflows/deploy.yml)
[![GitHub](https://img.shields.io/badge/GitHub-public-brightgreen)](https://github.com/jakez-gh/junk-removal-now)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

Professional junk removal and furniture disposal services website and booking platform.

> **Live Site:** https://celebrated-mermaid-d8b042.netlify.app  
> Built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Playwright Testing**

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** 9+
- **Git** with GPG configured (optional but recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/jakez-gh/junk-removal-now.git
cd junk-removal-now

# Install dependencies
npm install

# Set up pre-commit hooks (automatic with npm install)
npm run prepare

# Create environment configuration
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Testing

```bash
# Run all E2E tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# View test reports
npx playwright show-report
```

### Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check

# Type check
npm run type-check
```

### Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
junk-removal-now/
├── .github/
│   └── workflows/           # CI/CD configuration
│       ├── tests.yml        # Automated testing on push/PR
│       └── deploy.yml       # Production deployment workflow
├── .vscode/                 # VS Code configuration
├── components/              # React components
├── docs/
│   └── obsidian/           # Obsidian documentation vault
│       ├── Project/        # Project management docs
│       ├── Business/       # Business operations
│       ├── Technical/      # Architecture & decisions
│       ├── Guidelines/     # Development guidelines
│       └── Research/       # Research & background
├── pages/                   # Next.js pages
│       ├── index.tsx       # Home page
│       ├── services.tsx    # Services listing
│       ├── about.tsx       # About page
│       ├── contact.tsx     # Contact & booking form
│       ├── _app.tsx        # App wrapper
│       └── _document.tsx   # HTML document
├── public/                  # Static assets
├── styles/
│       └── globals.css     # Global styles
├── tests/
│       ├── e2e/           # Playwright E2E tests
│       └── screenshots/   # Test screenshots
├── types/                   # TypeScript type definitions
├── utils/                   # Utility functions
├── hooks/                   # React hooks
├── .eslintrc.json          # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── playwright.config.ts    # Playwright configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
└── README.md              # This file
```

## 🎯 Features

### Website Pages

- **Home** - Hero section with service overview and CTAs
- **Services** - Detailed listing of 6 service categories with features
- **About** - Company mission, values, and process explanation
- **Contact** - Booking form with service type selection

### Core Capabilities

- ✅ Responsive design across all screen sizes
- ✅ Fast static site generation with Next.js
- ✅ TypeScript for type safety
- ✅ Comprehensive E2E testing with Playwright
- ✅ Form validation and submission handling
- ✅ SEO-friendly structure
- ✅ Security headers configured
- ✅ Production-ready build optimization

## 🛠 DevSecOps & Quality Gates

### Pre-commit Hooks

Automatically run before every commit:

- ✅ **ESLint** validation - code quality
- ✅ **Prettier** formatting - consistent style
- ✅ **TypeScript** type checking - type safety
- ✅ **Commit message** validation - conventional format

### CI/CD Pipeline

GitHub Actions automatically runs on every push and PR:

- ✅ **Tests** - 24 E2E tests across 3 browsers
- ✅ **Build** - Production build verification
- ✅ **Security** - npm audit scanning
- ✅ **Type Check** - TypeScript validation
- ✅ **Linting** - Code quality checks

### Deployment

- Manual approval required for production
- Automatic rollback on deployment failure
- All tests must pass before merge
- Code review required for main branch

## 📊 Testing

### Test Coverage

- 24 E2E tests across Chromium, Firefox, and WebKit
- Homepage functionality tests
- Page routing and navigation tests
- Form submission and validation tests
- Service card rendering tests

### Run Tests

```bash
npm test              # Run all tests
npm run test:ui      # Interactive test UI
npm run test:headed  # See browser while testing
npm run test:debug   # Debug mode
```

### Test Structure

Tests are organized by page in `tests/e2e/`:

- `homepage.spec.ts` - Homepage tests
- `pages.spec.ts` - Services, About, Contact tests

## 📝 Commit Message Format

All commits must follow conventional commit format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only
- `style:` Formatting changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Tooling/config changes

### Example

```bash
git commit -m "feat(contact): add form validation

Implement client-side validation for contact form
to improve UX and prevent invalid submissions.

Fixes #42"
```

## 🚀 Deployment

### Prerequisites

1. GitHub repository access
2. Deployment environment configured
3. Environment variables set

### Deployment Process

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git commit -m "feat(scope): description"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
# - All checks must pass
# - Code review required

# Merge to develop branch after approval
# - Triggers tests automatically

# Merge to main for production
# - Triggers deployment workflow
# - Requires manual approval
```

## 📚 Documentation

Comprehensive documentation is available in the Obsidian vault at `docs/obsidian/`:

- [Project Overview](docs/obsidian/Project/Overview.md)
- [Technical Architecture](docs/obsidian/Technical/Architecture.md)
- [Implementation Progress](docs/obsidian/Project/Implementation-Progress.md)
- [Git Workflow Guide](docs/obsidian/Guidelines/Git-Workflow.md)
- [Business Operations](docs/obsidian/Business/Operations.md)
- [Research Notes](docs/obsidian/Research/)

## 🔧 Configuration

### Environment Variables

Create `.env.local` with your configuration:

```bash
NEXT_PUBLIC_SITE_NAME=Junk Removal Now
NEXT_PUBLIC_SITE_URL=https://www.junkremovalnow.com
API_BASE_URL=http://localhost:3000/api
NODE_ENV=development
```

See [.env.example](.env.example) for all available options.

### VSCode Settings

Recommended extensions and settings are in `.vscode/`:

**Recommended Extensions:**

- ESLint - Code quality
- Prettier - Code formatting
- Tailwind CSS IntelliSense - CSS help
- Playwright Test - Test execution
- Git Graph - Git visualization
- GitHub Copilot - AI assistance

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes following coding standards
3. Ensure all tests pass locally
4. Commit with proper message format
5. Push and create a Pull Request
6. Await code review and approval

### Code Standards

- **Formatting:** Prettier (enforced via pre-commit)
- **Linting:** ESLint (enforced via pre-commit)
- **Types:** TypeScript strict mode (enforced via pre-commit)
- **Testing:** E2E tests required for UI changes
- **Documentation:** Update docs/obsidian for significant changes

## 🐛 Reporting Issues

If you find a bug or have a suggestion:

1. Check [existing issues](https://github.com/jakez-gh/junk-removal-now/issues)
2. Create a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce (if applicable)
   - Expected vs actual behavior

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For inquiries about Junk Removal Now services:

- **Website:** [www.junkremovalnow.com](https://www.junkremovalnow.com)
- **Email:** contact@junkremovalnow.com
- **Owner:** Diane Bennett

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Tested with [Playwright](https://playwright.dev/)
- Code quality with [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

---

**Current Version:** 1.0.0
**Last Updated:** 2026-01-18
**Status:** Active Development
**Repository:** [GitHub](https://github.com/jakez-gh/junk-removal-now)
