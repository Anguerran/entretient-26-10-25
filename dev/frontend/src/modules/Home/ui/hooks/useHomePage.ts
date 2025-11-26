import { useFindAllManager } from "../../../Manager/application/useCase/findAllManager/useFindAllManager";

export const useHomePage = () => {
  const req = useFindAllManager();
  console.log("req", req);
  return { actions: {}, states: {} };
};

