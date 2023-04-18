import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";
const cookie = new Cookies();

interface InitialState {
    isLoading: boolean;
    sessionId?: string;
    username: string;
}
const initialState: InitialState = {
    isLoading: false,
    sessionId: "",
    username: "",
};

export const asyncAuth = createAsyncThunk(
    "userAuthSlice/asyncAuth",
    async (sessionId: "") => {
        try {
            const result = await axios.post(
                "http://localhost:5050/users/auth",
                {
                    sessionId: sessionId,
                },
                {
                    withCredentials: true,
                },
            );
            return result.data;
        } catch (error: any) {
            console.log("error");
        }
    },
);

const userAuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginCheck: (state, action: PayloadAction) => {
            state.sessionId = cookie.get("user");
        },
        loginUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(asyncAuth.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(
                asyncAuth.fulfilled,
                (state, { payload: { sessionId, username } }) => {
                    state.isLoading = false;
                    state.sessionId = sessionId;
                    state.username = username;
                },
            )
            .addCase(asyncAuth.rejected, (state, action) => {
                console.log("error");
            });
    },
});

export const { loginCheck, loginUserName } = userAuthSlice.actions;
export default userAuthSlice.reducer;
