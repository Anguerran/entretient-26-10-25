import { z } from "zod";
import { validateAuthFindUserById } from "../../validations/validateAuthFindUserById";

export type AuthFindUserByIdCommand = z.infer<typeof validateAuthFindUserById>;

