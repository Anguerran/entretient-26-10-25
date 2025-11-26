import { RouteObject } from "react-router-dom";
import { AppStore } from "../../../../App/Store/Store";
import { HomePage } from "../../ui/components/HomePage";
import { HomeRoutes } from "./Routes";
import { ManagerRouter } from "../../../Manager/application/routes/Router";

export const HomeRouter = (store: AppStore): RouteObject[] => {
  return [
    {
      index: true,
      path: HomeRoutes.home(),
      element: <HomePage />,
    },
    ...ManagerRouter(store),
  ];
};
