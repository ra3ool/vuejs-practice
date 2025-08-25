<template>
  <h1 class="playground">This is a PlayGround</h1>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <router-link :to="{ name: 'components.input' }">components.input</router-link>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PlayGround',
});
console.log('playground');
</script>
