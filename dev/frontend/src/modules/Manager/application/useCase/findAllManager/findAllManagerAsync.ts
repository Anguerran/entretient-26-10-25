
import { createAppAsyncThunk } from "../../../../../App/Store/createAppAsyncThunk";
import { FindAllManagerResponse } from "./FindAllManagerResponse"
import { FindAllManagerCommand } from "./FindAllManagerCommand"
import { ManagerApiRoutes } from "../../routes/apiRoutes"
export const findAllManagerAsync= createAppAsyncThunk< FindAllManagerResponse,FindAllManagerCommand>
    (
  ManagerApiRoutes.findAllManager(),
  async (FindAllManagerCommand, { extra: { ManagerGateway}, rejectWithValue }) => {
    try {
      const res = await ManagerGateway.findAllManager(FindAllManagerCommand);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);