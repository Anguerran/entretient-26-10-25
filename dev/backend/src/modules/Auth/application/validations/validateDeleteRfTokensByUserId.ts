import { z } from "zod";

export const validateDeleteRfTokensByUserId = z.object({
  id: z.string({ message: "userId can not be empty" }),
});
