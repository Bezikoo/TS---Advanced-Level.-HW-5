export interface Identifiable {
  id: string;
}

/**
 * Generic function to find an element by its ID in a collection.
 * Uses generic constraint to ensure T has an 'id' property.
 */
export function findById<T extends Identifiable>(items: T[], id: string): T | undefined {
  return items.find((item) => item.id === id);
}
