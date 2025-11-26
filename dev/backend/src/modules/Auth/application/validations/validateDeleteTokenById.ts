import { z } from "zod";

export const validateDeleteTokenById = z.object({
  id: z.string({ message: "token id can not be empty can not be empty" }),
});
