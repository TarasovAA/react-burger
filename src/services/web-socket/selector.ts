import { RootState } from "../types";

export const getFeedWsStore = (store: RootState) => store.feedWs;

export const getOrderHistoryWsStore = (store: RootState) => store.orderHistoryWs;