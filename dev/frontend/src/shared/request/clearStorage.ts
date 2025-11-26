import { HomeRoutes } from "../../modules/Home/application/routes/Routes";

export const clearStorage = async () => {
  setTimeout(() => {
    localStorage.clear();
    window.open(HomeRoutes.base(), "_self");
  }, 2000);
};
