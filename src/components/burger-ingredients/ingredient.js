import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsDataType } from '../../utils/data';
import styles from './burger-ingredients.module.css';
import { useDispatch, useSelector } from "react-redux";
import {SET_VIEWED_INGREDIANT_ITEM} from '../../services/actions';
import { useDrag } from 'react-dnd';
import {DndDragTypes} from '../../constants/common';

const Ingredient = ({ item }) => {
  const dispatch = useDispatch();

  const burgerConstructor = useSelector(store => store.burgerConstructor)
  const {_id, type} = item;

  const count = (type === 'bun') ? 
                  burgerConstructor.head.filter(_ => _._id === item._id).length
                  :
                  burgerConstructor.body.filter(_ => _._id === item._id).length;

  
  
  const [{isDrag}, dragRef] = useDrag({
    type: (type === 'bun') ? DndDragTypes.BUN: DndDragTypes.INGREDIENT,
    item: {_id},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  
  const opacity = isDrag ? 0.2 : 1;

  const setItemToModal = () => {
    dispatch({
      type: SET_VIEWED_INGREDIANT_ITEM,
      payload: item
    });
  
  }

  return ( 
    <div ref={dragRef}
            className={styles.ingredientForm}
            onClick={setItemToModal}
            style={{opacity}}
  >
    {!!count && <Counter count={count} size="default" extraClass="m-1" />}
    <img src={item.image} alt={item.name} />
    <div className={`${styles.textCenteror} mt-2`}>
      <p className="text text_type_main-medium">{item.price}<CurrencyIcon /></p>
    </div>
    <p className={`${styles.textCenteror} text text_type_main-default`}>{item.name}</p>
  </div>);
}

Ingredient.propTypes = {
  item: IngredientsDataType
};

export default Ingredient;