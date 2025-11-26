import { z } from "zod";
import { validateDeleteRfTokensByUserId } from "../../validations/validateDeleteRfTokensByUserId";

export type DeleteRfTokenByUserIdCommand = z.infer<
  typeof validateDeleteRfTokensByUserId
>;
