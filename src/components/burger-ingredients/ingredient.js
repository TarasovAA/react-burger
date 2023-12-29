import Modal from "../modal/modal";
import {useEffect, useRef, useState} from "react";
import { CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../modal/ingredient-details'
import { IngredientsDataType } from '../../utils/data'
import styles from './burger-ingredients.module.css'

const Ingredient = ({item}) =>{
    const ckickRef = useRef(null);

    const [modelVisebele, setModelVisebele] = useState(false);

    useEffect(() => {
        ckickRef.current.addEventListener('click', handleOpenModal);

        return () => ckickRef.current.removeEventListener('click', handleOpenModal)
    }, []);

    const handleOpenModal = () => {
        setModelVisebele(true);
      }
    
    const handleCloseModal = () => {
        setModelVisebele(false);
      }

    return (<div className={styles.ingredientForm} ref={ckickRef}>
        <img src={item.image} alt={item.name} />
        <div className={`${styles.textCenteror} mt-2`}>
          <p className="text text_type_main-medium">{item.price}<CurrencyIcon /></p>
        </div>
        <p className={`${styles.textCenteror} text text_type_main-default`}>{item.name}</p>
        
        {modelVisebele && <Modal onClose={handleCloseModal} title='Детали игредиента'>
            <IngredientDetails item={item} />
          </Modal>}
        </div>);
}

Ingredient.propTypes = {
  item: IngredientsDataType
};

export default Ingredient;