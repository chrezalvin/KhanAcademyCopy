import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Appearance, Platform } from "react-native";

interface IsDarkState {
    isDark: boolean;
}

const initialState: IsDarkState = {
    isDark: Appearance.getColorScheme() === "dark",
};

export const isDarkSlice = createSlice({
    name: "isDark",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isDark = !state.isDark;
            
            // sets color scheme for ios and android
            if(Platform.OS === "ios" ||  Platform.OS === "android")
                Appearance.setColorScheme(state.isDark ? "dark" : "light");
        },
    },
});

export const { toggle } = isDarkSlice.actions;

export const selectIsDark = (state: RootState) => state.isDark.isDark;

export default isDarkSlice.reducer;