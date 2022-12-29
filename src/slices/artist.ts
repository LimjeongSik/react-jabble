import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    value: string;
}

const initialState: InitialState = {
    value: "",
};

export const artistSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        onFilterTab: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { onFilterTab } = artistSlice.actions;
export default artistSlice.reducer;
