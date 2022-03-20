import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers";

const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
