<script setup lang="ts">
defineOptions({
  name: 'DropDownView',
});

const items = reactive([
  {
    id: 1,
    label: 'Option 1',
  },
  {
    id: 2,
    label: 'Option 2',
  },
  {
    id: 3,
    label: 'Delete',
    class: 'text-red-500 hover:bg-red-50',
  },
]);

const handleClickItem = (item: {
  id: number;
  label: string;
  class?: string;
}) => {
  console.log(item.label);
};
</script>

<template>
  <!-- usage 1 -->
  <div class="mb-12">
    <CustomDropdown>
      <template #trigger>
        <span class="px-4 py-2 bg-blue-500 text-white rounded"> Menu </span>
      </template>
      <DropdownItem @click="console.log('Option 1')"> Option 1 </DropdownItem>
      <DropdownItem @click="console.log('Option 2')"> Option 2 </DropdownItem>
      <DropdownItem @click="console.log('Delete')" :class="items[2].class">
        Delete
      </DropdownItem>
    </CustomDropdown>
  </div>

  <!-- usage 2 -->
  <div class="mb-12">
    <CustomDropdown
      triggerText="Menu"
      :items="items"
      @item:click="handleClickItem"
    />
  </div>
</template>
