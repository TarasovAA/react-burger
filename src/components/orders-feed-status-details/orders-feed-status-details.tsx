import style from './orders-feed-status-details.module.css'

export const OrdersFeedStatusLine = () => {
    return (<div style={{height: '100%'}}>
        <div style={{width: '100%', height: '30%', display: 'flex'}}>
           <div className='p-5' style={{width: '50%'}}>
                <p className="text text_type_main-medium">Готовы</p>
                <div className={`${style.ordersStatusView} mt-5`}>

                </div>
           </div>
           <div className='p-5' style={{width: '50%'}}>
                <p className="text text_type_main-medium">В работе</p>
                <div className={`${style.ordersStatusView} mt-5`}>

                </div>
           </div>
        </div>
        <div style={{width: '100%', height: '20%'}}>
            <p className="text text_type_main-medium">Выполнено за всё время</p>
        </div>
        <div style={{width: '100%', height: '50%' , display: 'flex'}}>
            <p className="text text_type_main-medium">Выполнены за сегодня</p>
        </div>
    </div>);
}