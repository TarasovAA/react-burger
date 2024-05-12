import { IFeedMessage } from "./wsTypes";

export const WS_CONNECTION_START: 'FEED/WS_CONNECTION_START' = 'FEED/WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'FEED/WS_CONNECTION_SUCCESS' = 'FEED/WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'FEED/WS_CONNECTION_ERROR' = 'FEED/WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSING: 'FEED/WS_CONNECTION_CLOSING' = 'FEED/WS_CONNECTION_CLOSING';
export const WS_CONNECTION_CLOSED: 'FEED/WS_CONNECTION_CLOSED' = 'FEED/WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'FEED/WS_GET_MESSAGE' = 'FEED/WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'FEED/WS_SEND_MESSAGE' = 'FEED/WS_SEND_MESSAGE';

export interface IWsConnectionStartAction{
    readonly type: typeof WS_CONNECTION_START;
    readonly wsUrl: string;
}

export interface IWsConnectionSuccessAction{
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction{
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWsConnectionClosingAction{
    readonly type: typeof WS_CONNECTION_CLOSING;
}

export interface IWsConnectionClosedAction{
    readonly type: typeof WS_CONNECTION_CLOSED;
}


export interface IWsGetMessageAction{
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: IFeedMessage
}

export interface IWsSendMessageAction{
    readonly type: typeof WS_SEND_MESSAGE;
    readonly pingPongMessage?: string;
    readonly token?: string;
}

export type WsConnectionAction = IWsConnectionStartAction 
                                | IWsConnectionSuccessAction 
                                | IWsGetMessageAction
                                | IWsSendMessageAction 
                                | IWsConnectionErrorAction 
                                | IWsConnectionClosedAction
                                | IWsConnectionClosingAction;