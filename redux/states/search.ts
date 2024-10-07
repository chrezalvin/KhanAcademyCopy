import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Appearance, Platform } from "react-native";
import { setItem } from "../../libs/AsyncStorage";

interface SearchState {
    search: string | null;
}

const initialState: SearchState = {
    search: null,
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            if(action.payload === "")
                state.search = null;
            else
                state.search = action.payload;
        },
        reset: (state) => {
            state.search = null;
        }
    },
});

export const { setSearch, reset } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.search;

export default searchSlice.reducer;