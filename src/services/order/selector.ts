import { useSelector } from "react-redux";
import { RootState } from "../types";

/* eslint-disable */ 
export const getOrderRequestData = () => useSelector((store: RootState) => store.order);