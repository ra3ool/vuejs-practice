<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <div
    class="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
    role="menuitem"
    tabindex="-1"
    @click="emit('click')"
  >
    <slot />
  </div>
</template>
