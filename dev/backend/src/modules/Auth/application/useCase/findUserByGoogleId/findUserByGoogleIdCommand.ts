
import { z } from 'zod'
import { validateFindUserByGoogleId } from '../../validations/validateFindUserByGoogleId'



export type FindUserByGoogleIdCommand = z.infer<typeof  validateFindUserByGoogleId>