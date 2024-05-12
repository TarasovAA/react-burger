import { useSelector } from "../hooks";
import { RootState } from "../types";

export const GetFeedData = ()  => useSelector((store: RootState) => store.feed.data);