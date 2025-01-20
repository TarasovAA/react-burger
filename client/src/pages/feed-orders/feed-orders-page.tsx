import { OrdersFeedLine } from "../../components/orders-feed-line/orders-feed-line";
import { OrdersFeedStatusLine, OrdersFeedStatusLineProps } from "../../components/orders-feed-status-details/orders-feed-status-details";
import { useState, useEffect } from "react";
import { TFeed } from "../../utils/types";
import { useDispatch } from "../../services/hooks";
import { getFeedWsStore } from "../../services/web-socket/selector";
import { useSelector } from "../../services/hooks";

import { 
    feedWsConnect,
    feedWsDisconnect
 } from "../../services/web-socket/ws-actions/feed";

import { WebSocketStatus } from "../../services/web-socket/types";
import { wsFeedUrl } from "../../constants/common";

const FeedOrdersPage = () => {
    const [orders, setOrders] = useState<Array<TFeed> | null>(null);
    const [feedLineInfo, setfeedLineInfo] = useState<OrdersFeedStatusLineProps>({});

    const dispatch = useDispatch();
    const wsStore = useSelector(getFeedWsStore);
    
    useEffect(() => {
        dispatch(feedWsConnect(wsFeedUrl));

        return () => {
            dispatch(feedWsDisconnect());
        }
    }, [])

    useEffect(() => {
        if(wsStore.status === WebSocketStatus.ONLINE && wsStore.messages.length > 0){

            var currentWsMessage = wsStore.messages[wsStore.messages.length - 1];
            setOrders(currentWsMessage.orders);

            setfeedLineInfo({
                done: currentWsMessage.orders.filter(value => value.status === 'done').splice(0, 10).map(value => value.number),
                inProgress: currentWsMessage.orders.filter(value => value.status !== 'done').splice(0, 10).map(value => value.number),
                total: currentWsMessage.total,
                totalToday: currentWsMessage.totalToday
            })
        }
       
    }, [wsStore])

    console.log('wsStore', wsStore);
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