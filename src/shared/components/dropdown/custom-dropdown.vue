<script setup lang="ts">
interface DropdownItem {
  id: number;
  label: string;
  class?: string;
}
interface Props {
  triggerText?: string;
  align?: 'left' | 'right';
  items?: DropdownItem[];
}

withDefaults(defineProps<Props>(), {
  triggerText: 'dropdown',
  align: 'left',
  items: () => [],
});
const emit = defineEmits<{ (e: 'item:click', item: DropdownItem): void }>();

const isOpen = defineModel({
  default: false,
});
const dropdownRef = ref<HTMLElement | null>(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isOpen.value = false;
};

const itemClick = (item: DropdownItem) => {
  emit('item:click', item);
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);
});
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div class="relative inline-block select-none" ref="dropdownRef">
    <div @click="toggle" class="inline-flex items-center justify-center w-full">
      <slot name="trigger">
        <button
          type="button"
          class="px-4 py-2 bg-blue-500 text-white rounded"
          aria-haspopup="true"
          :aria-expanded="isOpen"
        >
          {{ triggerText }}
        </button>
      </slot>
    </div>

    <div
      class="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-bg-primary dark:bg-bg-primary ring-1 ring-opacity-5 transition-all duration-100 overflow-hidden"
      :class="[
        isOpen
          ? 'transform opacity-100 scale-100'
          : 'transform opacity-0 scale-95 pointer-events-none',
        align === 'right' ? 'right-0' : 'left-0',
      ]"
      role="menu"
      tabindex="-1"
    >
      <div class="py-1 bg-white" role="none">
        <slot>
          <div
            v-for="item of items"
            :key="item.id"
            class="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            :class="item.class ? item.class : ''"
            role="menuitem"
            tabindex="-1"
            @click="itemClick(item)"
          >
            {{ item.label }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
