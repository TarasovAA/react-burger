import style from './orders-feed-line.module.css';

export const OrderFeedCard = () => {
    return (<div className={`${style.card} p-5`}>
        <div style={{width: '100%', height: '30%', display: 'flex'}}>
            <div style={{width: '20%'}}> номер</div>
            <div style={{width: '60%'}}></div>
            <div style={{width: '20%'}}> дата</div>
        </div>
        <div style={{width: '100%', height: '30%'}}>
            <p className="text text_type_main-medium">Имя бургера</p>
        </div>
        <div style={{width: '100%', height: '40%' , display: 'flex'}}>
            <div style={{width: '80%'}}>
                Ингредиенты
            </div>
            <div style={{width: '20%'}}>
                цена
            </div>
        </div>
    </div>);
}