import { z } from "zod";

export const validateCreateRefreshToken = z.object({
  userId: z.string({ message: "Invalide userId while saving the token" }),
  hashedToken: z.string({ message: "error while hashing the token" }),
  expiresAt: z.date({
    message: "error while setting the token expiration date",
  }),
});
