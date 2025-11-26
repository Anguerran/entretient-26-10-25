import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Providers from "./App/Provider/Provider.tsx";
import { createStore } from "./App/Store/Store.ts";
import { extraArgument } from "./App/Dependencies/extraArgument.ts";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore } from "redux-persist";

const store = createStore(extraArgument);
setupListeners(store.dispatch);
const persist = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers store={store} persist={persist} />
  </StrictMode>
);
