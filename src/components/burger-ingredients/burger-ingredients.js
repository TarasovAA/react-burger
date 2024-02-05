import { useState, useMemo, useRef } from 'react';
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
    const {allIngredients, allIngredientsRequested} = useSelector(store => store.allIngredients);

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

    const tabRef = useRef(null);
    const bunsContainerRef = useRef(null);
    const saucesContainerRef = useRef(null);
    const fillingsContainerRef = useRef(null);

    const switchTab = e => {
        const tabCoordinates = tabRef?.current.getBoundingClientRect();
        const saucesCoordinates = saucesContainerRef?.current.getBoundingClientRect();
        const fillingsCoordinates = fillingsContainerRef?.current.getBoundingClientRect();

        if(fillingsCoordinates['y'] - (tabCoordinates['y'] + tabCoordinates['height']) <= 0){
            setCurrentTab("fillings");
        }
        else if(saucesCoordinates['y'] - (tabCoordinates['y'] + tabCoordinates['height']) <= 0){
            setCurrentTab("sauces");
        }
        else{
            setCurrentTab("buns");
        }
    }

    const onClickTab = value => {
        if(bunsContainerRef.current && saucesContainerRef.current && fillingsContainerRef.current){
            switch(value){
                case "buns":
                    bunsContainerRef?.current.scrollIntoView({behavior: 'smooth'});
                    break;
                case "sauces":
                    saucesContainerRef?.current.scrollIntoView({behavior: 'smooth'});
                    break;
                case "fillings":
                    fillingsContainerRef?.current.scrollIntoView({behavior: 'smooth'});
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <section className={styles.mainIngredientsSection}>
            {allIngredientsRequested && (
                <div className={styles.mainContainer}>
                    <h1>Соберите бургер</h1>

                    <div>
                        <div className={styles.tabs} ref={tabRef}>
                            <Tab value="buns" active={currentTab === "buns"} onClick={onClickTab}>Булки</Tab>
                            <Tab value="sauces" active={currentTab === "sauces"} onClick={onClickTab}>Соусы</Tab>
                            <Tab value="fillings" active={currentTab === "fillings"} onClick={onClickTab}>Начинки</Tab>
                        </div>
                        <div className={`${styles.scroller} custom-scroll`} onScroll={e => switchTab(e)}>
                            <IngredientsContainer ref={bunsContainerRef} name="Булки" data={bungs} />
                            <IngredientsContainer ref={saucesContainerRef} name="Соусы" data={sauces} />
                            <IngredientsContainer ref={fillingsContainerRef} name="Начинки" data={fillings} />
                        </div>
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