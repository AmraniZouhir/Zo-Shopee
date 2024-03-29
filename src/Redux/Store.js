import { configureStore } from "@reduxjs/toolkit";
import ZShopeeReducer from "./Z-shopeeSlice";
import storage from 'redux-persist/lib/storage'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, ZShopeeReducer)


export const store = configureStore({
    reducer: {ZshopeeSlic :persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})
export let persistor = persistStore(store)
