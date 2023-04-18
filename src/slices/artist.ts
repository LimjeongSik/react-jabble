import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    value: string;
    isActive: number;
}

const initialState: InitialState = {
    value: "",
    isActive: 1,
};

export const artistSlice = createSlice({
    name: "artists",
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
    artistSlice.actions;
export default artistSlice.reducer;
