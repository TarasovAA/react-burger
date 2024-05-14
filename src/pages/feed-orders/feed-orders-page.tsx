import { OrdersFeedLine } from "../../components/orders-feed-line/orders-feed-line";
import { OrdersFeedStatusLine, OrdersFeedStatusLineProps } from "../../components/orders-feed-status-details/orders-feed-status-details";
import { useState, useEffect } from "react";
import { TFeed } from "../../utils/types";
import { useDispatch } from "../../services/hooks";
import { GetWsMessages } from "../../services/web-socket/selector";

import { 
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSING
 } from "../../services/web-socket/wsActionType";

const FeedOrdersPage = () => {
    const [orders, setOrders] = useState<Array<TFeed> | null>(null);
    const [feedLineInfo, setfeedLineInfo] = useState<OrdersFeedStatusLineProps>({});

    const dispatch = useDispatch();
    const wsMesages = GetWsMessages();
    
    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            wsUrl: `ws://norma.nomoreparties.space/orders/all`
        });

        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSING
            });
        }
    }, [])

    useEffect(() => {
        if(wsMesages){
            setOrders(wsMesages.orders);

            setfeedLineInfo({
                done: wsMesages.orders.filter(value => value.status === 'done').splice(0, 10).map(value => value.number),
                inProgress: wsMesages.orders.filter(value => value.status !== 'done').splice(0, 10).map(value => value.number),
                total: wsMesages.total,
                totalToday: wsMesages.totalToday
            })
        }
       
    }, [wsMesages])

    return <div style={{width: '100%', height: '100%', display: 'flex'}}>
        <div style={{width: '50%'}}>
            <h1 className="text text_type_main-medium m-5">Лента заказов</h1>
            <OrdersFeedLine orders={orders} />
        </div>
        <div style={{width: '50%'}}>
            <OrdersFeedStatusLine {...feedLineInfo} />
        </div>
    </div>
}

export default FeedOrdersPage;