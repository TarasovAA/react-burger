import { OrdersFeedLine } from "../../../components/orders-feed-line/orders-feed-line";
import { useState, useEffect } from "react";
import { TFeed } from "../../../utils/types";

const OrderHistoryPage = () => {
    const [orders, setOrders] = useState<Array<TFeed> | null>(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const ws = new WebSocket(`wss://norma.nomoreparties.space/orders?token=${accessToken}`);

        ws.onopen = (event: Event) => {
            console.log("Соединение установлено");

            ws.send('');
        }

        ws.onmessage = async (event: MessageEvent) => {
            console.log(`Получены данные: ${event.data}`)
            var data = await JSON.parse(event.data);
            console.log(data.orders)

            setOrders(data.orders);
        }

        ws.onclose =  (event: Event) => {
            console.log("Соединение закрыто");
        }

        ws.onerror = (event: Event) => {
            console.log(`Ошибка ${event}`)
        }

        return () => {
            ws.close();
        }

    }, []);

    return (<>
        <OrdersFeedLine orders={orders} link="/profile/orders"/>
        {orders && <p className='text text_type_main text_color_inactive mt-5' style={{textAlign: 'center'}}>В этом разделе вы можете вы можете посмотреть свою историю заказов</p>}
    </>);
}

export default OrderHistoryPage;