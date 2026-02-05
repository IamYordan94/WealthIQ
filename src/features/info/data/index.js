export const CATEGORIES = [
  { id: 'tips', title: 'Tips' },
  { id: 'glossary', title: 'Glossary' },
  { id: 'faqs', title: 'FAQs' },
];
export const TIPS = [
  { id: '1', categoryId: 'tips', title: 'Start small', content: 'Automate a small amount to savings each month.' },
];
export const GLOSSARY = [
  { id: '1', term: 'Compound interest', definition: 'Interest calculated on initial principal and accumulated interest.' },
];
export const FAQS = [
  { id: '1', question: 'How do I unlock more courses?', answer: 'Subscribe or unlock premium for full access.' },
];
export function getCategories() {
  return CATEGORIES;
}
export function getTips() {
  return TIPS;
}
export function getGlossary() {
  return GLOSSARY;
}
export function getFaqs() {
  return FAQS;
}
