import { createAction } from "@reduxjs/toolkit";

export const ordersHistoryWsConnect = createAction<string, `ORDERS_HISTORY/WS_CONNECT`>('ORDERS_HISTORY/WS_CONNECT');

export const ordersHistoryWsDisconnect = createAction('ORDERS_HISTORY/WS_DISCONNECT');

export const ordersHistoryWsConnecting = createAction('ORDERS_HISTORY/WS_CONNECTING');

export const ordersHistoryWsOpen = createAction('ORDERS_HISTORY/WS_OPEN');

export const ordersHistoryWsError = createAction<string, 'ORDERS_HISTORY/WS_ERROR'>('ORDERS_HISTORY/WS_ERROR');

export const ordersHistoryWsClose = createAction<string>('ORDERS_HISTORY/WS_CLOSE');

export const ordersHistoryWsMessage = createAction<any>('ORDERS_HISTORY/WS_MESSAGE');

export type TWsOrdersHistoryAction = ReturnType<typeof ordersHistoryWsConnect>
    | ReturnType<typeof ordersHistoryWsDisconnect>
    | ReturnType<typeof ordersHistoryWsConnecting>
    | ReturnType<typeof ordersHistoryWsOpen>
    | ReturnType<typeof ordersHistoryWsClose>
    | ReturnType<typeof ordersHistoryWsMessage>
    | ReturnType<typeof ordersHistoryWsError>