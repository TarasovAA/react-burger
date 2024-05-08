import { useSelector } from "react-redux";

export const GetFeedData = ()  => useSelector((store: any) => store.feed.data);