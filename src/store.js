import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import dataReducer from "./slices/dataSlices";

import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    users: usersReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
