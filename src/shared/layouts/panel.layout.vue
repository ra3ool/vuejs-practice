<template>
  <div class="panel-layout">
    <TheSidebar :menu-items="SIDEBAR_ITEMS" class="panel-layout__sidebar" />
    <div class="panel-layout__content">
      <TheHeader
        class="panel-layout__header"
        @click:logout="() => console.log(2)"
      />
      <div class="panel-layout__view">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'panelLayout',
});
import { SIDEBAR_ITEMS } from '@shared/constants';
</script>

<style lang="scss" scoped>
.panel-layout {
  width: 100%;
  height: 100%;
  display: flex;

  &__sidebar {
    flex-shrink: 0;
    background-color: var(--color-white);
    position: sticky;
    top: 0;
    width: 256px;
    height: 100vh;
  }

  &__content {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__header {
    background-color: var(--color-white);
    position: sticky;
    top: 0;
  }

  &__view {
    flex-grow: 1;
    width: 100%;
    background-color: var(--color-neutral-100);
    padding: 20px;
  }
}
</style>
