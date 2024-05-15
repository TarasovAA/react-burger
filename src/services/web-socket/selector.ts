import { useSelector } from "../hooks";
import { RootState } from "../types";

/* eslint-disable */ 
export const getFeedWsStore = () => useSelector((store: RootState) => store.feedWs);

export const getOrderHistoryWsStore = () => useSelector((store: RootState) => store.orderHistoryWs);