export const TOOLS = [
  { id: 'compound-interest', name: 'Compound Interest', description: 'See how your savings grow.', type: 'calculator' },
];
export function getTools() {
  return TOOLS;
}
export function getTool(id) {
  return TOOLS.find(t => t.id === id) || null;
}
