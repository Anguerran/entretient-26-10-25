
import { z } from 'zod'
import { validateUpdateManagerById } from '../../validations/validateUpdateManagerById'



export type UpdateManagerByIdCommand = z.infer<typeof  validateUpdateManagerById>