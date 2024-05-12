import { TFeed } from "../../utils/types";

export interface IFeedMessageResponse {
    success: boolean;
    orders: TFeed[];
    total: number;
    totalToday: number;
  }

  export interface IFeedMessage extends IFeedMessageResponse{
    timestamp: number;
  }