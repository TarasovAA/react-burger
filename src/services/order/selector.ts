import { useSelector } from "react-redux";
import { RootState } from "../types";

export const GetOrderRequestData = () => useSelector((store: RootState) => store.order);