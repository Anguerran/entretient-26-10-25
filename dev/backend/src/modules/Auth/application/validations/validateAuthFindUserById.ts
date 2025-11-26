import { z } from "zod";

export const validateAuthFindUserById = z.object({
  id: z
    .string({ message: "id can not be empty" })
});
