import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
    isLoading: boolean;
    isError: string;
}
const initialState: InitialState = {
    isLoading: false,
    isError: "",
};

export const asyncRegister = createAsyncThunk(
    "registerSlice/asyncRegister",
    async (arg: {
        name: string;
        phone: string;
        userId: string;
        userPw: string;
    }) => {
        try {
            const result = await axios.post(
                "http://localhost:5050/users",
                {
                    name: arg.name,
                    phone: arg.phone,
                    userId: arg.userId,
                    userPw: arg.userPw,
                },
                {
                    withCredentials: true,
                },
            );
            alert("회원가입 성공");
            return result.data;
        } catch (error) {
            console.error(error);
        }
    },
);

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(asyncRegister.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(asyncRegister.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(asyncRegister.rejected, (state, action) => {
                console.error(Error);
                state.isError = "에러발생";
            });
    },
});

export default registerSlice.reducer;
