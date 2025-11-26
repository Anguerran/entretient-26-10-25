import { z } from "zod";
import { validateFindRftokenByUserId } from "../../validations/validateFindRfTokenByUserId";

export type FindRfTokenByUserIdCommand = z.infer<
  typeof validateFindRftokenByUserId
>;
 