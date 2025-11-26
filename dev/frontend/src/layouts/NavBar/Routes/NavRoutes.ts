import { HomeRoutes } from "../../../modules/Home/application/routes/Routes";

export const NavRoutes = {
  home: () => HomeRoutes.home(),
  dashboard: () => "/dashboard",
  client: () => "/client",
  manager: () => "/manager",
  assurance: () => "/assurance",
};
