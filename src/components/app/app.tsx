import React, { useState, useEffect } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../butger-constructor/burger-constructor';
import styles from './app.module.css';

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {

  const [state, setState] = useState({
    isLoading: false,
    isLoaded: false,
    ingredients: [],
    hasError: false,
  });

  useEffect(() => {
    const getIngredientsData = async () => {
      setState({
        ...state,
        isLoading: true
      });

      fetch(url)
        .then(result => {
          if (!result.ok)
            return Promise.reject(`Ошибка ${result.status}`);

          return result.json();
        })
        .then(data => {
          console.log(data);
          setState({
            ...state,
            ingredients: data.data,
            isLoading: false,
            isLoaded: true
          });
        })
        .catch(err => {
          console.log(err);
          setState({
            ...state,
            isLoading: false,
            hasError: true
          });
        })
    }

    getIngredientsData();
  }, [])

  const { ingredients, isLoaded } = state;
  return (
    <div className={styles.container}>
      <AppHeader />
      {
        isLoaded && (<main className={styles.main}>
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} />
        </main>
      )}
    </div>
  );
}

export default App;
