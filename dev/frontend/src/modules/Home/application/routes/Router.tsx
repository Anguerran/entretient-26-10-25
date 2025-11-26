/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouteObject } from "react-router-dom";
import { AppStore } from "../../../../App/Store/Store";
import {HomePage} from "../../ui/components/HomePage";
import { HomeRoutes } from "./Routes";


export const HomeRouter = (_store: AppStore): RouteObject[] => {
  return [
    {
      index: true,
      path: HomeRoutes.home(),
      element: <HomePage />,
    },
  ];
};
