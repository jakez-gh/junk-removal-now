# Junk Removal Now

Professional junk removal and furniture disposal services website and booking platform.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git with GPG signing enabled

### Installation

```bash
# Install dependencies
npm install

# Set up pre-commit hooks
npm run prepare

# Create .env.local with your configuration
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
# Run E2E tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed
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

## Project Structure

```
junk-removal-now/
├── .github/workflows/       # CI/CD workflows
├── components/              # React components
├── docs/
│   └── obsidian/           # Obsidian documentation vault
├── pages/                  # Next.js pages
├── public/                 # Static assets
├── styles/                 # Global styles
├── tests/
│   ├── e2e/               # Playwright E2E tests
│   └── screenshots/       # Test screenshots
├── types/                 # TypeScript types
├── utils/                 # Utility functions
├── .eslintrc.json        # ESLint configuration
├── .prettierrc            # Prettier configuration
├── next.config.js        # Next.js configuration
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Quality Gates

This repository enforces strict code quality standards:

### Pre-commit Hooks

- ✅ ESLint validation
- ✅ Prettier formatting
- ✅ Commit message validation
- ✅ Type checking

### CI/CD Pipeline

- ✅ Automated testing
- ✅ Code coverage checks
- ✅ Security scanning
- ✅ Test failure blocks merge

### Commit Requirements

- ✅ GPG signature required
- ✅ Structured message format
- ✅ Issue references required
- ✅ Decision reasoning in body

## Documentation

See [docs/obsidian/README.md](docs/obsidian/README.md) for detailed project documentation.

### Key Documents

- [Project Overview](docs/obsidian/Project/Overview.md)
- [Technical Architecture](docs/obsidian/Technical/Architecture.md)
- [Git Workflow](docs/obsidian/Guidelines/Git-Workflow.md)
- [Business Operations](docs/obsidian/Business/Operations.md)

## Development Guidelines

See [Git Workflow Guidelines](docs/obsidian/Guidelines/Git-Workflow.md) for detailed guidelines.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:

```
feat(booking): add calendar date picker

Implement calendar-based date selection for service booking
to improve user experience and reduce booking errors.

Fixes #42
```

## Deployment

Deployments are handled automatically via CI/CD pipeline:

1. **Test Stage**: All tests must pass
2. **Build Stage**: Application is built for production
3. **Review Stage**: Manual approval required
4. **Deploy Stage**: Automatic rollback on critical failures

## Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes with proper commit messages
3. Ensure all tests pass: `npm test`
4. Push to your branch: `git push origin feature/my-feature`
5. Create a Pull Request

All PRs require:

- Passing tests
- Code review approval
- No merge conflicts

## License

MIT

## Contact

For inquiries about Junk Removal Now services, visit [www.junkremovalnow.com](https://www.junkremovalnow.com)

---

**Last Updated:** 2026-01-18
