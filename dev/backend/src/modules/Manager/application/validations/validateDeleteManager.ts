import { z } from "zod";

export const validateDeleteManager = z.object({
  id: z.string({ message: "Invalid Id" }),
});
