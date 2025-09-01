import { useAuthStore } from '@/auth/stores';
import type {
  LoginFormData,
  LoginResponse,
  RegisterFormData,
} from '@/auth/types';

export function useAuthBridge() {
  const authStore = useAuthStore();
  const router = useRouter();
  return {
    isAuthInUse: authStore.loading,
    username: authStore.user?.username,

    async login(data: LoginFormData) {
      const res = (await authStore.login(data)) as LoginResponse;
      if (res?.accessToken) router.replace({ name: 'dashboard' });
    },

    async register(data: RegisterFormData) {
      const res = (await authStore.register(data)) as LoginResponse;
      if (res?.accessToken) router.replace({ name: 'dashboard' });
    },

    async logout() {
      await authStore.logout();
      router.replace({ name: 'signin' });
    },
  };
}
