import Modal from "../modal/modal";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/ingredient-details'
import { IngredientsDataType } from '../../utils/data'
import styles from './burger-ingredients.module.css'
import {useModal} from '../../hooks/useModal'

const Ingredient = ({ item }) => {

  const { isModalOpen, openModal, closeModal } = useModal();

  return (<div className={styles.ingredientForm} onClick={openModal}>
    <img src={item.image} alt={item.name} />
    <div className={`${styles.textCenteror} mt-2`}>
      <p className="text text_type_main-medium">{item.price}<CurrencyIcon /></p>
    </div>
    <p className={`${styles.textCenteror} text text_type_main-default`}>{item.name}</p>

    {isModalOpen && (
    <Modal onClose={closeModal} title='Детали игредиента'>
      <IngredientDetails item={item} />
    </Modal>
    )}
  </div>);
}

Ingredient.propTypes = {
  item: IngredientsDataType
};

export default Ingredient;