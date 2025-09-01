<template>
  <div class="signin">
    <form class="signin__form" @submit.prevent="handleSignin">
      <CustomInput
        label="Username or Email"
        name="identifier"
        rules="required"
        v-model="data.identifier"
      />
      <CustomInput
        label="Password"
        name="password"
        rules="required|min:5"
        type="password"
        v-model="data.password"
      />
      <div class="flex gap-2">
        <input type="checkbox" v-model="data.remember" id="remember" />
        <label for="remember">remember me</label>
      </div>
      <CustomButton type="submit">ورود</CustomButton>
    </form>
    <div>
      don't have account?
      <RouterLink :to="{ name: 'signup' }">SignUp</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useAuthBridge } from '@shared/bridges';
const authBridge = useAuthBridge();

//TODO use vee-validate, vue-query, error handling and fixing ui when I have time :)
// const { handleSubmit, resetField } = useForm();

// const handleLogin = handleSubmit(async (formData) => {
//   try {
//     await authBridge.login({ formData });
//     router.replace({ name: "dashboard" });
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//   }
// });

const data = reactive({
  identifier: '',
  password: '',
  remember: false,
});
const handleSignin = () => authBridge.login(data);
</script>

<style lang="scss" scoped>
.signin {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
