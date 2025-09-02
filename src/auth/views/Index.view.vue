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
  background-color: var(--color-neutral-100);

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 400px;
    box-shadow: 0 5px 10px 0 #d7d7d7;

    --c-card-padding-x: 20px;
    --c-card-padding-y: 20px;
  }
}
</style>
