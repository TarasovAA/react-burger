import { WsConnectionAction } from "./wsActionType";
import { IFeedMessage } from "./wsTypes";

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
        case "FEED/WS_CONNECTION_START":
            return {
                ...state,
                wsUrl: action.wsUrl
            };
        case "FEED/WS_CONNECTION_SUCCESS":
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case "FEED/WS_CONNECTION_ERROR":
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case "FEED/WS_CONNECTION_CLOSED":
            return {
                ...state,
                error: undefined,
                wsConnected: false,
                wsUrl: null
            }
        case "FEED/WS_GET_MESSAGE":
            return {
                ...state,
                error: undefined,
                messages: action.payload
            }
        default:
            return state;
    }
}