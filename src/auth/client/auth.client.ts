import { createApiClient } from '@/shared/clients';

export const authClient = createApiClient({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
