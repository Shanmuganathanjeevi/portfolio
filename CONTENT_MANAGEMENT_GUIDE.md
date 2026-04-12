# Configuration & Content Management Guide

This guide explains how to manage your portfolio's projects and articles through configuration files instead of hardcoded data.

## Overview

Your portfolio now uses a **modular data-driven architecture**:
- **Projects** are stored as individual JSON files in `src/data/projects/`
- **Articles** are stored as individual JSON files in `src/data/articles/`
- The Portfolio component dynamically loads and renders them

This approach allows you to:
- Add new projects/articles without touching code
- Maintain clean version control (add files, commit, push)
- Scale your portfolio as it grows

---

## File Structure

```
src/
├── data/
│   ├── projects/
│   │   ├── README.md                          # Instructions
│   │   ├── project-01-ai-file-manager.json
│   │   ├── project-02-enterprise-cms.json
│   │   └── project-03-search-infrastructure.json
│   ├── articles/
│   │   ├── README.md                          # Instructions
│   │   ├── article-01-microservices.json
│   │   └── article-02-agentic-ai.json
│   └── [other components...]
├── components/
│   └── Portfolio.jsx                          # Uses loadProjects() & loadArticles()
└── utils/
    └── dataLoader.js                          # Handles dynamic data loading
```

---

## Adding a New Project

### Step 1: Create a JSON File

In `src/data/projects/`, create a new file following the naming pattern:

**File name:** `project-XX-short-description.json`

Example: `project-04-performance-optimization.json`

### Step 2: Use This Template

```json
{
  "id": "project-04",
  "title": "Project Title - Clear and Descriptive",
  "description": "One-line summary that appears in the card preview on the projects grid",
  "technologies": ["Tech1", "Tech2", "Tech3", "Tech4"],
  "image": "project-04.png",
  "link": "https://github.com/username/repo",
  "details": "Extended description explaining what problem you solved, your approach, technologies used, and the impact or results achieved"
}
```

### Step 3: Populate Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (`project-XX`). Numbers determine sort order. |
| `title` | string | Project name displayed as the heading |
| `description` | string | One-liner showing in the card - use your strongest selling point |
| `technologies` | array | List of tech stack (strings) - shown as badges |
| `image` | string | Filename of project image (optional, shows placeholder if missing) |
| `link` | string | URL to GitHub repo, live demo, or case study |
| `details` | string | Full description of the project (can include context if needed) |

### Step 4: (Optional) Add Project Image

Drop your project screenshot/image in `public/images/projects/`

Example: `public/images/projects/project-04.png`

**Supported formats:** PNG, JPG, GIF, WebP

### Step 5: Commit and Push

```bash
git add src/data/projects/project-04-performance-optimization.json
git add public/images/projects/project-04.png
git commit -m "Add project: Performance Optimization"
git push
```

Your new project will automatically appear on your portfolio! ✨

---

## Adding a New Article

### Step 1: Create a JSON File

In `src/data/articles/`, create a new file:

**File name:** `article-XX-title-slug.json`

Example: `article-03-docker-best-practices.json`

### Step 2: Use This Template

```json
{
  "id": "article-03",
  "title": "Docker Best Practices for Enterprise Applications",
  "excerpt": "A concise guide to containerization strategies for large-scale deployments",
  "date": "2024-04-15",
  "tags": ["Docker", "DevOps", "Enterprise", "Best Practices"],
  "content": "Full article content here (markdown or plain text)",
  "status": "published"
}
```

### Step 3: Populate Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (`article-XX`) |
| `title` | string | Article headline |
| `excerpt` | string | Short summary - appears in preview card |
| `date` | string | Publication date in ISO format (YYYY-MM-DD) |
| `tags` | array | Topic tags/categories |
| `content` | string | Full article text (markdown or plain text) |
| `status` | string | `"published"` or `"coming-soon"` |

### Step 4: Commit and Push

```bash
git add src/data/articles/article-03-docker-best-practices.json
git commit -m "Add article: Docker Best Practices"
git push
```

Your article will appear with a "Published" badge on your portfolio!

---

## Complete Example Projects

### Project Example (Real-world)

**File:** `project-05-customer-analytics.json`

```json
{
  "id": "project-05",
  "title": "Real-time Customer Analytics Platform",
  "description": "Built a real-time analytics platform processing 100K+ events/minute for customer behavior insights",
  "technologies": ["Kafka", "Python", "Apache Spark", "PostgreSQL", "React"],
  "image": "project-05-analytics.png",
  "link": "https://github.com/yourusername/analytics-platform",
  "details": "Architected a scalable event streaming pipeline using Apache Kafka to ingest customer behavior data. Implemented batch processing with Spark and real-time aggregations with Python services. Built intuitive React dashboard for C-suite analytics. Achieved 99.9% uptime and 50ms average query latency for enterprise clients."
}
```

### Article Example (In Progress)

**File:** `article-04-production-debugging.json`

```json
{
  "id": "article-04",
  "title": "Production Debugging Strategies for Distributed Systems",
  "excerpt": "Essential tools and techniques for troubleshooting issues in microservices architectures",
  "date": "2024-05-01",
  "tags": ["Debugging", "Microservices", "Production", "Troubleshooting"],
  "content": "Coming soon - I'm still writing this one...",
  "status": "coming-soon"
}
```

---

## File Organization Tips

1. **Sequential Naming**: Use consecutive numbers (01, 02, 03...) so new items sort correctly
2. **Descriptive Names**: Include a slug in the filename for quick reference (e.g., `project-06-kubernetes-migration`)
3. **Keep Images Organized**: Store project images in `public/images/projects/` with matching names
4. **Update README**: Both `src/data/projects/README.md` and `src/data/articles/README.md` contain templates

---

## Workflow Example

### Publishing Your 4th Project + 3rd Article

```bash
# 1. Create project file
# src/data/projects/project-04-mobile-app.json ✓

# 2. Create article file  
# src/data/articles/article-03-react-performance.json ✓

# 3. Add optional images
# public/images/projects/project-04-mobile-app.png ✓

# 4. Commit everything
git add src/data/
git add public/images/
git commit -m "feat: Add mobile app project and React performance article"

# 5. Push to main
git push origin main

# 6. Your GitHub Actions workflow automatically deploys to GitHub Pages
# Portfolio updates live in ~2-3 minutes ✨
```

---

## Data Loader Technical Details

The `src/utils/dataLoader.js` file handles dynamic loading:

```javascript
// Load all projects from src/data/projects/*.json
const projects = loadProjects();

// Load all articles from src/data/articles/*.json
const articles = loadArticles();
```

- Uses Vite's `import.meta.glob()` for efficient bundling
- Files are loaded at **build time** (not runtime)
- Automatically sorted by ID for consistent ordering
- No need to manually register files—just add them!

---

## Validation Checklist

Before committing, verify your JSON:

- [ ] Valid JSON syntax (use a JSON validator if unsure)
- [ ] All required fields present (`id`, `title`, `description`, etc.)
- [ ] `id` is unique and follows pattern (`project-XX`, `article-XX`)
- [ ] `date` is in ISO format for articles (YYYY-MM-DD)
- [ ] `technologies` array has 2+ items for projects
- [ ] `tags` array has 2+ items for articles
- [ ] `status` is either `"published"` or `"coming-soon"` for articles
- [ ] No trailing commas in JSON

**Quick Test:** Paste your JSON at [jsonlint.com](https://www.jsonlint.com) to validate

---

## Frequently Asked Questions

**Q: Can I have projects/articles with the same number?**  
A: No - IDs must be unique. Use `project-01`, `project-02`, etc.

**Q: What if I skip a number (project-01, project-03)?**  
A: It's fine. Project files sort by their ID, not filename. `project-01` and `project-03` will display correctly.

**Q: How do I remove a project?**  
A: Delete the JSON file and commit. The Portfolio component will automatically exclude it.

**Q: Can I use HTML in descriptions?**  
A: Yes, for articles. For plain text in project descriptions, keep it simple. The component treats text as plain strings.

**Q: Where do I host project images?**  
A: In `public/images/projects/`. These are served statically and bundled with your site.

**Q: Do I need to rebuild after adding files?**  
A: **In development:** Let Vite hot-reload handle it—refresh your browser.  
**For production:** The `build` command processes all data files automatically.

---

## Advanced: Custom Fields

Want to add custom fields to projects/articles? Examples:

```json
{
  "id": "project-07",
  "title": "...",
  "client": "Premium Client Name",
  "company_size": "500+ employees",
  "impact": "Reduced deployment time by 70%",
  "testimonial": "Quote from client",
  ...
}
```

Then update `Portfolio.jsx` to render them. The data loader is flexible!

---

## Need Help?

- See `src/data/projects/README.md` for project-specific guidance
- See `src/data/articles/README.md` for article-specific guidance
- Check existing files (e.g., `project-01-ai-file-manager.json`) for working examples
- Review the code in `src/components/Portfolio.jsx` to see how data is rendered

Happy writing! 📝
