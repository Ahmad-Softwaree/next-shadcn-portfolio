export function sortStarredFirst<T extends { starred?: boolean }>(
  arr: T[]
): T[] {
  return arr.slice().sort((a, b) => (b.starred ? 1 : 0) - (a.starred ? 1 : 0));
}
