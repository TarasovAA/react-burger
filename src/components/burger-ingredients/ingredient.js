import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsDataType } from '../../utils/data';
import styles from './burger-ingredients.module.css';
import { useDispatch } from "react-redux";
import {SET_VIEWED_INGREDIANT_ITEM} from '../../services/actions';
import { useDrag } from 'react-dnd'

const Ingredient = ({ item }) => {
  const dispatch = useDispatch();

  const setItemToModal = () => {
    dispatch({
      type: SET_VIEWED_INGREDIANT_ITEM,
      payload: item
    });
  
  }

  const {_id, type} = item;
  
  const [{isDrag}, dragRef] = useDrag({
    type: (type === 'bun') ? 'bun': 'ingredient',
    item: {_id},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  
  return ( 
    !isDrag && <div ref={dragRef}
            className={styles.ingredientForm}
            onClick={setItemToModal}
  >
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