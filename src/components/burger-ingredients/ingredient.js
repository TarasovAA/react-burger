import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsDataType } from '../../utils/data'
import styles from './burger-ingredients.module.css'
import { useDispatch } from "react-redux";
import {SET_VIEWED_INGREDIANT_ITEM} from '../../services/actions'

const Ingredient = ({ item }) => {

  const dispatch = useDispatch();

  const setItemToModal = () => {
    dispatch({
      type: SET_VIEWED_INGREDIANT_ITEM,
      payload: item
    });
  
  }
  
  return (<div className={styles.ingredientForm} onClick={setItemToModal}>
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