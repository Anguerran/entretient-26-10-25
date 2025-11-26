
import { z } from 'zod'
import { validateDeleteManager } from '../../validations/validateDeleteManager'



export type DeleteManagerCommand = z.infer<typeof  validateDeleteManager>