import type { TableRow } from '@/components/types';

const paginateData = (
  data: TableRow[],
  currentPage: number,
  itemsPerPage: number,
): TableRow[] => {
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  return data.slice(startIndex, endIndex);
};

export default paginateData;
