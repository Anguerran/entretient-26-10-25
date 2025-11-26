import { z } from "zod";

export const validateFindUserByGoogleId = z.object({
  googleId: z.string({ message: "invalide googleId" }).optional(),
});
