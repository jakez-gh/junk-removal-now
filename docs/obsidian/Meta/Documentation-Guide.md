# Repository Documentation

## Overview

The Junk Removal Now repository includes comprehensive documentation to support development, contribution, and project management. This guide explains the purpose and content of each major documentation file.

## Root Documentation Files

### README.md

**Purpose**: Primary entry point for new users and developers

**Contains**:

- Quick start guide with prerequisites
- Installation and setup instructions
- Development, testing, and build commands
- Complete project structure overview
- Feature listing and core capabilities
- DevSecOps and quality gates explanation
- Testing procedures and coverage details
- Commit message format guidelines
- Deployment workflow
- Links to detailed documentation
- Configuration examples
- Contributing information
- Contact and license details

**Audience**: New developers, contributors, end users

**When to Update**: When major features are added or setup process changes

---

### CONTRIBUTING.md

**Purpose**: Guide for developers wanting to contribute to the project

**Contains**:

- Code of conduct
- Development environment setup
- Feature branch workflow
- Quality checks and testing procedures
- Conventional commit format with examples
- Code style guidelines (TypeScript, React, CSS)
- Testing guidelines and best practices
- Documentation update requirements
- Common development tasks
- Troubleshooting guide
- Accessibility and security considerations
- Performance considerations

**Audience**: Contributors, developers

**When to Update**: When development practices change or new standards are established

---

### SECURITY.md

**Purpose**: Establish security standards and reporting procedures

**Contains**:

- Vulnerability reporting guidelines
- Security practices:
  - Code security (validation, encoding, injection prevention)
  - Dependency management
  - API security
  - Infrastructure security
  - Credential management
  - Git security
  - Development security
- Development security checklist
- Common vulnerabilities with examples
- Security testing procedures
- Incident response process
- Compliance standards (OWASP, CWE/SANS, NIST)

**Audience**: Security-conscious developers, DevOps engineers, project maintainers

**When to Update**: When security vulnerabilities are discovered or standards change

---

### LICENSE

**Purpose**: Legal terms for using the project

**Contains**:

- MIT License text
- Copyright notice
- Terms and conditions

**Audience**: Legal teams, users, contributors

**When to Update**: Only change license after consultation (rare)

---

### CHANGELOG.md

**Purpose**: Document all changes, features, and versions

**Contains**:

- v1.0.0 release documentation
- Features by category
- Quality and testing additions
- Infrastructure implementations
- Security implementations
- Performance metrics
- Technical stack summary
- Known limitations
- Roadmap for future versions
- Migration guides
- Breaking changes log
- Version history table
- Release process
- Commit format reference

**Audience**: Users, developers, project managers

**When to Update**: Every release or significant change

---

## Obsidian Vault Files

Detailed project documentation is maintained in `docs/obsidian/`. See [docs/obsidian/README.md](../obsidian/README.md) for the vault structure.

### Key Documents

#### Project Management

- **Overview.md** - Project objectives, status, key metrics
- **Implementation-Progress.md** - Feature tracking, completion percentage, next steps

#### Technical

- **Architecture.md** - Tech stack, design decisions, quality gates, deployment

#### Guidelines

- **Git-Workflow.md** - Branching strategy, commit format, signing procedures

#### Business

- **Operations.md** - Service offerings, pricing, operations procedures
- **Research/** - Background on owner and business model

---

## Documentation Hierarchy

```
Repository Root
├── README.md (entry point for developers)
├── CONTRIBUTING.md (how to contribute)
├── SECURITY.md (security guidelines)
├── LICENSE (legal terms)
├── CHANGELOG.md (version history)
└── docs/obsidian/ (detailed project documentation)
    ├── Project/
    │   ├── Overview.md (project status)
    │   └── Implementation-Progress.md (feature tracking)
    ├── Technical/
    │   └── Architecture.md (design and decisions)
    ├── Guidelines/
    │   └── Git-Workflow.md (development process)
    ├── Business/
    │   └── Operations.md (service details)
    └── Research/
        ├── About-Diane-Bennett.md (owner background)
        └── Business-Model.md (industry analysis)
```

## Recommended Reading Order

### For New Developers

1. README.md - Understand the project and get started
2. CONTRIBUTING.md - Learn the development workflow
3. docs/obsidian/Project/Overview.md - Understand the business context
4. docs/obsidian/Technical/Architecture.md - Learn the technical design
5. docs/obsidian/Guidelines/Git-Workflow.md - Follow the git workflow

### For Security Reviews

1. SECURITY.md - Security policies and procedures
2. docs/obsidian/Technical/Architecture.md - Technical security decisions
3. CONTRIBUTING.md - Development security checklist

### For Project Management

1. README.md - Project overview
2. CHANGELOG.md - Version history and roadmap
3. docs/obsidian/Project/Implementation-Progress.md - Current progress
4. docs/obsidian/Project/Overview.md - Project objectives

### For Contributors

1. README.md - Quick start
2. CONTRIBUTING.md - Contribution guidelines
3. SECURITY.md - Security considerations
4. docs/obsidian/Guidelines/Git-Workflow.md - Git workflow

## Updating Documentation

### When to Update

- **README.md**: Major feature additions, setup changes, new deployment process
- **CONTRIBUTING.md**: New coding standards, process changes, troubleshooting additions
- **SECURITY.md**: New vulnerabilities discovered, security policy changes
- **CHANGELOG.md**: Every release, significant features, important fixes
- **Obsidian Documents**: Weekly during active development

### How to Update

1. Identify which document needs updating
2. Make changes following the document's structure
3. Include in your commit with proper message:

   ```bash
   git commit -m "docs(section): description of changes"
   ```

4. Reference issue if applicable:

   ```bash
   git commit -m "docs(security): update vulnerability reporting

   Updated vulnerability reporting email and process.

   Fixes #45"
   ```

### Reviewing Documentation

- Ensure clarity and accuracy
- Check for broken links
- Verify code examples are correct
- Update table of contents if structure changes
- Ensure consistency with other documents

## Document Versions

Each documentation file maintains a "Last Updated" date at the bottom:

```markdown
---

**Last Updated**: 2026-01-18
```

This helps readers understand how current the information is.

## Linking Between Documents

### External Links

```markdown
[GitHub Repository](https://github.com/jakez-gh/junk-removal-now)
[Project Website](https://www.junkremovalnow.com)
```

### Internal Links within Repo

```markdown
[Quick Start](README.md#quick-start)
[Contributing Guide](CONTRIBUTING.md)
[Security Policy](SECURITY.md)
[Architecture](docs/obsidian/Technical/Architecture.md)
```

### Internal Links within Obsidian

```markdown
[[Architecture]]
[[Git-Workflow]]
[[Overview]]
```

## Maintenance Schedule

### Daily

- Review and respond to issues and pull requests
- Check CI/CD logs for failures

### Weekly

- Update Obsidian vault with progress
- Review recent commits for documentation needs
- Address documentation issues

### Monthly

- Review all documentation for accuracy
- Update implementation progress document
- Check for broken links
- Verify code examples

### Quarterly

- Major documentation review
- Update roadmap in CHANGELOG.md
- Review and update architecture documentation
- Ensure all guidelines are current

## FAQ

**Q: Where should I document new features?**
A: Update CHANGELOG.md for version information and docs/obsidian/Project/Implementation-Progress.md for progress tracking.

**Q: How do I report security issues?**
A: See SECURITY.md for the vulnerability reporting process.

**Q: Where are development guidelines?**
A: See CONTRIBUTING.md for detailed development guidelines.

**Q: How do I understand the project architecture?**
A: See docs/obsidian/Technical/Architecture.md for architecture details.

**Q: Where is the business information?**
A: See docs/obsidian/Business/ and docs/obsidian/Research/ for business details.

---

**Last Updated**: 2026-01-18

See [docs/obsidian/README.md](../obsidian/README.md) for the complete documentation index.
