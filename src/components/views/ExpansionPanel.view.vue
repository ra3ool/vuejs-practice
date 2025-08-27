<script setup lang="ts">
defineOptions({
  name: 'ExpansionPanelView',
});
const isExpanded = ref(true);
const count = ref(1);
</script>

<template>
  <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
    expansion panel
  </h3>
  <CustomButton @click="count++" class="mb-2">add expansion child</CustomButton>
  <ExpansionPanel
    v-model="isExpanded"
    title="title"
    class="border border-gray-300 dark:border-gray-700"
    expandedHeaderClass="border-gray-300 dark:border-gray-700 border-b-1"
  >
    <p v-for="i in count" :key="i">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat eveniet
      fuga assumenda aut hic porro voluptate odio voluptates. Nobis obcaecati
      ipsam dignissimos adipisci eos, quidem consequatur maxime inventore saepe
      officiis!
    </p>
  </ExpansionPanel>
</template>
