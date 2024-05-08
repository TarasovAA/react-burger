import { OrderFeedCard } from "./orders-feed-card";
import { TFeed } from "../../utils/types";
import style from './orders-feed-line.module.css';

interface OrdersFeedLineProps
{
    orders: Array<TFeed>
}


export const OrdersFeedLine = ({orders} : OrdersFeedLineProps) => {

    return (<div className={style.containter}>
         <h1 className="text text_type_main-medium m-5">Лента заказов</h1>

         <div className="p-10" style={{maxWidth: '640px', maxHeight: '912px', overflowY: 'auto'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
                {orders && (<>
                    {orders.map((item) => (
                        <OrderFeedCard key={item._id} {...item } />
                    ))}
                </>)}
            </div>
         </div>
    </div>);
}