import {useState} from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
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
            <div className={styles.maincontainer}>
                <h1>Соберите бургер</h1>

                <div style={{ display: 'flex', width:'100px' }}>
                    <Tab value="buns" active={currentTab === "buns"} onClick={onClickTav}>Булки</Tab>
                    <Tab value="sauces" active={currentTab === "sauces"} onClick={onClickTav}>Соусы</Tab>
                    <Tab value="fillings" active={currentTab === "fillings"}  onClick={onClickTav}>Начинки</Tab>
                </div>


                <div style={{width: '100%'}} className={`${styles.scroller} custom-scroll`}>
                    <IngredientsContainer name="Булки" data={bungs} />
                    <IngredientsContainer name="Соусы" data={sauces} />
                    <IngredientsContainer name="Начинки" data={fillings} />
                </div>
            </div>
           
        </main>
    );
}

export default BurgerIngredients;