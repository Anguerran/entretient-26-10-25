
import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { findAllManagerAsync } from "../findAllManagerAsync"
import { ErrorModel } from "../../../../../../shared/request/Error/AppError";
import { LoadingState } from "../../../../../../shared/request/loadingState/loadingState";
import { ManagerModel } from "@/modules/Manager/model/ManagerModel";



export interface InitialState {
    loading:LoadingState,
    error?:ErrorModel,
    collection:{
        ids:string[],
        entities:Record<string,ManagerModel>
    }
}

const initialState: InitialState={
    loading:LoadingState.idle,
    collection:{
        ids:[],
        entities:{}
    }
}


export const findAllManagerAdapter = createEntityAdapter<ManagerModel>()

export const findAllManagerSlice = createSlice({
    name:"findAllManager_slice",
    initialState,
    reducers:{
        clearError:(state)=>{
            state.error = undefined
            state.loading = LoadingState.idle       
        },
    },
        extraReducers:(builder)=>{
            builder
            .addCase(findAllManagerAsync.pending,(state)=>{
                state.loading=LoadingState.pending
                state.error =undefined
            })
            .addCase(findAllManagerAsync.rejected,(state,action)=>{
                state.loading=LoadingState.failed
                state.error =action.payload as ErrorModel
            })
            .addCase(findAllManagerAsync.fulfilled,(state,action)=>{
                state.loading=LoadingState.success
                state.error = undefined
                 findAllManagerAdapter.setAll(state.collection,action.payload)
            })
        }
})