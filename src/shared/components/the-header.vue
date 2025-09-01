<template>
  <header class="header">
    <ProfileWidget :name="username" />
    <CustomDropdown align="right">
      <template #trigger>
        <CustomButton variant="outline" size="sm">Menu</CustomButton>
      </template>
      <DropdownItem @click="console.log('profile')">profile</DropdownItem>
      <DropdownItem @click="console.log('settings')">settings</DropdownItem>
      <DropdownItem @click="logout" class="text-red-500 hover:bg-red-50">
        logout
      </DropdownItem>
    </CustomDropdown>
  </header>
</template>

<script setup>
import { useAuthBridge } from '@shared/bridges';
defineOptions({
  name: 'headerComponent',
});
const { username, logout } = useAuthBridge();
//TODO add confirmation before logout
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 12px 32px;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
