import type { VNode } from 'vue';

export interface UsePaginationParams {
  totalItems: number;
  itemsPerPage: number;
  siblingCount?: number;
  currentPage: number;
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
