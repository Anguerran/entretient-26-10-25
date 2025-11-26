import { useSelector } from "react-redux";
import { appDispatch, RootState } from "./Store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
