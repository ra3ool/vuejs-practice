import { authApi } from '@/auth/client';
import type {
  LoginRequestPayload,
  LoginResponse,
  registerRequestPayload,
  User,
} from '@/auth/types';

const authRepository = {
  login: async (payload: LoginRequestPayload): Promise<LoginResponse> => {
    const response = await authApi.post('/auth/signin', payload);
    return response.data;
  },

  register: async (payload: registerRequestPayload): Promise<LoginResponse> => {
    const response = await authApi.post('/auth/signup', payload);
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await authApi.get('/auth/me');
    return response.data;
  },

  logout: async () => {
    await authApi.post('/auth/logout');
  },

  refreshToken: async (refreshToken: string) => {
    //TODO implement this later
    return { accessToken: '', refreshToken };
  },
};

export { authRepository };
