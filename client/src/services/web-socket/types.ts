export enum WebSocketStatus{
    OFFLINE,
    CONNECTING,
    ONLINE
}

export interface WsStore<T>{
    status: WebSocketStatus;
    error: string;
    messages: Array<IMessage<T>>;
}

export interface IMessageResponse<T> {
    success: boolean;
    orders: Array<T>;
    total: number;
    totalToday: number;
  }

  export interface IMessage<T> extends IMessageResponse<T>{
    timestamp: number;
  }