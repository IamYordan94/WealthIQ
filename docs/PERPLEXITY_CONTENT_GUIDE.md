# How to Get Content from Perplexity for WealthIQ

**Split of work:**  
- **Perplexity (you):** All knowledge and content — lesson text, quizzes, tips, glossary, FAQs.  
- **Code (me):** App structure, schema, UI, and dropping your content into the right files.

This doc tells you **exactly what format** to ask Perplexity for, and **where that content will go** in the app. You can copy the prompts below into Perplexity and then paste the output into the repo (or send it to me to integrate).

---

## 1. Curriculum: Lessons

Each **lesson** has:
- `id` — short slug, lowercase, hyphens (e.g. `sleep-basics`)
- `title` — display title
- `duration` — e.g. `"8 min"`
- `content.sections` — array of blocks. Each block is either:
  - **Text:** `{ "type": "text", "content": "Your paragraph here." }`
  - **List:** `{ "type": "list", "title": "Optional title", "items": ["Item 1", "Item 2"] }`
- `content.quiz` — array of quiz questions (can be empty `[]`). Each question:
  - `question` — string
  - `options` — array of 3–4 strings
  - `correctIndex` — 0-based index of the correct option
  - `explanation` — short explanation after answering

**Example lesson (copy this structure when you ask Perplexity):**

```json
{
  "id": "sleep-basics",
  "title": "Sleep Fundamentals",
  "duration": "8 min",
  "content": {
    "sections": [
      { "type": "text", "content": "Sleep is the foundation of health. This lesson covers why it matters and how to improve it." },
      { "type": "list", "title": "Key points", "items": ["Aim for 7–9 hours", "Keep a consistent schedule", "Limit screens before bed"] }
    ],
    "quiz": [
      {
        "question": "How many hours of sleep do experts recommend?",
        "options": ["5–6", "7–9", "10–12"],
        "correctIndex": 1,
        "explanation": "Most adults need 7–9 hours for optimal health."
      }
    ]
  }
}
```

**Prompt you can use in Perplexity (fill in course/module/topic):**

```text
Generate one lesson for the course "[COURSE NAME]", module "[MODULE NAME]", topic "[TOPIC]".

Return ONLY valid JSON in this exact shape (no markdown, no extra text):
{
  "id": "short-slug-here",
  "title": "Lesson Title",
  "duration": "X min",
  "content": {
    "sections": [
      { "type": "text", "content": "..." },
      { "type": "list", "title": "Optional title", "items": ["...", "..."] }
    ],
    "quiz": [
      { "question": "...", "options": ["A", "B", "C"], "correctIndex": 0, "explanation": "..." }
    ]
  }
}

Include 2–4 sections (mix of text and list) and 1–3 quiz questions. correctIndex is 0-based.
```

**Batch prompt (multiple lessons):**

```text
Generate 3 lessons for the course "[COURSE NAME]", module "[MODULE NAME]". Topics: [Topic 1], [Topic 2], [Topic 3].

Return ONLY a JSON array of lesson objects. Each lesson must have: id, title, duration, content.sections (array of {type, content} or {type, title, items}), content.quiz (array of {question, options, correctIndex, explanation}). No markdown, no code fence—just the JSON array.
```

**Where it goes in code:**  
Lessons are added into `src/features/curriculum/data/placeholder.js` (or a separate data file we wire in) inside the right course → module → `lessons` array.

---

## 2. Curriculum: Modules and course descriptions

- **Course:** We already have the 12 course IDs and titles (see product doc). What we need from you:
  - **description** (1–2 sentences) per course.
- **Module:** For each course, a list of **modules** (e.g. "Basics", "Beyond the basics", "Advanced"). Each has:
  - `id` — short slug (e.g. `basics`, `advanced`)
  - `title` — display name
  - `order` — number (1, 2, 3…)

**Prompt for course descriptions (all 12):**

```text
I have an app with these 12 courses (by slug): health-wellness, personal-finance, smart-investing, career-acceleration, real-estate, ai-prompt-engineering, digital-marketing, productivity-focus, entrepreneurship, mental-resilience, coding-python, content-creation.

For each slug, give a one-sentence description (for app store / in-app). Return a JSON object: { "health-wellness": "Description here", "personal-finance": "...", ... }
```

**Prompt for module list for one course:**

```text
For the course "[COURSE TITLE]" (slug: [slug]), suggest 3–5 module names that cover the curriculum from beginner to advanced. Return a JSON array of objects: [ { "id": "basics", "title": "Basics", "order": 1 }, ... ]. Use short slug ids (lowercase, hyphens).
```

---

## 3. Info: Tips, Glossary, FAQs

**Tips** — one object per tip:
- `id` — unique string (e.g. `"tip-1"`, `"finance-1"`)
- `categoryId` — `"tips"` (or we can add more later)
- `title` — short headline
- `content` — 1–3 sentences

**Glossary** — one per term:
- `id` — unique string
- `term` — the word/phrase
- `definition` — 1–3 sentences

**FAQs** — one per FAQ:
- `id` — unique string
- `question` — full question
- `answer` — 2–5 sentences

**Prompt for tips (e.g. 10):**

```text
Generate 10 short, actionable tips for [e.g. personal finance / productivity / health]. Return ONLY a JSON array of objects with keys: id, categoryId ("tips"), title, content. No markdown.
```

**Prompt for glossary (e.g. 15 terms):**

```text
Generate 15 glossary entries for [domain, e.g. personal finance]. Return ONLY a JSON array of objects with keys: id, term, definition. No markdown.
```

**Prompt for FAQs (e.g. 8):**

```text
Generate 8 FAQs for an educational app about [domains]. Return ONLY a JSON array of objects with keys: id, question, answer. No markdown.
```

**Where it goes:**  
- Tips / Glossary / FAQs → `src/features/info/data/index.js` (arrays `TIPS`, `GLOSSARY`, `FAQS`).

---

## 4. Best way to get the info to me

1. **JSON only** — Ask Perplexity to return **only** valid JSON (no “Here is the JSON”, no markdown code fences). If it still wraps in markdown, you can paste it and I’ll strip the fence when integrating.
2. **One type per run** — E.g. one request for “3 lessons for Health & Wellness Basics”, one for “10 finance tips”. Easier to check and drop into the right file.
3. **Paste into the repo** — You can paste each output into a file, e.g.:
   - `docs/content-drops/lessons-health-basics.json`
   - `docs/content-drops/tips-finance.json`  
   Then say “integrate the content in `docs/content-drops/`” and I’ll wire it into the app.
4. **Or paste here** — You can paste the JSON in the chat and say “add this to the app”; I’ll place it in the right data file and adjust imports if needed.

---

## 5. Course IDs (for your prompts)

| Slug                     | Title                           |
|--------------------------|---------------------------------|
| health-wellness          | Health & Wellness Mastery       |
| personal-finance         | Personal Finance Fundamentals  |
| smart-investing          | Smart Investing Strategies     |
| career-acceleration      | Career Acceleration            |
| real-estate              | Real Estate Investing          |
| ai-prompt-engineering    | AI & Prompt Engineering         |
| digital-marketing        | Digital Marketing Essentials   |
| productivity-focus       | Productivity & Focus           |
| entrepreneurship         | Entrepreneurship Launchpad     |
| mental-resilience        | Mental Resilience Building     |
| coding-python            | Coding for Beginners (Python)   |
| content-creation         | Content Creation Mastery       |

Use the **slug** as course `id` in any curriculum content you generate.

---

**Summary:** You use Perplexity to generate all knowledge (lessons with sections + quiz, course descriptions, module lists, tips, glossary, FAQs) in the JSON shapes above. You then either paste that JSON into the repo under `docs/content-drops/` or into the chat. I handle all coding and wiring into the app.
