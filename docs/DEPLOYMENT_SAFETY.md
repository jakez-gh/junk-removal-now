# Deployment Safety Checklist

## ⚠️ CRITICAL: Prevent Overwriting Other Projects

This project deploys to:

- **Site Name:** Junk Removal Now
- **Netlify Site ID:** `4b53c516-efae-46ef-a9d3-33df02b24d27`
- **Project URL:** https://celebrated-mermaid-d8b042.netlify.app

## Before Every Deployment:

### 1. Verify Project Identity

```bash
# Check package.json
npm run validate-project

# Expected output: "junk-removal-now"
```

### 2. Run Deployment Validation Tests

```bash
# Run pre-deployment checks
npm test tests/deployment-validation.spec.ts

# All tests MUST pass before deploying
```

### 3. Confirm Netlify Site

```bash
# Check current Netlify configuration
netlify status

# Verify:
# ✓ Current project: celebrated-mermaid-d8b042
# ✓ Project URL: https://celebrated-mermaid-d8b042.netlify.app
```

### 4. Check GitHub Secrets

In GitHub repository settings, verify:

- `NETLIFY_SITE_ID` = `4b53c516-efae-46ef-a9d3-33df02b24d27`
- `NETLIFY_AUTH_TOKEN` = (your auth token)

## Automated Safeguards

### GitHub Actions Pre-Deployment Check

The `deploy.yml` workflow now includes:

1. Project identity validation
2. Netlify site ID verification
3. Deployment safety tests

### Pre-commit Hook

Validates project files to prevent accidental project switching.

## What Went Wrong (Lesson Learned)

**Issue:** Deployed junk-removal-now to office-hero's Netlify site, overwriting it.

**Root Cause:**

- Shared Netlify auth token across projects
- No validation before deployment
- Same GitHub Actions workflow pattern

**Solution:**

- ✅ Deployment validation tests
- ✅ Project identity checks in CI/CD
- ✅ Site-specific environment variables
- ✅ Pre-deployment checklist

## Multi-Project Management

### Recommended Approach: Subdomain Strategy

**Option 1: Separate Netlify Sites (Current)**

- Junk Removal Now: `celebrated-mermaid-d8b042.netlify.app`
- Office Hero: (separate site ID needed)

**Option 2: Custom Domains with Subdomains**

```
junkremovalnow.com         → Junk Removal Now
office-hero.your-domain.com → Office Hero
```

**Option 3: Netlify Deploy Contexts**

```toml
# netlify.toml
[context.production]
  command = "npm run build:junk-removal"

[context.office-hero]
  command = "npm run build:office-hero"
```

## Recovery Plan (If Overwrite Happens Again)

1. **Rollback on Netlify:**

   ```bash
   # List deployments
   netlify deploys

   # Rollback to previous deploy
   netlify rollback [deploy-id]
   ```

2. **Restore from Git:**

   ```bash
   # Find last good commit
   git log --oneline

   # Revert to that commit
   git revert HEAD
   git push origin main
   ```

3. **Redeploy Correct Project:**
   - Verify project identity
   - Run validation tests
   - Deploy with confirmation

## Future Prevention

### For New Projects:

1. Create separate Netlify sites BEFORE starting deployment
2. Document site ID in project README immediately
3. Add deployment validation tests from day one
4. Use project-specific GitHub secrets naming:
   - `JUNK_REMOVAL_NETLIFY_SITE_ID`
   - `OFFICE_HERO_NETLIFY_SITE_ID`

### CI/CD Best Practices:

- Always include project identity validation
- Fail fast if site ID mismatch detected
- Log deployment target before proceeding
- Require manual approval for production deploys (optional)

## Testing the Safeguards

```bash
# Should PASS (correct project)
npm test tests/deployment-validation.spec.ts

# Should FAIL if wrong project
# - package.json name mismatch
# - Wrong site ID in DEPLOYMENT.md
# - Wrong content in homepage
```

## Emergency Contacts

If you accidentally overwrite another project:

1. **Stop:** Immediately stop any running deployments
2. **Notify:** Alert team/stakeholders
3. **Rollback:** Use Netlify dashboard or CLI to rollback
4. **Document:** Add notes to this file about what happened
5. **Improve:** Update validation tests to catch this case

---

**Remember:** Always run `npm test tests/deployment-validation.spec.ts` before deploying!
