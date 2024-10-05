import { configureStore } from "@reduxjs/toolkit";
import { userSliceApi } from "./slice/api";

const store = configureStore({
    reducer: {
    [userSliceApi.reducerPath]: userSliceApi.reducer,
    },
    
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSliceApi.middleware),
})
export default store;
export type RootStore = ReturnType<typeof store.getState>;