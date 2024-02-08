import { useState, useMemo, useRef, useCallback } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useSelector, useDispatch } from 'react-redux';

import Modal from "../modal/modal";
import IngredientDetails from '../ingredient-details/ingredient-details'

import IngredientsContainer from './ingredients-container'

import {CLEAR_VIEWED_INGREDIENT_ITEM} from '../../services/actions'

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
            type: CLEAR_VIEWED_INGREDIENT_ITEM
        });
    }

    const tabRef = useRef(null);
    const bunsContainerRef = useRef(null);
    const saucesContainerRef = useRef(null);
    const fillingsContainerRef = useRef(null);

    const switchTab = e => {
        if(!(tabRef.current || bunsContainerRef.current || saucesContainerRef.current || fillingsContainerRef.current))
            return;

        const tabBottom = tabRef?.current.getBoundingClientRect().bottom;

        const bunsTop = bunsContainerRef?.current.getBoundingClientRect().top;
        const saucesCoordinatesTop = saucesContainerRef?.current.getBoundingClientRect().top;
        const fillingsCoordinatesTop = fillingsContainerRef?.current.getBoundingClientRect().top;
    

        const currentSection = [{tab: 'buns', value: Math.abs(bunsTop - tabBottom)}, 
                {tab: 'sauces', value: Math.abs(saucesCoordinatesTop - tabBottom)}, 
                {tab: 'fillings', value: Math.abs(fillingsCoordinatesTop - tabBottom)}].reduce((a, b) => a.value < b.value ? a : b)


        setCurrentTab(currentSection.tab);
    }

    const onClickTab = useCallback(value => {
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
    }, [])

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
        {/*TODO: здесь был удалён хук isModal надо будет обдумать, как его более корректно вернуть. И нужно ли вообще возвращать ли?! */}
        {item && (
            <Modal onClose={clearItemModal} title='Детали игредиента'>
                <IngredientDetails />
            </Modal>
            )}
        </section>
    );
}

export default BurgerIngredients;