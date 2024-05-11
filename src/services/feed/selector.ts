import { useSelector } from "../hooks";

export const GetFeedData = ()  => useSelector((store: any) => store.feed.data);