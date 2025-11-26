

import{ findAllManagerLoading ,findAllManagerError,findAllManagerAdapterSelector } from './selectors'
import{ findAllManagerSlice } from './findAllManagerSlice'


export const findAllManager ={

    selectors:{
       loading: findAllManagerLoading,
       error: findAllManagerError,
       ...findAllManagerAdapterSelector
    },
    actions:{
    ...findAllManagerSlice.actions
    }
}