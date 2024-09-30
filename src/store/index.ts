import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth";
import { productSlice } from "./slice/product";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        product: productSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: true,
        }),
})
export default store;
export type RootStore = ReturnType<typeof store.getState>;