import { publicDecrypt } from 'crypto';
import style from './orders-feed-status-details.module.css'
import { Loader } from '../../local-uikit/components';

export interface OrdersFeedStatusLineProps{
    done?: Array<string>;
    inProgress?: Array<string>;
    total?: number;
    totalToday?: number;
}

export const OrdersFeedStatusLine = ({done, inProgress, total, totalToday} : OrdersFeedStatusLineProps) => {
    return (<div className='p-10' style={{height: '100%'}}>
        <div style={{width: '100%', height: '30%', display: 'flex'}}>
           <div className='p-5' style={{width: '50%'}}>
                <p className="text text_type_main-medium">Готовы</p>
                <div className={`${style.ordersStatusView} mt-5`}>
                    {done ? done.map(orderNumber => (
                        <p key={orderNumber} className='text text_type_main-default' style={{color: '#00cccc'}}>
                            {orderNumber}
                        </p>
                    )) : (<div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Loader />
                         </div>) }
                </div>
           </div>
           <div className='p-5' style={{width: '50%'}}>
                <p className="text text_type_main-medium">В работе</p>
                <div className={`${style.ordersStatusView} mt-5`}>
                    {inProgress ? inProgress.map(orderNumber => (
                        <p key={orderNumber} className='text text_type_main-default'>
                            {orderNumber}
                        </p>
                    )) : (<div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Loader />
                         </div>) }
                </div>
           </div>
        </div>
        <div>
            <p className="text text_type_main-medium">Выполнено за всё время</p>
            {total ? (
                <p className="text text_type_digits-large">{total}</p>
            ) : (<div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Loader />
                </div>)}
        </div>
        <div>
            <p className="text text_type_main-medium">Выполнены за сегодня</p>
            {totalToday ? (
                <p className="text text_type_digits-large">{totalToday}</p>
            ) : (<div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Loader />
                </div>)}
        </div>
    </div>);
}