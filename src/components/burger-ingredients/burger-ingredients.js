import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types'
import { IngredientsDataType } from '../../utils/data'

import IngredientsContainer from './ingredients-container'

const BurgerIngredients = ({ ingredients }) => {
    const [currentTab, setCurrentTab] = useState('buns');

    const onClickTav = value => {
        setCurrentTab(value);
    }

    const bungs = ingredients && ingredients.filter(item => item.type === 'bun');
    const sauces = ingredients && ingredients.filter(item => item.type === 'sauce');
    const fillings = ingredients && ingredients.filter(item => item.type === 'main');

    return (
        <section className={styles.mainIngredientsSection}>
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

        </section>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientsDataType)
}

export default BurgerIngredients;