import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();
export interface InitialState {
    isLoading: boolean;
    status?: string;
    sessionId?: string;
}

const initialState: InitialState = {
    isLoading: false,
    status: "",
};

export const asyncLogin = createAsyncThunk(
    "loginSlice/asyncLogin",
    async (
        arg: { id: string; pw: string; sessionId?: "" },
        { rejectWithValue },
    ) => {
        try {
            const result = await axios.post(
                "http://localhost:5050/users/login",
                {
                    userId: arg.id,
                    userPw: arg.pw,
                    sessionId: arg.sessionId,
                },
                {
                    headers: { "Content-Type": `application/json` },
                    withCredentials: true,
                },
            );
            return result.data;
        } catch (error: any) {
            if (!error) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    },
);

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        addCookie: (state, action: PayloadAction) => {
            state.sessionId = cookie.get("user");
        },
    },
    extraReducers(builder) {
        builder
            .addCase(asyncLogin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(
                asyncLogin.fulfilled,
                (
                    state,
                    action: PayloadAction<{
                        sessionId: string;
                    }>,
                ) => {
                    state.status = "";
                    state.isLoading = false;
                    state.sessionId = action.payload.sessionId;
                    cookie.set("user", action.payload.sessionId, { path: "/" });
                },
            )
            .addCase(
                asyncLogin.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    state.status = action.payload.error;
                },
            );
    },
});

export const { addCookie } = loginSlice.actions;
export default loginSlice.reducer;
