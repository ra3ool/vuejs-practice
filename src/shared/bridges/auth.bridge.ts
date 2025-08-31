import { useAuthStore } from '@/auth/stores';

export function useAuthBridge() {
  const authStore = useAuthStore();
  return {
    isAuthenticated: authStore.isAuthenticated,
  };
}
