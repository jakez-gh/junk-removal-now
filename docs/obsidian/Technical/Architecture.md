# Technical Architecture

## Tech Stack

- **Frontend:** Next.js 14 with React 18
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Testing:** Playwright E2E, Unit tests TBD
- **DevOps:** GitHub Actions, Pre-commit hooks, ESLint, Prettier
- **Package Manager:** npm
- **Node Version:** 18+

## Architecture Decisions

### Framework: Next.js

- **Decision:** Use Next.js for full-stack capabilities
- **Rationale:** Enables API routes, SSG, ISR, built-in optimizations
- **Date:** 2026-01-18

### Testing: Playwright

- **Decision:** Use Playwright for E2E testing
- **Rationale:** Cross-browser support, good CI/CD integration
- **Date:** 2026-01-18

### Code Quality: ESLint + Prettier

- **Decision:** Enforce via pre-commit hooks
- **Rationale:** Prevent bad code from entering repository
- **Date:** 2026-01-18

## Quality Gates

- ✅ TypeScript strict mode
- ✅ ESLint enforcement (pre-commit)
- ✅ Prettier auto-formatting (pre-commit)
- ✅ Playwright E2E tests (CI/CD)
- ✅ Git commit signing
- ✅ Structured commit messages

## Deployment Pipeline

1. Developer commits code (hooks enforce quality)
2. GitHub Actions runs tests
3. Failed tests block merge
4. Manual approval for production
5. Auto-rollback on critical failures

## Related

- [[Guidelines/Git-Workflow]] - Git workflow
