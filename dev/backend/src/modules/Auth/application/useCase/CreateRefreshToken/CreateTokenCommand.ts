import { z } from "zod";
import { validateCreateRefreshToken as validateCreateRefreshToken } from "../../validations/validateSaveToken";

export type CreateRefreshTokenCommand = z.infer<typeof validateCreateRefreshToken>;
