import { z } from "zod";
import { validateLogout } from "../../validations/validateLogout";

export type logOutCommand = z.infer<typeof validateLogout>;
