import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useDrag } from 'react-dnd';
import {DndDragTypes} from '../../constants/common';
import { Link, useLocation } from 'react-router-dom';
import { TIngredient } from '../../utils/types';
import { FC } from 'react';
import { GetBurgerConstructor } from '../../services/constructor/selectors';

interface IIngredientProps{
  item: TIngredient
}

const Ingredient: FC<IIngredientProps> = ({item}) => {
  const location = useLocation();

  const burgerConstructor = GetBurgerConstructor();
  const {_id, type} = item;


  console.log("error", burgerConstructor);
  const count = (type === 'bun') ? 
                  burgerConstructor.head.filter((_: TIngredient) => _._id === item._id).length
                  :
                  burgerConstructor.body.filter((_: TIngredient) => _._id === item._id).length;
                  
  const [{isDrag}, dragRef] = useDrag({
    type: (type === 'bun') ? DndDragTypes.BUN: DndDragTypes.INGREDIENT,
    item: {_id},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  
  const opacity = isDrag ? 0.2 : 1;

  return (
    <Link to={`/ingredients/${item._id}`} state={{ backgroundLocation:  location}} className={styles.ingredientLink} >
      <div ref={dragRef}
              className={styles.ingredientForm}
              style={{opacity}}
      >
        {!!count && <Counter count={count} size="default" extraClass="m-1" />}
        <img src={item.image} alt={item.name} />
        <div className={`${styles.textCenteror} mt-2`}>
          <p className="text text_type_main-medium">{item.price}<CurrencyIcon type='primary' /></p>
        </div>
        <p className={`${styles.textCenteror} text text_type_main-default`}>{item.name}</p>
    </div>
  </Link>);
}

export default Ingredient;