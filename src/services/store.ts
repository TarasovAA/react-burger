import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './reducer';
import { TwsActionsTypes, socketMiddleware } from './web-socket/socketMiddleware';

import {
  feedWsConnect,
  feedWsDisconnect,
  feedWsConnecting,
  feedWsOpen,
  feedWsClose,
  feedWsError,
  feedWsMessage
 } from './web-socket/ws-actions/feed';

 import {
  ordersHistoryWsConnect,
  ordersHistoryWsDisconnect,
  ordersHistoryWsConnecting,
  ordersHistoryWsOpen,
  ordersHistoryWsClose,
  ordersHistoryWsError,
  ordersHistoryWsMessage
 } from './web-socket/ws-actions/orders-history';

const feedWsAction: TwsActionsTypes = {
  connect: feedWsConnect,
  disconnect: feedWsDisconnect,
  connecting: feedWsConnecting,
  onOpen: feedWsOpen,
  onClose: feedWsClose,
  onError: feedWsError,
  onMessage: feedWsMessage,
}

const orderHistoryWsAction: TwsActionsTypes = {
  connect: ordersHistoryWsConnect,
  disconnect: ordersHistoryWsDisconnect,
  connecting: ordersHistoryWsConnecting,
  onOpen: ordersHistoryWsOpen,
  onClose: ordersHistoryWsClose,
  onError: ordersHistoryWsError,
  onMessage: ordersHistoryWsMessage,
}

const feedSocketMiddleware = socketMiddleware(feedWsAction);
const orderHistoryMiddleware = socketMiddleware(orderHistoryWsAction);

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedSocketMiddleware, orderHistoryMiddleware)
  });
