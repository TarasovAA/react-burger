import { useEffect } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../butger-constructor/burger-constructor';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import {getIngredients} from '../../services/actions/index';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Routes, Route} from 'react-router-dom';

import {
   Login,
   Register,
   ForgotPassword,
   ResetPassword,
   Profile,
   Ingredients,
   OrderHistory
  } from '../../pages';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [])



  return (
    <div className={styles.container}>
      <AppHeader />
      {
        <Routes>
          <Route path='/' element={ <main className={styles.main}>
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </DndProvider>
              </main>} />
          <Route path='/*' element={<div>Error</div>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/ingredients' element={<Ingredients />} />
          <Route path='/profile/orders' element={<OrderHistory />} />
        </Routes>
      
      }
    </div>
  );
}

export default App;
