import { useCallback, useEffect } from "react";
import { findAllManager } from "./slice/selectorsActions";
import { FindAllManagerCommand } from "./FindAllManagerCommand";
import {
  useAppAppDispatch,
  useAppSelector,
} from "../../../../../App/Store/hooks";
import { findAllManagerAsync } from "./findAllManagerAsync";

export const useFindAllManager = () => {
  const dispatch = useAppAppDispatch();
  const data = useAppSelector((state) =>
    findAllManager.selectors.selectAll(state)
  );
  const error = useAppSelector((state) =>
    findAllManager.selectors.error(state)
  );
  const loading = useAppSelector((state) =>
    findAllManager.selectors.loading(state)
  );

  const execute = useCallback(
    async (command: FindAllManagerCommand) => {
      await dispatch(findAllManagerAsync(command));
    },
    [dispatch]
  );

  useEffect(() => {
    execute({});
  }, [])

  return {
    state: { data, loading, error },
    action: { execute },
  };
};
