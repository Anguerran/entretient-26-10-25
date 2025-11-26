import { Navigate, RouteObject } from "react-router-dom";
import { NavRoutes } from "../../layouts/NavBar/Routes/NavRoutes";

type Props = {
  redirectUrl?: string;
  isAuthorized?: boolean;
} & RouteObject;

const RouteWrapper = ({
  isAuthorized,
  redirectUrl,
  ...props
}: Props): Props => {
  if (!isAuthorized) {
    return {
      ...props,
      element: <Navigate to={redirectUrl || NavRoutes.home()} />,
    };
  }

  return { ...props };
};

export default RouteWrapper;
