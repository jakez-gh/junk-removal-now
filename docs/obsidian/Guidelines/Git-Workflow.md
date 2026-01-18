# Git Workflow Guidelines

## Commit Message Format

All commits must follow this structure for maintainability and automation:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that don't affect code meaning (formatting)
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `perf:` Code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to build process, dependencies, or tools
- `ci:` Changes to CI/CD configuration

### Scope

The section of the codebase affected. Examples:

- `components`
- `pages`
- `api`
- `auth`
- `ui`

### Subject

- Use imperative, present tense
- Don't capitalize
- No period at the end
- Max 50 characters

### Body

- Wrap at 72 characters
- Explain **what** and **why**, not **how**
- Should reference any related issues

### Footer

- Reference issues using `Fixes #123`
- Note breaking changes with `BREAKING CHANGE:`

## Examples

```
feat(auth): add JWT token refresh mechanism

Implement automatic token refresh on 401 responses to improve
user experience when tokens expire during active sessions.

Fixes #42
```

```
fix(components): correct button click handler in Header

The onClick handler wasn't properly passing event arguments
to parent handlers, causing actions to fail silently.

Fixes #156
```

## Pre-commit Checks

Before any commit, these checks run automatically:

1. ESLint validation
2. Prettier formatting
3. Type checking
4. Commit message validation

## Signing Commits

All commits MUST be signed for audit trail:

```bash
git commit -S -m "feat(scope): description"
```

Configure once:

```bash
git config user.signingkey <your-key-id>
git config commit.gpgsign true
```

## Branch Naming

- Feature: `feature/short-description`
- Bugfix: `fix/short-description`
- Hotfix: `hotfix/short-description`
- Release: `release/version-number`

## PR Guidelines

- Title follows commit message format
- Description explains context
- Link related issues
- Request appropriate reviewers
- Ensure CI passes before merge
