<script lang="ts" setup>
defineOptions({
  name: 'componentView',
});

const route = useRoute();
const routes = route.matched[0].children;
</script>

<template>
  <div class="components p-4">
    <p>components goes here</p>
    <div class="flex gap-3 my-5">
      <RouterLink
        :to="{ name: route.name }"
        class="components__button-link"
        v-for="route of routes"
        :key="route.path"
        exact-active-class="components__button-active"
        >{{ route.path.split('/').pop() }}</RouterLink
      >
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.components {
  &__button-link {
    background-color: var(--color-lime-500);
    color: var(--color-white);
    padding: 5px 10px;
    border-radius: 4px;
  }

  &__button-active {
    background-color: var(--color-lime-800);
  }
}
</style>
