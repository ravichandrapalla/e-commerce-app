import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["cart"],
};

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

const persisteReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: persisteReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
