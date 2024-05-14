import { WsConnectionAction } from "./wsActionType";
import { IFeedMessage } from "./wsTypes";

import { 
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_CLOSING,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
 } from "./wsActionType";

type TWSState = {
    wsUrl: string | null;
    wsConnected: boolean;
    messages: IFeedMessage | null;
  
    error?: Event;
  }

const initialState: TWSState = {
    wsUrl: null,
    wsConnected: false,
    messages: null
}

export const wsReducer = (state = initialState, action: WsConnectionAction) => {
    switch (action.type){
        case WS_CONNECTION_START:
            return {
                ...state,
                wsUrl: action.wsUrl
            };
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false,
                wsUrl: null
            }
        case WS_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                messages: action.payload
            }
        default:
            return state;
    }
}