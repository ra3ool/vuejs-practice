import type { TableRow, UseTableOptions } from '../types';

export function useTable<T extends TableRow>(options: UseTableOptions<T>) {
  const {
    fetchData,
    itemsPerPage = 10,
    isServerSidePagination = false,
  } = options;

  const data: Ref<T[]> = ref([]);
  const totalLength = ref(0);
  const loading = ref(false);
  const currentPage = ref(1);

  const handleFetchData = async () => {
    loading.value = true;
    try {
      const response = isServerSidePagination
        ? await fetchData(currentPage.value, itemsPerPage)
        : await fetchData();
      data.value = response.result;
      totalLength.value = response.totalLength;
    } finally {
      loading.value = false;
    }
  };

  watch([currentPage, () => itemsPerPage], () => handleFetchData(), {
    immediate: true,
  });

  return {
    data,
    loading,
    totalLength,
    currentPage,
    itemsPerPage: ref(itemsPerPage),
    setCurrentPage: (page: number) => {
      currentPage.value = page;
    },
    refresh: handleFetchData,
  };
}
