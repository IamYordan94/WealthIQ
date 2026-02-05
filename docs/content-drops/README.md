# Content drops — for Perplexity-generated content

Perplexity writes generated content (lessons, tips, glossary, FAQs, etc.) into this folder as JSON files.

**Expected file names** (see `docs/README_FOR_PERPLEXITY.md`):

- `lessons-{courseSlug}-{moduleSlug}.json` — array of lesson objects
- `course-descriptions.json` — object mapping course slug → description
- `modules-{courseSlug}.json` — array of module objects
- `tips.json` — array of tip objects
- `glossary.json` — array of glossary objects
- `faqs.json` — array of FAQ objects

The dev agent integrates these files into the app when asked.
