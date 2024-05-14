import { useSelector } from "../hooks";
import { RootState } from "../types";

/* eslint-disable */ 
export const getFeedData = ()  => useSelector((store: RootState) => store.feed.data);