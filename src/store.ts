import { configureStore } from "@reduxjs/toolkit";
import artistSliceReducer from "./slices/artist";
import inspirationReducer from "./slices/inspiration";
import loginSlice from "./slices/login";
import logoutSlice from "./slices/logout";
import userAuthSlice from "./slices/auth";
import registerSlice from "./slices/register";

export const store = configureStore({
    reducer: {
        artists: artistSliceReducer,
        inspiration: inspirationReducer,
        userLogin: loginSlice,
        userLogout: logoutSlice,
        userAuth: userAuthSlice,
        userRegister: registerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
