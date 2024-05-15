import { OrdersFeedLine } from "../../../components/orders-feed-line/orders-feed-line";
import { useState, useEffect } from "react";
import { TFeed } from "../../../utils/types";
import { useDispatch } from "../../../services/hooks";

import { getOrderHistoryWsStore } from "../../../services/web-socket/selector";

import { 
    ordersHistoryWsConnect,
    ordersHistoryWsDisconnect
 } from "../../../services/web-socket/ws-actions/orders-history";
import { WebSocketStatus } from "../../../services/web-socket/types";

const OrderHistoryPage = () => {
    const dispatch = useDispatch();
    const [orders, setOrders] = useState<Array<TFeed> | null>(null);
    const wsStore = getOrderHistoryWsStore();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
       

        dispatch(ordersHistoryWsConnect(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));

        return () => {
            dispatch(ordersHistoryWsDisconnect());
        }
    }, []);

    useEffect(() => {
        if(wsStore.status === WebSocketStatus.ONLINE && wsStore.messages.length > 0){
            var currentWsMessage = wsStore.messages[wsStore.messages.length - 1];

            setOrders(currentWsMessage.orders);
        }
    }, [wsStore])

    return (<>
        <OrdersFeedLine orders={orders} link="/profile/orders"/>
        {orders && <p className='text text_type_main text_color_inactive mt-5' style={{textAlign: 'center'}}>В этом разделе вы можете вы можете посмотреть свою историю заказов</p>}
    </>);
}

export default OrderHistoryPage;