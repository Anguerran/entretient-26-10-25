import { z } from "zod";

export const validateFindRfTokenById = z.object({
  id: z.string({ message: "id can not be empty" }),
});
