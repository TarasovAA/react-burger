import { feedWsClose, feedWsConnecting, feedWsError, feedWsMessage, feedWsOpen } from "../ws-actions/feed";


import { createReducer } from "@reduxjs/toolkit";
import { WebSocketStatus, WsStore } from "../types";
import { TFeed } from "../../../utils/types";
import { getCurrentTimestamp } from "../../../utils/datetime";


const newInitialState: WsStore<TFeed> ={
    status: WebSocketStatus.OFFLINE,
    error: '',
    messages: []
}

export const feedWsReducer = createReducer(newInitialState, (builder) => {
    builder
        .addCase(feedWsConnecting, (state) => {
            state.status = WebSocketStatus.CONNECTING;
        })
        .addCase(feedWsOpen, (state, action) => {
            state.status = WebSocketStatus.ONLINE;
        })
        .addCase(feedWsError, (state, action) => {
            state.error = action.payload;
        })
        .addCase(feedWsClose, (state) => {
            state.status = WebSocketStatus.OFFLINE;
        })
        .addCase(feedWsMessage, (state, action) => {
            state.messages.push({...action.payload, timestamp: getCurrentTimestamp()});
        })
})