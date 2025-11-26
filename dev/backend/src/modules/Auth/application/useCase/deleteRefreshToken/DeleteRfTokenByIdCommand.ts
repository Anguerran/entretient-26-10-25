import { z } from "zod";
import { validateDeleteTokenById } from "../../validations/validateDeleteTokenById";

export type DeleteRfTokenByIdCommand = z.infer<typeof validateDeleteTokenById>;
