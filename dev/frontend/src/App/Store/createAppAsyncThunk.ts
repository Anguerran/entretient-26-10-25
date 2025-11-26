import { createAsyncThunk } from "@reduxjs/toolkit";
import { appDispatch, RootState } from "./Store";
import { Dependencies } from "../Dependencies/Dependencies";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  extra: Dependencies;
  dispatch: appDispatch;
}>()
