# Branch Protection Configuration

This document describes the branch protection rules that should be configured on GitHub.

## Main Branch Protection

Navigate to: Settings > Branches > Branch protection rules > Add rule

### Pattern: `main`

**Protection settings:**

- [x] Require a pull request before merging
  - [x] Require approvals: 1
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require review from Code Owners
  - [ ] Restrict who can dismiss pull request reviews

- [x] Require status checks to pass before merging
  - [x] Require branches to be up to date before merging
  - **Required status checks:**
    - `Code Quality`
    - `E2E Tests`
    - `Security Scanning`
    - `Build Check`

- [x] Require conversation resolution before merging

- [x] Require signed commits

- [x] Require linear history

- [x] Require deployments to succeed before merging
  - **Required environments:**
    - `production`

- [x] Lock branch (make it read-only)

- [ ] Do not allow bypassing the above settings
  - This ensures even administrators must follow the rules

- [ ] Restrict who can push to matching branches
  - Only allow specific users/teams if needed

- [x] Allow force pushes: Never

- [x] Allow deletions: Never

## Develop Branch Protection

### Pattern: `develop`

**Protection settings:**

- [x] Require a pull request before merging
  - [x] Require approvals: 1
  - [ ] Dismiss stale pull request approvals when new commits are pushed

- [x] Require status checks to pass before merging
  - [x] Require branches to be up to date before merging
  - **Required status checks:**
    - `Code Quality`
    - `E2E Tests`
    - `Build Check`

- [x] Require conversation resolution before merging

- [ ] Require signed commits (optional for develop)

- [ ] Require linear history

- [x] Allow force pushes: Never

- [x] Allow deletions: Never

## Feature Branches

### Pattern: `feature/**`

**Protection settings:**

- [ ] Require a pull request before merging (handled by base branch)

- [x] Require status checks to pass before merging
  - **Required status checks:**
    - `Code Quality`
    - `E2E Tests`

## Setting Up via GitHub UI

1. Go to repository settings: <https://github.com/jakez-gh/junk-removal-now/settings>
2. Navigate to "Branches" in the left sidebar
3. Click "Add branch protection rule"
4. Enter the branch name pattern (e.g., `main`)
5. Enable the protections listed above
6. Click "Create" or "Save changes"

## Setting Up via GitHub CLI

```bash
# Install GitHub CLI if not already installed
# https://cli.github.com/

# Main branch protection
gh api repos/jakez-gh/junk-removal-now/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["Code Quality","E2E Tests","Security Scanning","Build Check"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null \
  --field required_signatures=true \
  --field required_linear_history=true \
  --field allow_force_pushes=false \
  --field allow_deletions=false

# Develop branch protection
gh api repos/jakez-gh/junk-removal-now/branches/develop/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["Code Quality","E2E Tests","Build Check"]}' \
  --field enforce_admins=false \
  --field required_pull_request_reviews='{"required_approving_review_count":1}' \
  --field restrictions=null \
  --field required_linear_history=false \
  --field allow_force_pushes=false \
  --field allow_deletions=false
```

## Verification

After setting up branch protection, verify by:

1. Attempting to push directly to `main` (should fail)
2. Creating a PR without passing tests (should block merge)
3. Creating a PR without review approval (should block merge)
4. Creating a PR with unsigned commits (should fail on main)

## CODEOWNERS File

Create a `.github/CODEOWNERS` file to require specific reviewers:

```text
# Default owners for everything
* @jakez-gh

# Documentation requires docs team review
/docs/ @jakez-gh @docs-team

# Infrastructure changes require devops review
/.github/ @jakez-gh @devops-team
/playwright.config.ts @jakez-gh @devops-team

# Security-sensitive files require security review
/SECURITY.md @jakez-gh @security-team
```

## Commit Signing

To enforce signed commits, developers must set up GPG signing:

### Setup GPG Signing

```bash
# Generate GPG key
gpg --full-generate-key

# List GPG keys
gpg --list-secret-keys --keyid-format=long

# Export public key
gpg --armor --export YOUR_KEY_ID

# Add public key to GitHub:
# GitHub Settings > SSH and GPG keys > New GPG key

# Configure git to sign commits
git config --global user.signingkey YOUR_KEY_ID
git config --global commit.gpgsign true
git config --global tag.gpgsign true

# For Windows, configure GPG program
git config --global gpg.program "C:/Program Files (x86)/GnuPG/bin/gpg.exe"
```

## Benefits

**Security:**

- Prevents unauthorized code changes
- Requires code review for all changes
- Ensures all commits are attributed and signed
- Blocks malicious or accidental direct pushes

**Quality:**

- Enforces automated testing before merge
- Requires build success before deployment
- Maintains clean git history
- Enables automated rollback on failures

**Compliance:**

- Provides audit trail through signed commits
- Enforces organizational policies
- Tracks who approved what changes
- Enables compliance reporting

## Automated Checks

The following checks must pass before merging:

1. **Code Quality** - ESLint, Prettier, TypeScript validation
2. **E2E Tests** - All Playwright tests across 3 browsers
3. **Security Scanning** - npm audit for vulnerabilities
4. **Build Check** - Production build must succeed

## CI/CD Integration

Tests and quality gates automatically run on:

- Every push to feature branches
- Every pull request to main/develop
- Every commit to protected branches

Failed checks block the merge button in GitHub UI.

## Rollback Strategy

If deployment fails:

1. Automated rollback triggered immediately
2. Previous commit is checked out
3. Application rebuilt from previous version
4. Automatic redeployment of stable version
5. Team notified of rollback completion

## Maintenance

Review and update branch protection rules:

- **Monthly**: Verify rules are still appropriate
- **Quarterly**: Audit who has bypass permissions
- **Annually**: Review and update required status checks

---

**Last Updated**: 2026-01-18

See [Git Workflow Guidelines](../docs/obsidian/Guidelines/Git-Workflow.md) for day-to-day git usage.
