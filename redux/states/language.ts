import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import languageList from "../../assets/language.json";
import { setItem } from "../../libs/AsyncStorage";

interface LanguageState {
    id: number;
    name: string;
    code: string;
}

const initialState: LanguageState = languageList[0];

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguageById: (state, action: PayloadAction<number>) => {
            const found = languageList.find((language) => language.id === action.payload);

            if(found){
                state.id = found.id;
                state.name = found.name;
                state.code = found.code;
            }

            setItem("languageId", state.id);
        }
    }
});

export const { setLanguageById: setLanguage } = languageSlice.actions;

export default languageSlice.reducer;