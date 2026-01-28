# GitHub Integration Guide

This guide explains how to integrate your GitHub repositories with the portfolio, both manually and dynamically using the GitHub API.

## Current Setup: Manual Integration

Currently, the portfolio loads projects from `public/projects.json`. This is a simple and reliable approach that gives you full control over what projects to display.

### Updating Projects Manually

1. Open `public/projects.json`
2. Add or modify project entries following this structure:

```json
{
  "id": 1,
  "title": "Project Name",
  "description": {
    "en": "English description",
    "es": "Descripción en español",
    "de": "Deutsche Beschreibung"
  },
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "githubUrl": "https://github.com/yourusername/repo-name",
  "demoUrl": "https://your-demo-url.com",
  "image": "/path/to/image.jpg"
}
```

3. Save the file and refresh your portfolio

## Dynamic Integration: GitHub API

For automatic project fetching, you can use the GitHub API to retrieve your repositories.

### Option 1: Fetch All Public Repositories

Create a new file `src/utils/githubApi.js`:

```javascript
const GITHUB_USERNAME = 'pabloogl'; // Replace with your username
const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    
    // Transform GitHub data to your project format
    return repos
      .filter(repo => !repo.fork && !repo.private) // Filter out forks and private repos
      .map((repo, index) => ({
        id: index + 1,
        title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: {
          en: repo.description || 'No description available',
          es: repo.description || 'Sin descripción disponible',
          de: repo.description || 'Keine Beschreibung verfügbar'
        },
        technologies: repo.topics || [],
        githubUrl: repo.html_url,
        demoUrl: repo.homepage || null,
        image: null,
        stars: repo.stargazers_count,
        language: repo.language
      }))
      .slice(0, 6); // Limit to 6 projects
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
```

### Option 2: Fetch Specific Repositories

If you want to display only specific repositories, create a curated list:

```javascript
const FEATURED_REPOS = [
  'churn-prediction',
  'data-pipeline',
  'sales-forecast',
  'sentiment-analysis'
];

export async function fetchFeaturedRepos() {
  const GITHUB_USERNAME = 'pabloogl';
  
  try {
    const repoPromises = FEATURED_REPOS.map(repoName =>
      fetch(`${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}`)
        .then(res => res.json())
    );
    
    const repos = await Promise.all(repoPromises);
    
    return repos.map((repo, index) => ({
      id: index + 1,
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: {
        en: repo.description || 'No description available',
        es: repo.description || 'Sin descripción disponible',
        de: repo.description || 'Keine Beschreibung verfügbar'
      },
      technologies: repo.topics || [repo.language].filter(Boolean),
      githubUrl: repo.html_url,
      demoUrl: repo.homepage || null,
      image: null
    }));
  } catch (error) {
    console.error('Error fetching featured repos:', error);
    return [];
  }
}
```

### Updating the Projects Component

Modify `src/components/Projects.jsx` to use the GitHub API:

```javascript
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import { fetchGitHubRepos } from '../utils/githubApi'; // Import the API function

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      
      // Try to fetch from GitHub API first
      const githubProjects = await fetchGitHubRepos();
      
      if (githubProjects.length > 0) {
        setProjects(githubProjects);
      } else {
        // Fallback to local JSON
        const response = await fetch('/projects.json');
        const localProjects = await response.json();
        setProjects(localProjects);
      }
      
      setLoading(false);
    };
    
    loadProjects();
  }, []);

  // ... rest of the component
};
```

## GitHub API Rate Limiting

The GitHub API has rate limits:
- **Unauthenticated requests**: 60 requests per hour
- **Authenticated requests**: 5,000 requests per hour

### Using Authentication (Recommended for Production)

1. Create a Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token with `public_repo` scope
   - Copy the token

2. Add authentication to your API calls:

```javascript
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = GITHUB_TOKEN 
  ? { 'Authorization': `token ${GITHUB_TOKEN}` }
  : {};

const response = await fetch(url, { headers });
```

3. Create a `.env` file in your project root:

```
VITE_GITHUB_TOKEN=your_personal_access_token_here
```

4. Add `.env` to your `.gitignore` to keep it private

## Best Practices

1. **Caching**: Cache API responses in localStorage to reduce API calls
2. **Fallback**: Always have a fallback to the local JSON file
3. **Loading States**: Show loading indicators while fetching data
4. **Error Handling**: Display user-friendly error messages
5. **Repository Topics**: Use GitHub topics/tags to categorize your projects
6. **README Files**: Write good README files - they can be displayed in your portfolio

## Advanced: Fetching README Content

You can also fetch and display README content:

```javascript
export async function fetchRepoReadme(username, repoName) {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${username}/${repoName}/readme`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3.raw'
        }
      }
    );
    
    return await response.text();
  } catch (error) {
    console.error('Error fetching README:', error);
    return null;
  }
}
```

## Deployment Considerations

When deploying your portfolio:

1. **Environment Variables**: Use environment variables for sensitive data
2. **Build Time vs Runtime**: Decide if you want to fetch data at build time or runtime
3. **Static Generation**: Consider using build-time data fetching for better performance
4. **CDN Caching**: Configure proper cache headers for API responses

## Resources

- [GitHub REST API Documentation](https://docs.github.com/en/rest)
- [GitHub API Rate Limiting](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)
- [Creating Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
