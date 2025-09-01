import z from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string({ message: 'Username is required' })
      .min(4, 'Username must be at least 4 characters'),
    email: z
      .string({ message: 'Email is required' })
      .email('Invalid email format'),
    password: z
      .string({ message: 'Password is required' })
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Password must contain uppercase, lowercase, and number',
      ),
    confirmPassword: z.string({
      message: 'Confirm password is required',
    }),
    terms: z
      .boolean({ message: 'You must accept the terms and conditions' })
      .refine((val) => val === true, {
        message: 'you must accept, there is no other choice',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
