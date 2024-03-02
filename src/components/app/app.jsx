import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import {getIngredients} from '../../services/actions/index';
import { getUserInfo } from '../../services/actions/auth';
import { Routes, Route} from 'react-router-dom';

import { ProtectedRouteElement } from '../protected-route-element/protected-route-element';

import {
   Login,
   Register,
   ForgotPassword,
   ResetPassword,
   Profile,
   Ingredients,
   OrderHistory,
   Home
  } from '../../pages';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getIngredients());
  }, [])

  return (
    <div className={styles.container}>
      <AppHeader />
      {
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/ingredients' element={<Ingredients />} />
          <Route path='/*' element={<div>Error</div>} />
          
          <Route path='/login' element={<ProtectedRouteElement onlyUnAuth={true} component={<Login />} />} />
          <Route path='/register' element={ <ProtectedRouteElement onlyUnAuth={true} component={<Register />} />} />
          <Route path='/forgot-password' element={<ProtectedRouteElement onlyUnAuth={true} component={<ForgotPassword />} />} />
          <Route path='/reset-password' element={<ProtectedRouteElement onlyUnAuth={true} component={<ResetPassword />} />} />

          <Route path='/profile' element={<ProtectedRouteElement component={<Profile />} />} />
          <Route path='/profile/orders' element={<ProtectedRouteElement component={<OrderHistory />} />} />
        </Routes>
      
      }
    </div>
  );
}

export default App;
