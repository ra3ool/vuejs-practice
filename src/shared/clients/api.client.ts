import { setupInterceptors } from '@shared/libs/axios';
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

/**
 * Create a new Axios client with shared interceptors
 */
export function createApiClient(config: AxiosRequestConfig): AxiosInstance {
  const api = axios.create({
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...config, // override defaults (e.g., baseURL)
  });

  setupInterceptors(api);

  return api;
}
