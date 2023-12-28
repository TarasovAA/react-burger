import React, {useState} from 'react';
import {  Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../utils/data';

import IngredientsContainer from './ingredients-container'

const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState('buns');
    const [ingredients, setIngredients] = useState({
        buns: data.filter(_ => _.type === 'bun'),
        sauces: data.filter(_ => _.type === 'sauce'),
        fillings: data.filter(_ => _.type === 'main')
    });

    
    const  onClickTav = value => {
        setCurrentTab(value);
    }

    return (
        <main  style={{gridArea:'main', width: '50%'}}>
            <h1>Соберите бургер</h1>

            <div style={{ display: 'flex' }}>
                <Tab value="buns" active={currentTab === "buns"} onClick={onClickTav}>Булки</Tab>
                <Tab value="sauces" active={currentTab === "sauces"} onClick={onClickTav}>Соусы</Tab>
                <Tab value="fillings" active={currentTab === "fillings"}  onClick={onClickTav}>Начинки</Tab>
            </div>
            

            <div>
                <IngredientsContainer name="Булки" data={ingredients.buns} />
                <IngredientsContainer name="Соусы" data={ingredients.sauces} />
                <IngredientsContainer name="Начинки" data={ingredients.fillings} />
            </div>
        </main>
    );
}

export default BurgerIngredients;