<script setup lang="ts">
defineOptions({
  name: 'paginationComponent',
});
import { DOTS, usePagination } from '@/components/composables';
import type { PaginationProps } from '@/components/types';

const props = defineProps<PaginationProps>();
const emit = defineEmits<{
  (e: 'pageChange', page: number): void;
}>();

const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

const paginationRange = usePagination({
  currentPage: props.currentPage, //TODO make this reactive with computed
  totalItems: props.totalItems,
  itemsPerPage: props.itemsPerPage,
});
console.log('paginationRange :', paginationRange.value); //FIXME will return []

function goToPage(page: number) {
  if (page < 1 || page > totalPages || page === props.currentPage) return;
  emit('pageChange', page);
}

function buttonClasses(isActive: boolean) {
  return [
    'px-3 py-1 rounded-md select-none',
    isActive
      ? 'bg-blue-600 dark:bg-blue-500 text-white cursor-not-allowed'
      : 'bg-neutral-100 dark:bg-neutral-700 text-gray-900 dark:text-gray-100 hover:bg-neutral-200 dark:hover:bg-neutral-600 cursor-pointer',
  ];
}
</script>

<template>
  <div v-if="currentPage > 0 && paginationRange.length >= 2" class="w-full">
    <nav class="flex justify-between items-center p-4">
      <div class="flex gap-2">
        <button
          :class="buttonClasses(currentPage === 1)"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          &lt;
        </button>

        <template v-for="(pageNumber, index) in paginationRange" :key="index">
          <span
            v-if="pageNumber === DOTS"
            class="px-3 py-1 text-gray-900 dark:text-gray-100"
          >
            ...
          </span>

          <button
            v-else
            :class="buttonClasses(currentPage === pageNumber)"
            :disabled="currentPage === pageNumber"
            @click="goToPage(pageNumber as number)"
          >
            {{ pageNumber }}
          </button>
        </template>

        <button
          :class="buttonClasses(currentPage === totalPages)"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          &gt;
        </button>
      </div>

      <span class="text-sm text-gray-600 dark:text-gray-300">
        Showing
        {{ Math.min((currentPage - 1) * itemsPerPage + 1, totalItems) }}
        to {{ Math.min(currentPage * itemsPerPage, totalItems) }} of
        {{ totalItems }} items
      </span>
    </nav>
  </div>
</template>
