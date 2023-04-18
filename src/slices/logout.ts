import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type InitialState as loginInitialState } from "./login";
import axios from "axios";

interface InitialState extends loginInitialState {}

const initialState: InitialState = {
    isLoading: false,
    status: "",
};

export const asyncLogout = createAsyncThunk(
    "logoutSlice/asyncLogout",
    async () => {
        try {
            const result = await axios.get(
                "http://localhost:5050/users/logout",
                {
                    withCredentials: true,
                },
            );

            return result.data;
        } catch (error) {
            console.error(error);
        }
    },
);

const logoutSlice = createSlice({
    name: "logout",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(asyncLogout.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(asyncLogout.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(asyncLogout.rejected, (state, action) => {
                console.log(`${state.status} = error!!!`);
            });
    },
});

export default logoutSlice.reducer;
