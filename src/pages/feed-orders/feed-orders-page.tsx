import { OrdersFeedLine } from "../../components/orders-feed-line/orders-feed-line";
import { OrdersFeedStatusLine, OrdersFeedStatusLineProps } from "../../components/orders-feed-status-details/orders-feed-status-details";
import { useState, useEffect } from "react";
import { TFeed } from "../../utils/types";

const FeedOrdersPage = () => {
    const [orders, setOrders] = useState<Array<TFeed> | null>(null);
    const [feedLineInfo, setfeedLineInfo] = useState<OrdersFeedStatusLineProps>({});
    
    useEffect(() => {
        const ws = new WebSocket(`ws://norma.nomoreparties.space/orders/all`);

        ws.onopen = (event: Event) => {
            console.log("Соединение установлено");

            ws.send('');
        }

        ws.onclose =  (event: Event) => {
            console.log("Соединение закрыто");
        }

        ws.onmessage = async (event: MessageEvent) => {
            console.log(`Получены данные: ${event.data}`)
            var data = await JSON.parse(event.data);

            console.log(data.orders)

            setOrders(data.orders);
            setfeedLineInfo({
                done: data.orders.filter((value: any) => value.status === 'done').splice(0, 10).map((value: any) => value.number),
                inProgress: data.orders.filter((value: any) => value.status !== 'done').splice(0, 10).map((value: any) => value.number),
                total: data.total,
                totalToday: data.totalToday
            });
        }

        ws.onerror = (event: Event) => {
            console.log(`Ошибка ${event}`)
        }

        return () => {
            ws.close()
        }
    }, [])

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