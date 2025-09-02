export interface UsePaginationParams {
  totalItems: ComputedRef<number> | Ref<number> | number;
  itemsPerPage: ComputedRef<number> | Ref<number> | number;
  currentPage: ComputedRef<number> | Ref<number> | number;
  siblingCount?: number;
}
export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}
export interface PaginationButtonProps {
  isActive: boolean;
  activeClasses?: string;
  deActiveClasses?: string;
  children: VNode;
}
