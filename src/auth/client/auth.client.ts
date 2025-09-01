import { createApiClient } from '@/shared/clients';

export const authApi = createApiClient({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
