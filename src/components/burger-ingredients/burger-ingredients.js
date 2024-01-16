import { useState, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types'
import { IngredientsDataType } from '../../utils/data'
import { useSelector, useDispatch } from 'react-redux';

import Modal from "../modal/modal";
import IngredientDetails from '../ingredient-details/ingredient-details'

import IngredientsContainer from './ingredients-container'

import {CLEAR_VIEWED_INGREDIANT_ITEM} from '../../services/actions'

const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState('buns');

    const onClickTav = value => {
        setCurrentTab(value);
    }

    const {allIngredients, allIngredientsRequested} = useSelector(store => store.allIngredients);

    //TODO: выделить 
    const bungs = useMemo(() => allIngredients.filter(item => item.type === 'bun'), [allIngredients]);
    const sauces = useMemo(() => allIngredients.filter(item => item.type === 'sauce'), [allIngredients]);
    const fillings = useMemo(() => allIngredients.filter(item => item.type === 'main'), [allIngredients]);

    const {item} = useSelector(store => store.currentViewedIngredient);

    const dispatch = useDispatch();
    
    const clearItemModal = () => {
        dispatch({
            type: CLEAR_VIEWED_INGREDIANT_ITEM
        });
    }

    return (
        <section className={styles.mainIngredientsSection}>
            {allIngredientsRequested && (
                <div className={styles.mainContainer}>
                    <h1>Соберите бургер</h1>

                    <div className={styles.tabs}>
                        <Tab value="buns" active={currentTab === "buns"} onClick={onClickTav}>Булки</Tab>
                        <Tab value="sauces" active={currentTab === "sauces"} onClick={onClickTav}>Соусы</Tab>
                        <Tab value="fillings" active={currentTab === "fillings"} onClick={onClickTav}>Начинки</Tab>
                    </div>


                    <div className={`${styles.scroller} custom-scroll`}>
                        <IngredientsContainer name="Булки" data={bungs} />
                        <IngredientsContainer name="Соусы" data={sauces} />
                        <IngredientsContainer name="Начинки" data={fillings} />
                    </div>
                </div>
            )}
        {/*TODO: здесь был удалён хук isModal надо будет обдумать, как его более корректно поправить */}
        {item && (
            <Modal onClose={clearItemModal} title='Детали игредиента'>
                <IngredientDetails />
            </Modal>
            )}
        </section>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientsDataType)
}

export default BurgerIngredients;