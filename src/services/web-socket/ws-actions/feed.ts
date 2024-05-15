import { createAction } from "@reduxjs/toolkit";

export const feedWsConnect = createAction<string, 'FEED/WS_CONNECT'>('FEED/WS_CONNECT');

export const feedWsDisconnect = createAction('FEED/WS_DISCONNECT');

export const feedWsConnecting = createAction('FEED/WS_CONNECTING');

export const feedWsOpen = createAction('FEED/WS_OPEN');

export const feedWsClose = createAction<string>('FEED/WS_CLOSE');

export const feedWsMessage = createAction<any>('FEED/WS_MESSAGE');

export const feedWsError = createAction<string, 'FEED/WS_ERROR'>('FEED/WS_ERROR');

export type TWsFeedAction = ReturnType<typeof feedWsConnect>
    | ReturnType<typeof feedWsDisconnect>
    | ReturnType<typeof feedWsConnecting>
    | ReturnType<typeof feedWsOpen>
    | ReturnType<typeof feedWsClose>
    | ReturnType<typeof feedWsMessage>
    | ReturnType<typeof feedWsError>;