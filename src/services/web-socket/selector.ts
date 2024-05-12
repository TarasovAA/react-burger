import { useSelector } from "../hooks";
import { RootState } from "../types";

export const GetWsMessages = () => useSelector((store: RootState) => store.ws.messages);