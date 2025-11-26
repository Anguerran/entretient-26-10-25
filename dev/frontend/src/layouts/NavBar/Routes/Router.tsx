import { RouteObject } from "react-router-dom";
import { AppStore } from "../../../App/Store/Store";
import Header from "../../Header/Header";
import { HomeRouter } from "../../../modules/Home/application/routes/Router";
// import { BlogRouter } from "../../../modules/Blog/Routes/Router";

export const NavBarRouter = (store: AppStore): RouteObject[] => {
  return [
    {
      element: <Header />,
      children: [
        ...HomeRouter(store),
      ],
    },
  ];
};
