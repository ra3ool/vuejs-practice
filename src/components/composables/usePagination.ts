import type { UsePaginationParams } from '@/components/types';

export const DOTS = '...';

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, idx) => idx + start);

export const usePagination = ({
  totalItems,
  itemsPerPage,
  siblingCount = 1,
  currentPage,
}: UsePaginationParams): ComputedRef<(number | string)[]> => {
  return computed(() => {
    const totalItemsValue = unref(totalItems);
    const itemsPerPageValue = unref(itemsPerPage);
    const currentPageValue = unref(currentPage);

    const total = Math.ceil(totalItemsValue / itemsPerPageValue);
    const totalPageNumbersToShow = siblingCount + 5;

    if (total <= totalPageNumbersToShow) {
      return range(1, total);
    }

    const leftSiblingIndex = Math.max(currentPageValue - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPageValue + siblingCount, total);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < total - 2;

    const firstPageIndex = 1;
    const lastPageIndex = total;

    if (!showLeftDots && showRightDots) {
      const leftRange = range(1, 3 + 2 * siblingCount);
      return [...leftRange, DOTS, total];
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = range(total - (3 + 2 * siblingCount) + 1, total);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  });
};
