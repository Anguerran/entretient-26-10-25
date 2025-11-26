import { validateAuthCreateUserCommand } from '../../validations/validateAuthCreateUser';
import { z } from "zod";

export type AuthCreateUserCommand  = z.infer<typeof validateAuthCreateUserCommand>