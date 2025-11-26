
import { z } from 'zod'
import { validateRefreshToken } from '../../validations/validateRefreshToken'



export type RefreshTokenCommand = z.infer<typeof  validateRefreshToken>