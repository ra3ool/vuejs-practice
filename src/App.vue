<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Layout = defineAsyncComponent(() => import('@shared/layouts/layout.vue'));
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style scoped></style>
