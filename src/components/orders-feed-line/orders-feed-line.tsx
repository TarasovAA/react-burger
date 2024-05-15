import { OrderFeedCard } from "./orders-feed-card";
import { TFeed } from "../../utils/types";
import style from './orders-feed-line.module.css';
import { Loader } from "../../local-uikit/components";

interface OrdersFeedLineProps
{
    orders: Array<TFeed> | null;
    link?: string;
}


export const OrdersFeedLine = ({orders, link} : OrdersFeedLineProps) => {

    return (<div className={`${style.containter} p-10`}>
        { orders ? (
            <div className="p-10" style={{maxWidth: '1000px', maxHeight: '912px', overflowY: 'auto'}}>
             <div style={{display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
                 {orders && (<>
                     {orders.map(item => (
                         <OrderFeedCard key={item._id} feedInfo={item} link={link} />
                     ))}
                 </>)}
             </div>
          </div>
        ) : (
            <Loader />
        )}
    </div>);
}