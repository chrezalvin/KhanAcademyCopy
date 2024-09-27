import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import regionList from "../../assets/region.json";
import { setItem } from "../../libs/AsyncStorage";

interface RegionState {
    id: number;
    name: string;
    region: string;
    code: string;
}

const initialState: RegionState = regionList[0];

export const regionSlice = createSlice({
    name: "region",
    initialState,
    reducers: {
        setRegionById: (state, action: PayloadAction<number>) => {
            const found = regionList.find((region) => region.id === action.payload);

            if(found){
                state.id = found.id;
                state.name = found.name;
                state.region = found.region;
                state.code = found.code;
            }

            setItem("regionId", state.id);
        }
    }
});

export const { setRegionById: setRegion } = regionSlice.actions;

export default regionSlice.reducer;