<template>
  <header class="header">
    <span>dropdown</span>
    <span>button</span>
    <!-- <AvatarDropDown
      :items="dropDownItems"
      :label="userFullName"
      @select="handleDropDownSelect"
    />
    <BaseButton
      :disabled="isAuthInUse"
      class="header__button"
      prepend-icon="logout"
      variant="text"
      @click="logout"
      >خروج از حساب کاربری</BaseButton
    > -->
  </header>
</template>

<script setup>
defineOptions({
  name: 'headerComponent',
});
// import { isAuthInUse, userFullName } from '@/shared/bridges';
// const emit = defineEmits(['click:logout']);
// const logout = () => emit('click:logout');

// const dropDownItems = [
//   { id: 1, label: 'نقش ادمین' },
//   { id: 2, label: 'نقش سوپر ادمین' },
//   { id: 3, label: 'نقش کارگر ساده' },
// ];

// const handleDropDownSelect = (data) => {
//   console.log('data :', data);
// };
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
