import { z } from 'zod';

export const loginSchema = z
  .object({
    identifier: z
      .string({ message: 'Email or username is required' })
      .min(1, 'Email or username is required'),
    password: z
      .string({ message: 'Password is required' })
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Password must contain uppercase, lowercase, and number',
      ),
    remember: z.boolean(),
  })
  .superRefine((data, ctx) => {
    const { identifier } = data;
    if (identifier.includes('@')) {
      // Validate as email
      const emailResult = z.email().safeParse(identifier);
      if (!emailResult.success) {
        ctx.addIssue({
          code: 'custom',
          message: 'Please enter a valid email address',
          path: ['identifier'],
        });
      }
    } else {
      // Validate as username
      if (identifier.length < 4) {
        ctx.addIssue({
          code: 'custom',
          message: 'Username must be at least 4 characters',
          path: ['identifier'],
        });
      }
    }
  });

export const responseSchema = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
  refreshToken: z.string().optional(),
  user: z.object({
    id: z.number(),
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email format'),
    role: z.string(),
  }),
});
