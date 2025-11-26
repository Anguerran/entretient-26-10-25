import { combineReducers } from "@reduxjs/toolkit";
import { findAllManagerSlice } from "../../modules/Manager/application/useCase/findAllManager/slice/findAllManagerSlice";

export const rootReducer = combineReducers({
  [findAllManagerSlice.name]: findAllManagerSlice.reducer,

});
