import { RootState } from "../../../../../../App/Store/Store";
import { findAllManagerAdapter } from "./findAllManagerSlice";

export const findAllManagerLoading = (state: RootState) =>state.findAllManager_slice.loading;
export const findAllManagerError = (state: RootState) =>state.findAllManager_slice.error;
export const findAllManagerAdapterSelector = findAllManagerAdapter.getSelectors<RootState>(
    (state) => state.findAllManager_slice.collection
  )