import { z } from "zod";
import { validateFindRfTokenById } from "../../validations/validateFindRfTokenById";

export type FindRfTokenByIdCommand = z.infer<typeof validateFindRfTokenById>;
