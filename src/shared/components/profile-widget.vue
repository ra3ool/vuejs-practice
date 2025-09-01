<script setup lang="ts">
defineOptions({
  name: 'ProfileWidget',
});
defineProps({
  name: { type: String, required: true },
});
</script>

<template>{{ name }}</template>
