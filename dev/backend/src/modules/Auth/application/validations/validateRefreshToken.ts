

import {z} from "zod"


export const validateRefreshToken = z.object({
    refreshTokenId:z.string({message:"Invalid refresh token id"})
});
    