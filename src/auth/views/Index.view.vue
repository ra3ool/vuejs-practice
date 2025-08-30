<script lang="ts" setup>
defineOptions({
  name: 'authView',
});
</script>

<template>
  <div class="auth">
    <Card class="auth__content">
      <RouterView />
    </Card>
  </div>
</template>

<style scoped lang="scss">
.auth {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-lime-100);

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 400px;

    --c-card-padding-x: 20px;
    --c-card-padding-y: 20px;
  }
}
</style>
