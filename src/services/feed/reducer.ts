import { createSlice } from "@reduxjs/toolkit";
import { TFeed } from "../../utils/types";

interface IFeedData{
    data: Array<TFeed>;
    isConnecting: boolean;
    isConnected: boolean;

    errorMessage: string | null;
}

const initialState : IFeedData = {
    data: [],
    isConnecting: false,
    isConnected: false,
    errorMessage: null,
}

const feedSlice = createSlice({
    name:"feed/",
    initialState,
    reducers: {
        pending(state){
            state.isConnecting = true;
            state.errorMessage = null;
            state.isConnected = false;
        },
        updateFeedData(state, action) {
            state.data = action.payload;

            state.isConnecting = false;
            state.isConnected = true;
        }
    },
});

export const feedReducer = feedSlice.reducer;

export const {pending, updateFeedData} = feedSlice.actions;