import type { RegisterFormData } from '@/auth/types';

export const toRegisterPayload = (data: RegisterFormData) => {
  const { username, email, password, terms } = data;
  return { username, email, password, terms };
};
