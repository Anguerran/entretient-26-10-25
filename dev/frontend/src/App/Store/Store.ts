import { listenerMddlewere } from "./listennerMiddlewere";
import { Action, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { Dependencies } from "../Dependencies/Dependencies";
import { persistReducer } from "redux-persist";
import { persistConfig } from "./PersistConfig";
import { rootReducer } from "./Reducers";
import {
  FLUSH,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
} from "redux-persist/es/constants";

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = (extraArgument: Dependencies) =>
  configureStore({
    devTools: true,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: { extraArgument },
        serializableCheck: {
          ignoredActions: [FLUSH, PURGE, REGISTER, REHYDRATE, PAUSE, PERSIST],
        },
        immutableCheck: {
          warnAfter: 300,
        },
      }).prepend(listenerMddlewere.middleware);
    },
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type appDispatch = ThunkDispatch<RootState, Dependencies, Action>;
