import { configureStore } from "@reduxjs/toolkit";
import artistSliceReducer from "./slices/artist";

export const store = configureStore({
    reducer: {
        artists: artistSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
