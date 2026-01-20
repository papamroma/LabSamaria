# LabSamaria Content Management Guide

## Overview
Your website currently uses **mock data** stored in `/src/lib/data.ts`. To post real articles and videos, you have three options:

---

## Option 1: Manual Updates (Simplest - Start Here)

### Adding New Articles

1. **Edit the data file:**
   - Open `/src/lib/data.ts`
   - Add a new article object to the `ARTICLES` array

2. **Article Structure:**
```typescript
{
  id: "unique-article-id",
  slug: "url-friendly-title",
  title: "Your Article Title",
  excerpt: "Short description (2-3 sentences)",
  category: "Tutorials", // or "News", "Reviews", "Opinions", "Insights"
  date: "Jan 20, 2026",
  author: "Your Name",
  content: `
    <p>Your article content in HTML format.</p>
    <h2>Section Heading</h2>
    <p>More content...</p>
    <pre><code>
// Code blocks for tutorials
function example() {
  console.log("Hello");
}
    </code></pre>
  `,
  tags: ["AI", "Tutorial", "Python"]
}
```

3. **Commit and push:**
```bash
git add src/lib/data.ts
git commit -m "Added new article: [Title]"
git push
```

4. **Vercel auto-deploys** - Your changes will be live in ~1 minute!

### Adding Videos

Videos can be embedded in the `content` field using HTML:

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

---

## Option 2: Headless CMS (Recommended for Growth)

Use a **Content Management System** to manage articles without touching code.

### Best Options:

1. **Sanity.io** (Recommended)
   - Free tier: 3 users, unlimited documents
   - Real-time collaboration
   - Rich text editor with media support
   - Setup time: ~30 minutes

2. **Contentful**
   - Free tier: 1 user, 25,000 records
   - Easy media management
   - Setup time: ~20 minutes

3. **Strapi** (Self-hosted)
   - Completely free
   - Full control
   - Requires server setup

### Integration Steps (Sanity Example):

1. **Install Sanity:**
```bash
npm install next-sanity @sanity/image-url
```

2. **Create Sanity project:**
```bash
npm create sanity@latest
```

3. **Update data fetching** - I can help you with this when you're ready!

---

## Option 3: Database + Admin Panel (Advanced)

For a fully custom solution:

1. **Database:** Use Vercel Postgres or Supabase
2. **Admin Panel:** Create a `/admin` route for posting
3. **Authentication:** Protect admin routes with NextAuth.js

This requires more development but gives you complete control.

---

## Current Workflow (Quick Start)

**To add an article TODAY:**

1. Open `/src/lib/data.ts` in your code editor
2. Copy an existing article object
3. Modify the fields (title, content, etc.)
4. Save the file
5. Run:
   ```bash
   git add .
   git commit -m "New article"
   git push
   ```
6. Wait 1 minute - article is live!

---

## Next Steps

**Which approach do you want?**
- **Quick & Simple:** I'll show you how to add articles to `data.ts` right now
- **Professional CMS:** I'll help you set up Sanity.io (30 min setup)
- **Custom Admin:** I'll build you an admin panel (2-3 hours)

Let me know and I'll guide you through it!
