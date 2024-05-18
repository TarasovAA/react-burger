import { createSlice } from "@reduxjs/toolkit";
import { TFeed } from "../../utils/types";
import { PayloadAction } from "@reduxjs/toolkit";

interface IFeedData{
    data: Array<TFeed>;
    isConnecting: boolean;
    isConnected: boolean;

    errorMessage: string | null;
}

export const initialState : IFeedData = {
    data: [],
    isConnecting: false,
    isConnected: false,
    errorMessage: null,
}

const feedSlice = createSlice({
    name:"feed/",
    initialState,
    reducers: {
        pending(state: IFeedData){
            state.isConnecting = true;
            state.errorMessage = null;
            state.isConnected = false;
        },
        updateFeedData(state: IFeedData, action: PayloadAction<Array<TFeed>>) {
            state.data = action.payload;

            state.isConnecting = false;
            state.isConnected = true;
        }
    },
});

export const feedReducer = feedSlice.reducer;

export const {pending, updateFeedData} = feedSlice.actions;

type TFeedActionCreator = typeof feedSlice.actions;

export type TFeedAction  = ReturnType<TFeedActionCreator[keyof TFeedActionCreator]>;