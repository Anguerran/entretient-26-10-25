import { createBrowserRouter } from "react-router-dom";
import { AppStore } from "../Store/Store";

import RouteWrapper from "./RouteWrapper";
import { NavBarRouter } from "../../layouts/NavBar/Routes/Router";
import { HomeRoutes } from "../../modules/Home/application/routes/Routes";

export const CreateAppRouter = (store: AppStore) => {
  return createBrowserRouter([
    RouteWrapper({
      isAuthorized: false,
      path: "/",
      redirectUrl: HomeRoutes.home(),
    }),
    ...NavBarRouter(store),

  ]);
};
