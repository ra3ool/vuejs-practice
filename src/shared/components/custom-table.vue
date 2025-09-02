<script setup lang="ts">
// import NothingFound from '@/components/nothing-found.vue';
import type { CustomTableProps, TableCell, TableRow } from '@/components/types';
import { paginateData, sortData } from '@shared/helpers';

const props = withDefaults(defineProps<CustomTableProps>(), {
  data: () => [],
  tableClassName: '',
  rowClassName: '',
  cellClassName: '',
  loading: false,
  sort: false,
});

const emit = defineEmits<{
  (e: 'onRowClick', row: TableRow): void;
  (e: 'onCellClick', cell: TableCell, row: TableRow): void;
  (e: 'onPageChange', page: number): void;
}>();

const sortColumn = ref('');
const sortDirection = ref<'asc' | 'desc'>('asc');

const handleSort = (columnKey: string) => {
  if (sortColumn.value === columnKey) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortColumn.value = columnKey;
    sortDirection.value = 'asc';
  }
};

const handlePageChange = (page: number) => {
  emit('onPageChange', page);
};

const sortedData = computed(() =>
  sortColumn.value && props.sort
    ? sortData(props.data, sortColumn.value, sortDirection.value)
    : props.data,
);

const displayedData = computed(() =>
  props.pagination
    ? paginateData(
        sortedData.value,
        props.pagination.currentPage,
        props.pagination.itemsPerPage,
      )
    : sortedData.value,
);

const isEmpty = computed(() => !props.data || !props.data.length);
</script>

<template>
  <div class="overflow-x-auto">
    <table
      class="w-full border-separate border border-gray-300 dark:border-gray-600 text-left"
      :class="tableClassName"
      role="table"
    >
      <thead
        class="text-xs text-gray-900 dark:text-gray-100 uppercase bg-neutral-200 dark:bg-neutral-800"
      >
        <tr role="row">
          <th
            v-for="header in headers"
            :key="header.key"
            class="p-2 border border-gray-300 dark:border-gray-600 select-none"
            :class="
              sort && header.sort !== false
                ? 'cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700'
                : ''
            "
            @click="
              sort && header.sort !== false ? handleSort(header.key) : undefined
            "
            role="columnheader"
          >
            <div class="flex justify-between">
              <span>{{ header.value }}</span>
              <span
                v-if="sortColumn === header.key"
                class="text-blue-600 dark:text-blue-400"
              >
                {{ sortDirection === 'asc' ? '▲' : '▼' }}
              </span>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="loading && data.length === 0" role="row">
          <td
            class="text-center p-2 text-gray-900 dark:text-gray-100"
            :colspan="headers.length"
          >
            <Loading :loadingText="loadingText" />
          </td>
        </tr>

        <tr v-else-if="isEmpty" role="row">
          <td
            class="text-center p-2 text-gray-900 dark:text-gray-100"
            :colspan="headers.length"
          >
            <!-- <NothingFound :emptyText="emptyText" /> -->
            {{ emptyText || 'No data available' }}
          </td>
        </tr>

        <tr
          v-else
          v-for="row in displayedData"
          :key="row.id"
          :class="rowClassName"
          role="row"
          @click="emit('onRowClick', row)"
        >
          <td
            v-for="header in headers"
            :key="header.key"
            :class="[
              'text-nowrap border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100',
              cellClassName,
            ]"
            @click="emit('onCellClick', row[header.key] as string, row)"
          >
            <slot :name="`cell-${header.key}`" :value="row[header.key]">
              {{ row[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination
      v-if="pagination"
      :totalItems="sortedData.length"
      :itemsPerPage="pagination.itemsPerPage"
      :currentPage="pagination.currentPage"
      @onPageChange="handlePageChange"
    />
  </div>
</template>
