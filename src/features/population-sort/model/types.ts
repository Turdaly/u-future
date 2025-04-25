export type SortOrder = 'asc' | 'desc';
export interface SortControlProps {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}