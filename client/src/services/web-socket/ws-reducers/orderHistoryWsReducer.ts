import { createReducer } from "@reduxjs/toolkit";
import { TFeed } from "../../../utils/types";
import { WebSocketStatus, WsStore } from "../types";
import { ordersHistoryWsClose, ordersHistoryWsConnecting, ordersHistoryWsError, ordersHistoryWsMessage, ordersHistoryWsOpen } from "../ws-actions/orders-history";
import { getCurrentTimestamp } from "../../../utils/datetime";

const newInitialState: WsStore<TFeed> ={
    status: WebSocketStatus.OFFLINE,
    error: '',
    messages: []
}

export const orderHistoryWsReducer = createReducer(newInitialState, (builder) => {
    builder
        .addCase(ordersHistoryWsConnecting, (state) => {
            state.status = WebSocketStatus.CONNECTING;
        })
        .addCase(ordersHistoryWsOpen, (state, action) => {
            state.status = WebSocketStatus.ONLINE;
        })
        .addCase(ordersHistoryWsError, (state, action) => {
            state.error = action.payload;
        })
        .addCase(ordersHistoryWsClose, (state, action) => {
            state.status = WebSocketStatus.OFFLINE;
        })
        .addCase(ordersHistoryWsMessage, (state, action) => {
            state.messages.push({...action.payload, timestamp: getCurrentTimestamp()});
        })
})