import { execSync } from 'child_process';

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const repo = 'shreyanshmathur/bangalore-trip-invitation';

if (!token) {
  console.error('❌ GITHUB_PERSONAL_ACCESS_TOKEN not found');
  process.exit(1);
}

try {
  console.log('🚀 Pushing to GitHub...');
  
  // Configure git
  execSync('git config user.email "shreyansh@replit.com"', { stdio: 'inherit' });
  execSync('git config user.name "Shreyansh"', { stdio: 'inherit' });
  
  // Push using the token
  const pushUrl = `https://${token}@github.com/${repo}.git`;
  execSync(`git push ${pushUrl} main --force`, { stdio: 'inherit' });
  
  console.log('\n✅ Successfully pushed to GitHub!');
  console.log(`🔗 View your repo: https://github.com/${repo}`);
} catch (error) {
  console.error('❌ Push failed:', error);
}
