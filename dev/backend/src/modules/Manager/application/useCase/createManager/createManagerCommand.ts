
import { z } from 'zod'
import { validateCreateManager } from '../../validations/validateCreateManager'



export type CreateManagerCommand = z.infer<typeof  validateCreateManager>