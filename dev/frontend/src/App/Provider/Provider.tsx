import { Persistor } from "redux-persist";
import App from "../../App";
import {  AppStore } from "../Store/Store";
import { FC } from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  store: AppStore;
  persist: Persistor;
};
const Providers: FC<Props> = ({ persist, store }) => {
  return (
    <PersistGate persistor={persist}>
      <StoreProvider store={store}>
        <App store={store} />
      </StoreProvider>
    </PersistGate>
  );
};

export default Providers;
