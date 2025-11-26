import { z } from "zod";
import { validateFindAllManager } from "../../validations/validateFindAllManager";

export type FindAllManagerCommand = z.infer<typeof validateFindAllManager>;
