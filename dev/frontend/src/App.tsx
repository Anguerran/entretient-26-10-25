import { FC } from "react";
import "./App.css";
import { CreateAppRouter } from "./App/Router/Router";
import { RouterProvider } from "react-router-dom";
import { AppStore } from "./App/Store/Store";

type Props = {
  store: AppStore;
};

const App: FC<Props> = ({ store }) => {
  const router = CreateAppRouter(store);

  return <RouterProvider router={router} />;
};

export default App;
