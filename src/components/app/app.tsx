import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import {getIngredients} from '../../services/actions/index';
import { getUserInfo } from '../../services/actions/auth';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { ProtectedRouteElement } from '../protected-route-element/protected-route-element';

import {
   Login,
   Register,
   ForgotPassword,
   ResetPassword,
   Profile,
   OrderHistory,
   Home,
   IngredientView,
   Exit,
   ProfileFields
  } from '../../pages';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  console.log(state);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getIngredients());
  }, [])

  return (
    <div className={styles.container}>
      <AppHeader />


      <div className={styles.body}>
        <Routes location={state?.backgroundLocation || location}>
            <Route path='/' element={ <Home /> } />
            <Route path='/*' element={<div>Error</div>} />
            
            <Route path='/login' element={<ProtectedRouteElement onlyUnAuth={true} component={<Login />} />} />
            <Route path='/register' element={ <ProtectedRouteElement onlyUnAuth={true} component={<Register />} />} />
            <Route path='/forgot-password' element={<ProtectedRouteElement onlyUnAuth={true} component={<ForgotPassword />} />} />
            <Route path='/reset-password' element={<ProtectedRouteElement onlyUnAuth={true} component={<ResetPassword />} />} />

            <Route path='/profile' element={<ProtectedRouteElement component={<Profile profileElement={<ProfileFields />} />} />} />
            <Route path='/profile/orders' element={<ProtectedRouteElement component={<Profile profileElement={<OrderHistory />}/>} />} />
            <Route path='/profile/exit' element={<ProtectedRouteElement component={<Profile profileElement={<Exit /> } />} />} />
            

            <Route path='/ingredients/:id' element={<IngredientView />} />
          </Routes>

          {
            state?.backgroundLocation && ( <Routes>
              <Route path='/ingredients/:id' element={<Modal onClose={() => {
                navigate(-1);
            }} title='Детали игредиента'>
                    <IngredientDetails />
                </Modal>} />
            </Routes>)
          }
      </div>
    
    </div>
  );
}

export default App;
