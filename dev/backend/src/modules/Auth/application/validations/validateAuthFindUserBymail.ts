import { z } from "zod";

export const validateAuthFindUserByMail = z.object({
  email: z
    .string({ message: "Email can not be empty" })
    .email({ message: "Invalid email" }),
});
