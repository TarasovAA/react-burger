import { useSelector } from "react-redux";

export const GetOrderRequestData = () => useSelector((store: any) => store.order);