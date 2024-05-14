import { useSelector } from "../hooks";
import { RootState } from "../types";

/* eslint-disable */ 
export const getWsMessages = () => useSelector((store: RootState) => store.ws.messages);