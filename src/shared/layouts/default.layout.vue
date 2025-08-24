<script setup lang="ts">
defineOptions({
  name: 'defaultLayout',
});
</script>

<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
}
</style>
