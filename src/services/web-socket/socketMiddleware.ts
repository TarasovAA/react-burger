import type { Middleware } from "redux";

import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { RootState } from "../types";

export type TwsActionsTypes = {
    connect: ActionCreatorWithPayload<string>,
    disconnect: ActionCreatorWithoutPayload,
    connecting: ActionCreatorWithoutPayload,
    sendMessage?: ActionCreatorWithPayload<any>,
    onOpen: ActionCreatorWithoutPayload,
    onClose: ActionCreatorWithPayload<string>,
    onError: ActionCreatorWithPayload<string>,
    onMessage: ActionCreatorWithPayload<any>
}

export const socketMiddleware = (wsActions: TwsActionsTypes) : Middleware<{}, RootState> => {
    return (store) => {
        let socket: WebSocket | null = null;
        let url: string | null = null;
        let closing: boolean = false;

        const {
            connect,
            disconnect,
            sendMessage,
            onOpen,
            onClose,
            onError,
            onMessage,
          } = wsActions;

        return next => (action) => {
            const { dispatch } = store;

            if (connect.match(action)) {
                const { payload } = action;
                socket = new WebSocket(payload);
                url = payload;

                console.log(`Попытка соединения с сокетом  ${url}`);

                socket.onopen = (event) => {
                    console.log(`Соединение по сокету ${url} установлено`);
                    dispatch(onOpen());
                };

                socket.onerror = (event) => {
                    console.log(`Ошибка ${event}`);
                    dispatch(onError(String(event)));
                  };

                  socket.onmessage = (event) => {
                    console.log(event);
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    
                    console.log(`Получены новые данные: ${data}`);

                    dispatch(onMessage(parsedData));
                  };

                  socket.onclose = (event) => {
                    if (closing) {
                      
                      console.log(`Соединение по сокету ${url} закрыто`);
                      dispatch(onClose(event.code.toString()));
                    } else {
                        if(url)
                            dispatch(connect(url));
                    }
                  };
            }

            if (disconnect?.match(action) && socket) {
                closing = true;
                socket.close(1000);
              }

            if (sendMessage?.match(action) && socket) {
                const { payload } = action;
                
                socket.send(JSON.stringify(payload));
                dispatch(onClose("1000"));
              }

            next(action);
        }
    }
}