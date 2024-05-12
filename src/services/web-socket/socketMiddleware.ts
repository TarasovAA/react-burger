import type { Middleware, MiddlewareAPI } from "redux";
import type { TApplicationActions, RootState, AppDispatch } from "../types";
import { getCurrentTimestamp } from "../../utils/datetime";

import { IFeedMessageResponse } from "./wsTypes";

import { 
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
    WS_CONNECTION_CLOSING
 } from "./wsActionType";

 import { IWsConnectionStartAction, IWsSendMessageAction } from "./wsActionType";

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TApplicationActions) =>{
            const { dispatch, getState } = store;
            const { type } = action;

            if(type === WS_CONNECTION_START) {
                const { wsUrl } = (action as IWsConnectionStartAction);
                console.log(`Попытка соединения с сокетом  ${wsUrl}`);
                socket = new WebSocket(wsUrl);
            }

            if(socket) {
                socket.onopen = (event: Event) => {
                    console.log(`Соединение по сокету ${getState().ws.wsUrl} установлено`);
                    dispatch({
                        type: WS_CONNECTION_SUCCESS
                    })
                }
            
                socket.onclose =  (event: Event) => {
                    console.log(`Соединение по сокету ${getState().ws.wsUrl} закрыто`);
                    dispatch({
                        type: WS_CONNECTION_CLOSED
                    })
                }
            
                socket.onerror = (event: Event) => {
                    console.log(`Ошибка ${event}`);

                    //TODO: сделать обноыление токена при выводе ошибки

                    dispatch({
                        type: WS_CONNECTION_ERROR,
                        payload: event
                    })
                }
            
                socket.onmessage = async (event: MessageEvent) => {
                    const {data} = event;
                    const parsedData: IFeedMessageResponse = JSON.parse(data);
                    
                    console.log(`Получены новые данные: ${data}`);

                    dispatch({
                        type: WS_GET_MESSAGE,
                        payload: {...parsedData, timestamp: getCurrentTimestamp()}
                    })
                }

                if (type === WS_CONNECTION_CLOSING) {
                    console.log(`Попытка закрыть соединение`);
                    socket.close()
                }

                if (type === WS_SEND_MESSAGE) {
                    const {pingPongMessage, token} = (action as IWsSendMessageAction);
                    const message = { message: pingPongMessage, token };

                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };


    }) as Middleware;
}