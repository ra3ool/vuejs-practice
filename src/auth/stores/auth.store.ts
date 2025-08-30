import { authService } from '@/auth/services';
import type {
  LoginFormData,
  LoginResponse,
  RegisterFormData,
  User,
} from '@/auth/types';
import { defineStore } from 'pinia';
import { piniaCryptoSerializer } from '../libs';

const storageSecretKey = import.meta.env.VITE_ENCRYPT_STORAGE_KEY;

export const useAuthStore = defineStore(
  'auth',
  () => {
    // State
    const user = ref<User | null>(null);
    const loading = ref(false);

    // Getters
    const isAuthenticated = computed(() => {
      return !!user.value;
    });

    // Actions
    const login = async (
      credentials: LoginFormData,
    ): Promise<LoginResponse | string> => {
      loading.value = true;
      try {
        const data: LoginResponse = await authService.login(credentials);
        setLoginData(data);
        return data;
      } catch (error: unknown) {
        console.error('Login error:', error);
        const errorMessage =
          error instanceof Error ? error.message : 'Login failed';
        // Return undefined since LoginResponse doesn't have success/error fields
        return errorMessage;
      } finally {
        loading.value = false;
      }
    };

    const register = async (
      credentials: RegisterFormData,
    ): Promise<LoginResponse | string> => {
      loading.value = true;
      try {
        const data: LoginResponse = await authService.register(credentials);
        setLoginData(data);
        return data;
      } catch (error: unknown) {
        console.error('Registration error:', error);
        const errorMessage =
          error instanceof Error ? error.message : 'Registration failed';
        // Return undefined since LoginResponse doesn't have success/error fields
        return errorMessage;
      } finally {
        loading.value = false;
      }
    };

    const setLoginData = (data: LoginResponse): void => {
      if (data.user) {
        user.value = data.user;
        // Token is handled by cookies in the service layer
      }
    };

    const updateUser = (updatedUser: User): void => {
      user.value = updatedUser;
    };

    const getCurrentUser = async (): Promise<User | undefined> => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          user.value = userData;
        }
        return userData;
      } catch (error: unknown) {
        console.error('Get current user error:', error);
        return undefined;
      }
    };

    const logout = async (): Promise<{ status: string; message: string }> => {
      loading.value = true;
      try {
        // const response = await authService.logout();
        user.value = null;
        return { status: 'true', message: 'you logged in successfully' };
      } catch (error: unknown) {
        user.value = null;
        const errorMessage =
          error instanceof Error ? error.message : 'Logout failed';
        return { status: 'error', message: errorMessage };
      } finally {
        loading.value = false;
      }
    };

    const restoreAuth = (): void => {
      // This function can be used to restore auth state if needed
      // The persist plugin will handle automatic restoration
      // You can add custom logic here if required
    };

    return {
      // State
      user,
      loading,
      // Getters
      isAuthenticated,
      // Actions
      login,
      register,
      setLoginData,
      updateUser,
      getCurrentUser,
      logout,
      restoreAuth,
    };
  },
  {
    persist: {
      serializer: piniaCryptoSerializer(storageSecretKey),
      pick: ['user'],
    },
  },
);
