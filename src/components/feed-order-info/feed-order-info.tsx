import { useParams } from 'react-router-dom';
import Api from '../../services/api';
import { useState, useEffect } from 'react';
import { 
    TAllOrdersResponseBody,
    TOrderA,
    TIngredient
} from '../../utils/types';
import { Loader } from '../../local-uikit/components';
import { getAllIngredients } from '../../services/ingredients/selectors';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks';

import style from './feed-order-info.module.css';

type TOrderIngredient = TIngredient & { count: number; }

export const FeedOrderInfo = () => {
    const {id} = useParams();
    const [orderInfo, setOrderInfo] = useState<TOrderA | null>(null);

    const [ingredients, setIngredients] = useState<Array<TOrderIngredient>>([]);
    
    const allIngredients : Array<TIngredient> = useSelector(getAllIngredients);

    useEffect(() => {
        if(id){
            Api.getOrderInfo(id)
                .then((data: TAllOrdersResponseBody) => {
                    setOrderInfo(data.orders[0]);

                    setIngredients(
                        allIngredients
                        .filter(ingredient => data.orders[0].ingredients.indexOf(ingredient._id) !== -1)
                        .map(ingredient => (
                            {
                                ...ingredient,
                                count: data.orders[0].ingredients.filter(value => value === ingredient._id).length
                            }))
                    );
                })
        }
       
    }, [allIngredients])

    return ( <div className={`${style.container} p-10`}>
    {orderInfo ? (<>
        <div className={`${style.textCenter}`}>
            <p className="text text_type_main-medium mb-10">#{id}</p>
        </div>

        <div>
            <p className="text text_type_main-medium mb-3">{orderInfo.name}</p>
        </div>

        <div>
            <p className="text text_type_main-default mb-15" style={orderInfo.status === 'done' ? {color: '#00cccc'} : {}}>{orderInfo.status}</p>
        </div>
        
        <div className='mb-10'>
            <p className="text text_type_main-medium mb-6">Состав:</p>

            <div className='custom-scroll' style={{maxWidth: 800, maxHeight: 640, display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto' }}>
                {ingredients.map(ingredient => (
                <div key={ingredient._id} className={style.flexIngredientContainer}>
                    <div className={style.imageColumn}><img src={ingredient.image_mobile} alt="Изображение нигридиента" /></div>
                    <div className={style.textColumn}><p className="text text_type_main-default">{ingredient.name}</p></div> 
                    <div className={style.priceColumn}><p className="text text_type_main-default">{ingredient.count}x{ingredient.price}{<CurrencyIcon type='primary' />}</p></div>
                </div>))}
            </div>
        </div>
        
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', gap: 10}}>
            <div><FormattedDate className="text text_type_main-default text_color_inactive"
                date={new Date(orderInfo.createdAt)} />
            </div>
            <div>
                <p className="text text_type_main-default">
                    {ingredients.reduce((accumulator, current ) => (accumulator + current.price * current.count), 0)} <CurrencyIcon type='primary' />
                </p>
            </div>
        </div>

    </>) : <Loader /> }
    </div>);
}