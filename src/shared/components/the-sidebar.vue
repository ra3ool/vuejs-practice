<template>
  <aside class="sidebar">
    <p class="sidebar__title">simple admin panel</p>
    <ul class="sidebar__menu menu">
      <li v-for="item in menuItems" :key="item.id" class="menu__item">
        <RouterLink
          v-if="$router.hasRoute(item.to)"
          v-slot="{ isActive }"
          :to="{ name: item.to }"
          class="menu__link"
          exact-active-class="menu__link--active"
        >
          <!-- <InfraSvgLoader
            v-if="item.icon"
            :name="
              isActive && item.activeIcon ? item.activeIcon : item.icon
            "
            class="menu__item-icon"
          /> -->
          {{ isActive ? '>' : '' }}
          {{ item.label }}
        </RouterLink>

        <span v-else class="menu__link">
          <!-- <InfraSvgLoader
            v-if="item.icon"
            :name="item.icon"
            class="menu__item-icon"
          /> -->
          {{ item.label }}
        </span>
      </li>
    </ul>
  </aside>
</template>

<script setup>
defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
});
//TODO consider theme changing
</script>

<style scoped lang="scss">
.sidebar {
  width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__title {
    color: var(--color-lime-800);
    font-weight: var(--font-weight-bold);
    font-size: var(--text-xl);
    padding-block: 1.25rem;
    padding-inline: 0.75rem;
  }
}

.menu {
  width: 100%;
  gap: 12px;
  display: flex;
  flex-direction: column;

  &__item {
    width: 100%;
  }

  &__link {
    padding: 12px;
    gap: 8px;
    color: var(--color-gray-600);
    display: flex;
    align-items: center;

    &--active {
      color: var(--color-blue-800);
      background-color: var(--color-lime-300);
    }
  }

  &__item-icon {
    color: var(--color-gray-500);
    width: 24px;
    height: 24px;
  }
}
</style>
