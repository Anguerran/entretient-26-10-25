import { string, z } from "zod";

export const validateLogout = z.object({
  token: string({ message: "Invalide token" }),
  refreshToken: string({ message: "Invalide re.optional()fresh token" }),
  refreshTokenId: string({ message: "Invalide refresh token id" })
});
