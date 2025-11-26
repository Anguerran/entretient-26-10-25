import { z } from "zod";

export const validateCreateManager = // direction.schema.ts
  z.object({
  // Add the required fields
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  
  role: z.string().min(1, { message: "Role is required." }),
  email: z.string().email({ message: "Invalid email address format." }), 
//   password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  
  // Do NOT include the generic 'name' field unless you add it to your Prisma schema.
});