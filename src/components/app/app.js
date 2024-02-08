import { useEffect } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../butger-constructor/burger-constructor';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import {getIngrediants} from '../../services/actions/index';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
         
        </main>
      }
    </div>
  );
}

export default App;
