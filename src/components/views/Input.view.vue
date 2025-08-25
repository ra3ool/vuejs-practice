<script setup lang="ts">
defineOptions({
  name: 'InputView',
});
const text = ref('');
</script>

<template>
  <div class="mb-12">
    <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
      Custom Input Component with floatingLabel
    </h3>
    <CustomInput
      name="input1"
      label="Username"
      v-model="text"
      inputStyle="floatingLabel"
    />
    <span class="text-gray-900 dark:text-gray-100">{{ text }}</span>
  </div>
  <div class="mb-12">
    <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
      Custom Input Component with floatingLabel and placeholder
    </h3>
    <CustomInput
      name="input1"
      label="Username"
      v-model="text"
      placeholder="Enter username"
      inputStyle="floatingLabel"
    />
    <span class="text-gray-900 dark:text-gray-100">{{ text }}</span>
  </div>
  <div class="mb-12">
    <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
      Custom Input Component with border style
    </h3>
    <CustomInput
      name="input3"
      label="Username"
      v-model="text"
      placeholder="Enter username"
      inputStyle="border"
    />
    <span class="text-gray-900 dark:text-gray-100">{{ text }}</span>
  </div>
  <div class="mb-12">
    <h3 class="mb-2 font-bold text-gray-900 dark:text-gray-100">
      Custom Input Component with underline style
    </h3>
    <CustomInput
      name="input4"
      label="Username"
      v-model="text"
      placeholder="Enter username"
      inputStyle="underline"
    />
    <span class="text-gray-900 dark:text-gray-100">{{ text }}</span>
  </div>
</template>
