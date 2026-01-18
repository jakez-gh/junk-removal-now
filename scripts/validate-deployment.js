/**
 * Pre-deployment validation script
 * Run this before deploying to ensure correct project identity
 * Usage: node scripts/validate-deployment.js
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

console.log('🔍 Running deployment validation...\n');

// Check 1: package.json
try {
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

  if (packageJson.name === 'junk-removal-now') {
    console.log('✅ Package name is correct: junk-removal-now');
  } else {
    errors.push(`❌ Wrong package name: ${packageJson.name} (expected: junk-removal-now)`);
  }

  if (packageJson.description && packageJson.description.includes('Junk Removal')) {
    console.log('✅ Package description mentions Junk Removal');
  } else {
    warnings.push(`⚠️  Package description doesn't mention Junk Removal`);
  }
} catch (e) {
  errors.push(`❌ Failed to read package.json: ${e.message}`);
}

// Check 2: DEPLOYMENT.md
try {
  const deploymentPath = path.join(process.cwd(), 'DEPLOYMENT.md');
  const deploymentMd = fs.readFileSync(deploymentPath, 'utf-8');

  if (deploymentMd.includes('4b53c516-efae-46ef-a9d3-33df02b24d27')) {
    console.log('✅ Correct Netlify site ID found in DEPLOYMENT.md');
  } else {
    errors.push(`❌ DEPLOYMENT.md doesn't contain correct site ID`);
  }

  if (deploymentMd.includes('celebrated-mermaid-d8b042')) {
    console.log('✅ Correct Netlify URL found in DEPLOYMENT.md');
  } else {
    warnings.push(`⚠️  DEPLOYMENT.md doesn't contain correct Netlify URL`);
  }
} catch (e) {
  errors.push(`❌ Failed to read DEPLOYMENT.md: ${e.message}`);
}

// Check 3: No references to other projects
try {
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

  if (packageJson.name !== 'office-hero' && packageJson.name !== 'office.hero') {
    console.log('✅ No office-hero references in package.json');
  } else {
    errors.push(`❌ DANGER: This appears to be the office-hero project!`);
  }
} catch (e) {
  // Already handled above
}

// Check 4: Homepage file
try {
  const indexPath = path.join(process.cwd(), 'pages', 'index.tsx');
  const indexContent = fs.readFileSync(indexPath, 'utf-8');

  if (indexContent.includes('Junk Removal Now')) {
    console.log('✅ Homepage references Junk Removal Now');
  } else {
    errors.push(`❌ Homepage doesn't reference Junk Removal Now`);
  }

  if (indexContent.includes('office-hero') || indexContent.includes('Office Hero')) {
    errors.push(`❌ Homepage contains office-hero references!`);
  } else {
    console.log('✅ No office-hero references in homepage');
  }
} catch (e) {
  errors.push(`❌ Failed to read homepage: ${e.message}`);
}

// Check 5: Netlify config
try {
  const netlifyPath = path.join(process.cwd(), 'netlify.toml');
  const netlifyToml = fs.readFileSync(netlifyPath, 'utf-8');

  if (netlifyToml.includes('Junk Removal Now')) {
    console.log('✅ Netlify config mentions Junk Removal Now');
  } else {
    warnings.push(`⚠️  Netlify config doesn't mention Junk Removal Now`);
  }
} catch (e) {
  warnings.push(`⚠️  No netlify.toml file found`);
}

// Results
console.log('\n' + '='.repeat(50));
if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  warnings.forEach((w) => console.log(w));
}

if (errors.length > 0) {
  console.log('\n❌ VALIDATION FAILED!\n');
  errors.forEach((e) => console.log(e));
  console.log('\n🚫 DO NOT DEPLOY - Fix errors first!\n');
  process.exit(1);
} else {
  console.log('\n✅ All validation checks passed!');
  console.log('✅ Safe to deploy to Netlify\n');
  console.log('Deploy with: npm run deploy\n');
  process.exit(0);
}
