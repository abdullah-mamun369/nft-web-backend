import { z } from 'zod';

const createNftValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    logoUrl: z.string(),
    address: z.string(),
  }),
});

export const NftValidations = { createNftValidationSchema };
