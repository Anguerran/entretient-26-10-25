import { z } from "zod";

export const validateAuthCreateUserCommand = z.object({
  email: z
    .string({ message: "Email can not be empty" })
    .email({ message: "Invalid email" }),
  firstName: z.string({ message: "invalid FirstName" }),
  profilImage: z.string({ message: "invalid Profile Email" }).optional(),
  lastName: z.string({ message: "invalid lastName" }),
  role: z.string({ message: "invalid role" }),
  password: z.string({ message: "invalid passord" }).optional(),
  googleId: z.string({ message: "Invalid google id" }).optional(),
});
