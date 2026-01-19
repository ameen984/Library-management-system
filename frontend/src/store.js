import { configureStore } from '@reduxjs/toolkit'


import { apislice } from './services/apiSlice'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apislice.reducerPath]: apislice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apislice.middleware),
})


