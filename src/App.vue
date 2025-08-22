<script setup lang="ts">
const Layout = defineAsyncComponent(() => import('@shared/layouts/layout.vue'));
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style scoped></style>
