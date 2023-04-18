import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    value: string;
    isActive: number;
}

const initialState: InitialState = {
    value: "",
    isActive: 1,
};

export const inspirationSlice = createSlice({
    name: "inspiration",
    initialState,
    reducers: {
        onFilterTab: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        onActiveTab: (state, action: PayloadAction<number>) => {
            state.isActive = action.payload;
        },
        onInitFilterTab: (state, actions: PayloadAction<string>) => {
            state.value = "";
        },
    },
});

export const { onFilterTab, onActiveTab, onInitFilterTab } =
    inspirationSlice.actions;
export default inspirationSlice.reducer;
