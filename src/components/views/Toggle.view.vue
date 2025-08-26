<script setup lang="ts">
defineOptions({
  name: 'ToggleView',
});
const isActive = ref(false);
const toggleActivity = (activeStatus: boolean) => {
  isActive.value = activeStatus;
};
</script>

<template>
  <div class="mb-12">
    <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
      first style of toggle component
    </h3>
    <CustomToggle :isActive="isActive" @toggle="toggleActivity" />
  </div>
  <div class="mb-12">
    <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
      second style of toggle component
    </h3>
    <CustomToggle
      :isActive="isActive"
      @toggle="toggleActivity"
      hasBiggerBubble
    />
  </div>
  <div class="mb-12">
    <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
      toggle with labels
    </h3>
    <CustomToggle
      :isActive="isActive"
      @toggle="toggleActivity"
      activeLabelText="yes"
      deActiveLabelText="no"
    />
    <br />
    <CustomToggle
      :isActive="isActive"
      @toggle="toggleActivity"
      hasBiggerBubble
      activeLabelText="enable"
    />
  </div>
</template>
