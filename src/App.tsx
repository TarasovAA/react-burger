import React, {useState, useEffect} from 'react';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/butger-constructor/burger-constructor';
import './App.css'

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {

  const [state, setState] = useState({
    isLoading: false,
    isLoaded: false,
    ingredients: [],
    hasError: false,
  });

  useEffect(() =>{
    const getIngredientsData = async () =>{
      setState({
        ...state,
        isLoading: true
      });

      await fetch(url)
              .then(result => result.json())
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

const {ingredients, isLoaded} = state;
  return (
    <div className='container'>
      <AppHeader />
      { 
        isLoaded && <div className='mainpart'>
            <BurgerIngredients ingredients={[...ingredients]}/>
            <BurgerConstructor ingredients={[...ingredients]}/>
        </div>
      }
    </div>
  );
}

export default App;
