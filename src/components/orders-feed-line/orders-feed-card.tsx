import style from './orders-feed-line.module.css';
import { TFeed, TIngredient } from '../../utils/types';
import { FC } from 'react';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { GetIngredientsByIds } from '../../services/ingredients/selectors';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { link } from 'fs';

interface OrderFeedCardProps{
    feedInfo: TFeed;
    link?: string;
};

export const OrderFeedCard: FC<OrderFeedCardProps> = (props) => {
    const location = useLocation();

    const {number, name, createdAt, ingredients, _id} = props.feedInfo;
    const link = props.link

    const ingredientsInfo: Array<TIngredient> = GetIngredientsByIds(ingredients);
    const orderCost = ingredientsInfo.reduce((acc, ingredient) => acc + ingredient.price * (ingredient.type === "bun" ? 2 : 1),
    0);

    return (<Link className={`${style.card} p-5`}
        state={{ backgroundLocation:  location}} 
        key={_id}
        to={link ? `${link}/${number}` : `/feed/${number}`}
        >
        <div style={{width: '100%', height: '30%', display: 'flex'}}>
            <div style={{width: '20%'}}><p className='text text_type_digits-default'>#{number}</p></div>
            <div style={{width: '60%'}}></div>
            <div style={{width: '20%'}}><FormattedDate date={new Date(createdAt)} /></div>
        </div>
        <div style={{width: '80%', minHeight: '30%', marginBottom: '20px'}}>
            <p className="text text_type_main-medium">{name}</p>
        </div>
        <div style={{width: '100%', height: '40%' , display: 'flex'}}>
            <div className={style.ingredientContainer} style={{width: '80%'}}>
                {
                    ingredientsInfo && ingredientsInfo.map(ing => <img className={style.ingredientIcon} src={ing.image_mobile} alt={ing.name} />)
                }
            </div>
            <div style={{width: '20%'}}>
                <p className='text text_type_digits-default'>{orderCost} <CurrencyIcon type='primary' /></p>
            </div>
        </div>
    </Link>);
}