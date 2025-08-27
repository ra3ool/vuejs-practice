<script setup lang="ts">
interface Props {
  title?: string;
  headerClass?: string;
  expandedHeaderClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Panel Title',
  headerClass: '',
  expandedHeaderClass: '',
});

const isExpanded = defineModel<boolean>({
  default: false,
});
const contentHeight = ref(0);
const contentRef = ref<HTMLElement | null>(null);

const observer = ref<MutationObserver | null>(null);

onMounted(() => {
  if (contentRef.value) {
    observer.value = new MutationObserver(() => calculateHeight());

    observer.value.observe(contentRef.value, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    calculateHeight();
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});

const calculateHeight = () => {
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight;
  }
};

const handleToggle = () => (isExpanded.value = !isExpanded.value);
</script>

<template>
  <div class="w-full rounded-lg overflow-hidden">
    <div
      :class="[isExpanded ? props.expandedHeaderClass : '', props.headerClass]"
    >
      <div
        class="w-full flex justify-between items-center p-3 text-left focus:outline-none transition-colors duration-200 cursor-pointer select-none"
        @click="handleToggle"
        :aria-expanded="isExpanded"
      >
        <span class="text-gray-900 dark:text-gray-100">{{ props.title }}</span>
        <span
          class="text-gray-900 dark:text-gray-100 text-sm duration-500"
          :class="isExpanded ? 'rotate-180' : ''"
        >
          <!-- <SvgLoader name="chevron-down" /> -->
        </span>
      </div>
    </div>

    <div
      v-if="$slots.default"
      :style="{
        height: isExpanded ? `${contentHeight}px` : '0',
        opacity: isExpanded ? 1 : 0,
        overflow: 'hidden',
        transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out',
      }"
    >
      <div ref="contentRef" class="p-4 text-gray-900 dark:text-gray-100">
        <slot />
      </div>
    </div>
  </div>
</template>
