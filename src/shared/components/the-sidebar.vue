<template>
  <aside class="sidebar">
    <!-- <InfraSvgLoader class="menu__icon" name="logo-rasam" /> -->
    <ul class="sidebar__menu menu">
      <li v-for="item in menuItems" :key="item.id" class="menu__item">
        <RouterLink
          v-if="isRouteExists(item.to)"
          v-slot="{ isExactActive }"
          :to="{ name: item.to }"
          class="menu__link"
          exact-active-class="menu__link--active"
        >
          <!-- <InfraSvgLoader
            v-if="item.icon"
            :name="
              isExactActive && item.activeIcon ? item.activeIcon : item.icon
            "
            class="menu__item-icon"
          /> -->
          {{ isExactActive ? '' : '' }}
          {{ item.label }}
        </RouterLink>

        <!-- TODO delete after add all panel routes. this is just for visualize items and styling -->
        <span v-else class="menu__link">
          <!-- <InfraSvgLoader
            v-if="item.icon"
            :name="item.icon"
            class="menu__item-icon"
          /> -->
          {{ item.label }}
        </span>
        <!-- delete after add all panel routes -->
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

//TODO delete after add all panel routes.
const router = useRouter();
const isRouteExists = (name) => !!router.hasRoute(name);
//delete after add all panel routes.
</script>

<style scoped lang="scss">
.sidebar {
  padding: 24px 0;
  gap: 24px;
  width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;
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
      background-color: var(--color-blue-100);
    }
  }

  &__item-icon {
    color: var(--color-gray-500);
    width: 24px;
    height: 24px;
  }
}
</style>
