<script setup lang="ts">
interface Props {
  isActive?: boolean;
  hasBiggerBubble?: boolean;
  activeLabelText?: string;
  deActiveLabelText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isActive: true,
  hasBiggerBubble: false,
});

const emit = defineEmits<{ (e: 'toggle', value: boolean): void }>();

const toggleActivity = () => {
  emit('toggle', !props.isActive);
};
</script>

<template>
  <div class="flex gap-2 items-center">
    <span
      v-if="props.deActiveLabelText"
      class="text-gray-900 dark:text-gray-100"
    >
      {{ props.deActiveLabelText }}
    </span>

    <div
      :class="[
        'rounded-2xl bg-neutral-200 dark:bg-neutral-700 w-12 flex items-center align-middle cursor-pointer',
        props.hasBiggerBubble ? 'h-4' : 'h-6 p-1',
      ]"
      @click="toggleActivity"
    >
      <span :class="['duration-300', props.isActive ? 'grow-1' : '']"></span>
      <span
        :class="[
          'flex rounded-full aspect-square duration-300',
          props.isActive
            ? 'bg-blue-600 dark:bg-blue-500'
            : 'bg-neutral-400 dark:bg-neutral-600',
          props.hasBiggerBubble ? 'h-6' : 'h-full',
        ]"
      ></span>
    </div>

    <span v-if="props.activeLabelText" class="text-gray-900 dark:text-gray-100">
      {{ props.activeLabelText }}
    </span>
  </div>
</template>
