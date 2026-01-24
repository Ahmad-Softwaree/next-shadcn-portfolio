export function countActiveFilters<T extends Record<string, unknown>>(
  params: T
) {
  return Object.values(params).reduce((count: number, value) => {
    if (Array.isArray(value)) return count + (value.length > 0 ? 1 : 0);
    if (value === "true") return count + 1;
    return count;
  }, 0);
}
