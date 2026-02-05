# Start here — Perplexity instructions for WealthIQ

You are helping fill the **WealthIQ** educational app with content. The app structure and code are already in place; your job is to **generate educational content** and **write it into this repo** in the exact formats described below.

---

## What to read first

1. **This file** (you are here).
2. **`docs/PERPLEXITY_CONTENT_GUIDE.md`** — Full JSON schemas, examples, and prompts for every content type (lessons, modules, tips, glossary, FAQs). Use it as the single source of truth for shapes and field names.
3. **`src/features/curriculum/data/placeholder.js`** — Example of how courses, modules, and lessons are structured in code.
4. **`src/features/info/data/index.js`** — Example of how tips, glossary, and FAQs are structured.
5. **`docs/PRODUCT_IDEA.md`** — App purpose, 12 courses (slugs and titles), free tier rules.

---

## Your task

Generate high-quality educational content and **write it into this repository** under the folder **`docs/content-drops/`**.

Use **only** the JSON formats defined in `docs/PERPLEXITY_CONTENT_GUIDE.md`. Do not add markdown code fences around JSON; write raw JSON into the files.

---

## Where to write files (all under `docs/content-drops/`)

| Content type | File name | Format |
|--------------|-----------|--------|
| Lessons (one course + module per file) | `lessons-{courseSlug}-{moduleSlug}.json` | JSON array of lesson objects (see PERPLEXITY_CONTENT_GUIDE) |
| Course descriptions (all 12) | `course-descriptions.json` | JSON object: `{ "health-wellness": "…", "personal-finance": "…", ... }` |
| Module list for one course | `modules-{courseSlug}.json` | JSON array of `{ "id", "title", "order" }` |
| Tips | `tips.json` | JSON array of `{ "id", "categoryId", "title", "content" }` |
| Glossary | `glossary.json` | JSON array of `{ "id", "term", "definition" }` |
| FAQs | `faqs.json` | JSON array of `{ "id", "question", "answer" }` |

**Course slugs** (use these in file names and in content):  
`health-wellness`, `personal-finance`, `smart-investing`, `career-acceleration`, `real-estate`, `ai-prompt-engineering`, `digital-marketing`, `productivity-focus`, `entrepreneurship`, `mental-resilience`, `coding-python`, `content-creation`.

---

## Suggested order of work

1. **Course descriptions** — One file: `course-descriptions.json` for all 12 courses.
2. **Module lists** — One file per course: `modules-health-wellness.json`, `modules-personal-finance.json`, etc. (3–5 modules per course, beginner → advanced.)
3. **Lessons** — One file per module: e.g. `lessons-health-wellness-basics.json`. Start with the free course **Health & Wellness** so the app has a full first course; then add other courses as needed.
4. **Info** — `tips.json`, `glossary.json`, `faqs.json` (each can be built up over time).

---

## Rules

- **Output only valid JSON.** No explanatory text inside the files, no markdown code blocks.
- **Ids:** Use short, lowercase, hyphenated slugs (e.g. `sleep-basics`, `tip-1`).
- **Lesson quiz:** `correctIndex` is 0-based. Each lesson should have 1–3 quiz questions when possible.
- **Write files into `docs/content-drops/`** so the development team can integrate them into the app. Create or update files in this repo via your GitHub connection.

After you write content here, the user will ask the coding agent to **integrate** everything in `docs/content-drops/` into the app.
