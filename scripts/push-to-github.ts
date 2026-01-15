// GitHub Push Script - Uses Replit's GitHub integration
import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function main() {
  try {
    console.log('🚀 Getting GitHub client...');
    const octokit = await getGitHubClient();
    
    // Get authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`✅ Authenticated as: ${user.login}`);
    
    const repoName = 'bangalore-trip-invitation';
    const repoDescription = 'The Most Unnecessary Bangalore Trip Invitation Website - Neo-Brutalist style with maximum sarcasm';
    
    // Check if repo exists
    let repoExists = false;
    try {
      await octokit.repos.get({ owner: user.login, repo: repoName });
      repoExists = true;
      console.log(`📦 Repository ${repoName} already exists`);
    } catch (e: any) {
      if (e.status === 404) {
        console.log(`📦 Creating new repository: ${repoName}`);
        await octokit.repos.createForAuthenticatedUser({
          name: repoName,
          description: repoDescription,
          private: false,
          auto_init: false
        });
        console.log(`✅ Repository created: https://github.com/${user.login}/${repoName}`);
      } else {
        throw e;
      }
    }
    
    console.log(`\n🔗 Repository URL: https://github.com/${user.login}/${repoName}`);
    console.log('\n📝 To push your code, run these git commands in the shell:');
    console.log(`\n  git remote add github https://github.com/${user.login}/${repoName}.git`);
    console.log('  git push github main\n');
    console.log('Or if remote already exists:');
    console.log('  git push github main\n');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
