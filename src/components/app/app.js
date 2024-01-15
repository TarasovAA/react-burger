import React, { useState, useEffect } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../butger-constructor/burger-constructor';
import styles from './app.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {getIngrediants} from '../../services/actions/index';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngrediants());
  }, [])

  

  return (
    <div className={styles.container}>
      <AppHeader />
      {
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      }
    </div>
  );
}

export default App;
