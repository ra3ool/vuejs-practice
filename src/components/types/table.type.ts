export type TableHeader = {
  key: string;
  value: string;
  sort?: boolean;
};
export type TableRow<T = Record<string, unknown>> = {
  id: string | number;
} & T;
export type TableCell = string | number;

export interface CustomTableProps {
  headers: TableHeader[];
  data: TableRow[];
  tableClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
  loading?: boolean;
  loadingText?: string;
  emptyText?: string;
  sort?: boolean;
  pagination?: {
    itemsPerPage: number;
    currentPage: number;
  };

  //for later
  headerClassName?: string;
  headerStyle?: 'default' | 'bold' | 'italic';
  footer?: VNode;
  footerClassName?: string;
  footerStyle?: 'default' | 'bold' | 'italic';
  emptyClassName?: string;
  emptyStyle?: 'default' | 'italic' | 'bold';
  selectable?: boolean;
  selectedRows?: TableRow[];
  onRowSelect?: (row: TableRow) => void;
  onRowDeselect?: (row: TableRow) => void;
  rowKey?: string;
  cellKey?: string;
  headerKey?: string;
  footerKey?: string;
}

export type FetchData<T> = (
  currentPage?: number,
  itemsPerPage?: number,
) => Promise<{ result: T[]; totalLength: number }>;

export interface UseTableOptions<T> {
  fetchData: FetchData<T>;
  itemsPerPage: number;
  isServerSidePagination?: boolean;
}
