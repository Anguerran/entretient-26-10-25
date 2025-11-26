import {
  addListener,
  createListenerMiddleware,
  TypedAddListener,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { appDispatch, RootState } from "./Store";
import { Dependencies } from "../Dependencies/Dependencies";

export const listenerMddlewere = createListenerMiddleware<
  RootState,
  appDispatch,
  Dependencies
>();

export type appStartListening = TypedStartListening<
  RootState,
  appDispatch,
  Dependencies
>;

export const startAppListening =
  listenerMddlewere.startListening as appStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  appDispatch
>;

