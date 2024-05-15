import { RootState } from "../types";

export const getFeedData = (store: RootState) => store.feed.data;