# LabSamaria Admin Dashboard - Implementation Plan

## Phase 1: Database Setup (Supabase)

### Tables to Create:
1. **articles**
   - id, title, slug, content, excerpt, category, author, status, featured_image, tags, created_at, updated_at, published_at

2. **categories**
   - id, name, slug, description, created_at

3. **site_settings**
   - key, value, type, updated_at

4. **media**
   - id, filename, url, alt_text, size, type, uploaded_at

### Authentication:
- Email/password login
- Protected routes
- Session management

---

## Phase 2: Admin Routes Structure

```
/admin
├── /login                    → Authentication
├── /dashboard               → Overview & analytics
├── /articles
│   ├── page.tsx            → List all articles
│   ├── /new/page.tsx       → Create article
│   └── /edit/[id]/page.tsx → Edit article
├── /media
│   └── page.tsx            → Media library
├── /categories
│   └── page.tsx            → Manage categories
└── /settings
    └── page.tsx            → Site settings
```

---

## Phase 3: Features

### Article Editor:
- Rich text editor (Quill)
- Image upload
- Code block support
- SEO fields
- Draft/publish status
- Category selection
- Tag management

### Media Manager:
- Drag & drop upload
- Image preview
- Search & filter
- Delete/rename

### Settings:
- Logo upload
- Color picker
- Social links
- SEO meta tags

---

## Phase 4: Performance Optimizations

- Server-side rendering
- Image optimization
- Lazy loading
- Caching strategy
- Database indexing

---

## Timeline: 4-5 hours
