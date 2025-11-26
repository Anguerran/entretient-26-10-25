import { z } from "zod";
import { validateAuthFindUserByMail } from "../../validations/validateAuthFindUserBymail";

export type AuthFindUserByMailCommand = z.infer<
  typeof validateAuthFindUserByMail
>;
