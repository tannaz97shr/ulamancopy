# 📘 Project Notes – Humanized README

Hey there 👋,  
Below are answers to the technical questions regarding this project. I’ve kept everything clean and scalable so the site can evolve as content and requirements grow.

---

## 1. If you use JSON data, how would you structure it to support future scalability and maintainability?

I’d structure the JSON to be modular, semantic, and future-ready:

```json
{
  "testimonials": [
    {
      "id": "t1",
      "author": "Jane Doe",
      "date": "April 2024",
      "title": "Unforgettable Stay!",
      "quote": "This was the best vacation of my life...",
      "emphasis": "We felt completely at peace.",
      "summary": "Ulaman’s architecture and energy is unlike anywhere else."
    }
  ],
  "packages": [
    {
      "id": "p1",
      "title": "The Lovers Getaway",
      "duration": "3 days 2 nights",
      "image": "/images/packages/lovers.jpg",
      "description": "Perfect for romantic escapes..."
    }
  ]
}
```

Benefits:

- Easily expandable with more types like events, services, etc.
- i18n (translation support) can be added without refactoring.
- Promotes consistent structure and separation of concerns.

---

## 2. If you decide to create your own API, which technology or framework would you use and why?

I would use:

- **Next.js API routes**: for lightweight serverless endpoints on Vercel.
- **Express (Node.js)**: for a dedicated server setup.
- **tRPC + Prisma**: for full-stack type safety and data modeling.

**Why?**

- Next.js API routes integrate directly into the app and deploy instantly.
- tRPC ensures typed contract between frontend and backend.
- Prisma helps scale with a reliable data layer.

---

## 3. How would you configure a custom domain (e.g., www.clientwebsite.com) to point to your deployed project on Vercel?

Steps:

1. In Vercel dashboard: go to your project → Settings → Domains.
2. Click "Add" and enter `www.clientwebsite.com`.
3. Update DNS settings:
   - Add an `A` record pointing to `76.76.21.21`, or
   - Add a `CNAME` to `cname.vercel-dns.com`.
4. Wait for DNS propagation (~5–30 minutes).

---

## 4. If your project requires an admin panel to manage the website content, what technologies and approaches would you choose?

Options:

- **Sanity / Strapi** (Headless CMS with UI).
- **Next.js + Prisma + Clerk/Auth0** for full control.
- **Google Sheets / Notion API** for early-stage projects.

Approach:

- Auth protection.
- Structured schema for content types.
- Rich text editor for blog-style content.
- Optional image/file upload with S3 or Cloudinary.

---

## 5. What techniques would you use to ensure the website loads quickly even on slow internet connections?

Performance techniques:

- `next/image` optimization.
- Font subsetting and system fallbacks.
- Lazy loading images and components.
- Caching via CDN (handled by Vercel).
- Minified and tree-shaken JavaScript.
- Prioritize critical CSS and use preloading.

---

## 6. If you implement a form, how would you securely send the data to the backend server?

Steps:

1. Use `fetch()` to send POST data.
2. Validate on both frontend and backend.
3. Sanitize inputs to prevent injection.
4. Use HTTPS (default on Vercel).
5. Add rate-limiting or hCaptcha for public forms.

Optional: store in Firestore/PostgreSQL with Prisma.

---

## 7. What strategies do you use to optimize images for performance without sacrificing quality?

- Use **`next/image`**: responsive, lazy, optimized formats (WebP, AVIF).
- Precompress assets using TinyPNG or ImageOptim.
- Use placeholders (blurred previews).
- Store on CDN (Vercel, Cloudinary).
- Avoid inline base64 unless small (e.g. logos/icons).
