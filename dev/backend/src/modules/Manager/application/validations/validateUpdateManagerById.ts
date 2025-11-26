import { z } from "zod";

export const validateUpdateManagerById = z.object({
  // Add the required fields
  firstName: z
    .string()
    .min(1, { message: "First name is required." })
    .optional(),
  lastName: z.string().min(1, { message: "Last name is required." }).optional(),
  id: z.string(),
  role: z.string().min(1, { message: "Role is required." }).optional(),
  email: z
    .string()
    .email({ message: "Invalid email address format." })
    .optional(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .optional(),

  // Do NOT include the generic 'name' field unless you add it to your Prisma schema.
});
