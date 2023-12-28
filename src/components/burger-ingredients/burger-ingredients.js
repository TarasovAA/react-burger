import React, {useState} from 'react';
import {  Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';

import IngredientsContainer from './ingredients-container'

const BurgerIngredients = ({ingredients}) => {
    const [currentTab, setCurrentTab] = useState('buns');

    const  onClickTav = value => {
        setCurrentTab(value);
    }

    const bungs = ingredients && ingredients.filter(_ => _.type === 'bun');
    const sauces = ingredients && ingredients.filter(_ => _.type === 'sauce');
    const fillings = ingredients && ingredients.filter(_ => _.type === 'main');
    
    return (
        <main className={`${styles.main}`}>
            <div className={`${styles.main} pl-10`}>
                <h1>Соберите бургер</h1>

                <div style={{ display: 'flex' }}>
                    <Tab value="buns" active={currentTab === "buns"} onClick={onClickTav}>Булки</Tab>
                    <Tab value="sauces" active={currentTab === "sauces"} onClick={onClickTav}>Соусы</Tab>
                    <Tab value="fillings" active={currentTab === "fillings"}  onClick={onClickTav}>Начинки</Tab>
                </div>


                <div className={`${styles.scroller} custom-scroll`}>
                    <IngredientsContainer name="Булки" data={bungs} />
                    <IngredientsContainer name="Соусы" data={sauces} />
                    <IngredientsContainer name="Начинки" data={fillings} />
                </div>
            </div>
           
        </main>
    );
}

export default BurgerIngredients;