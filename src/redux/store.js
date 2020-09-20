import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer, FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { phoneBookReducer, errors } from "./phoneBook/reducers";

const middleware = [...getDefaultMiddleware({
  serializableCheck:{
    ignoredActions:[FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
  },
}), logger];

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["errors"],
};

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  errors: errors,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default {store, persistor}