import { z } from "zod";

export const validateFindRftokenByUserId = z.object({
  userId: z.string({ message: "userId can not be empty" }),
});
