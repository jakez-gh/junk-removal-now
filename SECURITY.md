# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in Junk Removal Now, please **do not** create a public GitHub issue. Instead, please email us at security@junkremovalnow.com with the following information:

1. **Description** of the vulnerability
2. **Steps to reproduce** the issue
3. **Potential impact** of the vulnerability
4. **Suggested fix** (if available)

Please allow us 48 hours to respond before disclosing the vulnerability publicly.

## Security Practices

### Code Security

- **Input Validation**: All user inputs are validated and sanitized
- **Output Encoding**: All dynamic content is properly encoded
- **SQL Injection Prevention**: Parameterized queries are used for database operations
- **XSS Prevention**: Content Security Policy headers are implemented
- **CSRF Protection**: CSRF tokens are implemented for state-changing operations

### Dependency Management

- Dependencies are regularly updated to patch security vulnerabilities
- `npm audit` is run automatically in CI/CD pipeline
- Critical vulnerabilities are patched immediately
- Monthly dependency reviews are conducted

### API Security

- All API endpoints use HTTPS/TLS encryption
- API requests require authentication where appropriate
- Rate limiting is implemented to prevent abuse
- CORS policies are properly configured
- API keys are never hardcoded in source code

### Infrastructure Security

- All secrets are stored in secure environment variables
- Database connections use encrypted SSL/TLS connections
- Regular security audits are conducted
- Security headers are configured (CSP, X-Frame-Options, etc.)
- OWASP guidelines are followed

### Credential Management

- Never commit credentials to the repository
- Use `.env.local` for local development secrets
- Production secrets are managed through secure CI/CD variables
- API keys are rotated regularly
- Sensitive logs are never exposed

### Git Security

- Commits are signed with GPG keys
- Branch protection requires code reviews
- All changes go through CI/CD security checks
- Access control is enforced via GitHub

### Development Security

- Pre-commit hooks validate code quality
- ESLint catches potential security issues
- TypeScript strict mode prevents type-related bugs
- Automated tests catch common vulnerabilities

## Security Checklist for Contributors

Before submitting a pull request:

- [ ] No credentials or secrets in code
- [ ] All user inputs are validated
- [ ] All dynamic content is properly escaped
- [ ] TypeScript types are properly defined
- [ ] No security warnings from linter
- [ ] Tests cover security-related functionality
- [ ] Dependencies are up to date
- [ ] No `console.log()` with sensitive data

## Dependencies

### Critical Dependencies

- **next**: Web framework with built-in security features
- **react**: UI library with XSS protections
- **typescript**: Prevents type-related bugs
- **tailwind**: CSS framework (no security concerns)

### Security-Focused Tools

- **eslint**: Code quality including security patterns
- **playwright**: E2E testing for security scenarios
- **husky**: Enforces pre-commit security checks

### Monitoring

- Dependencies are monitored for vulnerabilities
- Security updates are prioritized
- Major version updates are tested before deployment

## Common Vulnerabilities to Avoid

### Cross-Site Scripting (XSS)

```typescript
// DANGEROUS - can execute scripts
const html = `<div>${userInput}</div>`;

// SAFE - React escapes by default
<div>{userInput}</div>
```

### SQL Injection

```typescript
// DANGEROUS - SQL injection vulnerability
const query = `SELECT * FROM users WHERE id = ${userId}`;

// SAFE - parameterized query
const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
```

### CSRF

```typescript
// DANGEROUS - no CSRF protection
<form action="/api/change-password" method="POST">
  {/* form fields */}
</form>

// SAFE - include CSRF token
<form action="/api/change-password" method="POST">
  <input type="hidden" name="csrfToken" value={csrfToken} />
  {/* form fields */}
</form>
```

### Credential Exposure

```typescript
// DANGEROUS - credentials in code
const API_KEY = 'sk-1234567890abcdef';

// SAFE - use environment variables
const API_KEY = process.env.API_SECRET_KEY;
```

## Security Testing

### Running Security Checks

```bash
# Check for known vulnerabilities in dependencies
npm audit

# Run linter with security rules
npm run lint

# Type checking (catches potential bugs)
npm run type-check

# Run tests including security scenarios
npm test
```

### Regular Security Audits

- Weekly dependency vulnerability scanning
- Monthly code security review
- Quarterly penetration testing
- Annual security assessment

## Incident Response

### Security Incident Process

1. **Report**: Vulnerability is reported via security email
2. **Triage**: Team assesses severity and impact
3. **Fix**: Patch is developed and tested
4. **Release**: Security update is deployed
5. **Disclosure**: Vulnerability is publicly disclosed (after patch released)
6. **Learn**: Root cause analysis and preventive measures

### Severity Levels

- **Critical**: Immediate patch and deployment required
- **High**: Patch within 24-48 hours
- **Medium**: Patch within 1-2 weeks
- **Low**: Included in next regular release

## Compliance

This project adheres to:

- OWASP Top 10 guidelines
- CWE/SANS Top 25 recommendations
- NIST Cybersecurity Framework
- General security best practices

## Contact

- **Security Email**: security@junkremovalnow.com
- **Website**: https://www.junkremovalnow.com
- **GitHub**: https://github.com/jakez-gh/junk-removal-now

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

**Last Updated**: 2026-01-18
