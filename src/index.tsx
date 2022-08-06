import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {store} from "./redux/store";
import {Provider} from "react-redux";

import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const container = document.getElementById("root");
const root = createRoot(container as Element);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
