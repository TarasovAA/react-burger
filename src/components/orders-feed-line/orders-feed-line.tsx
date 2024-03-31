import { OrderFeedCard } from "./orders-feed-card";

export const OrdersFeedLine = () => {

    const orders = [{}, {}];

    return (<div>
         <h1 className="text text_type_main-medium m-5">Лента заказов</h1>
         <div className="p-10" style={{maxWidth: '640px', maxHeight: '912px', overflowY: 'auto'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
                {orders && (<>
                    {orders.map((item, index) => (
                        <OrderFeedCard />
                    ))}
                </>)}
            </div>
         </div>
    </div>);
}