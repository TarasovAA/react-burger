import { OrdersFeedLine } from "../../../components/orders-feed-line/orders-feed-line";
import { useState, useEffect } from "react";
import { TFeed } from "../../../utils/types";
import { useDispatch } from "../../../services/hooks";

import { getWsMessages } from "../../../services/web-socket/selector";
import { 
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSING
 } from "../../../services/web-socket/wsActionType";

const OrderHistoryPage = () => {
    const dispatch = useDispatch();
    const [orders, setOrders] = useState<Array<TFeed> | null>(null);
    const wsMesages = getWsMessages();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
       

        dispatch({
            type: WS_CONNECTION_START,
            wsUrl: `wss://norma.nomoreparties.space/orders?token=${accessToken}`
        });

        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSING
            });
        }
    }, []);

    useEffect(() => {
        if(wsMesages){
            setOrders(wsMesages.orders);
        }
    }, [wsMesages])

    return (<>
        <OrdersFeedLine orders={orders} link="/profile/orders"/>
        {orders && <p className='text text_type_main text_color_inactive mt-5' style={{textAlign: 'center'}}>В этом разделе вы можете вы можете посмотреть свою историю заказов</p>}
    </>);
}

export default OrderHistoryPage;