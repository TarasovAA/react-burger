import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import {getIngredients} from '../../services/ingredients/action';
import { getUserInfo } from '../../services/auth/action';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { ProtectedRouteElement } from '../protected-route-element/protected-route-element';

import {
   LoginPage,
   RegisterPage,
   ForgotPasswordPage,
   ResetPasswordPage,
   ProfilePage,
   OrderHistoryPage,
   HomePage,
   IngredientViewPage,
   ExitPage,
   ProfileFieldsPage,
   FeedPage
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
            <Route path='/' element={ <HomePage /> } />
            <Route path='/*' element={<div>Error</div>} />
            
            <Route path='/login' element={<ProtectedRouteElement onlyUnAuth={true} component={<LoginPage />} />} />
            <Route path='/register' element={ <ProtectedRouteElement onlyUnAuth={true} component={<RegisterPage />} />} />
            <Route path='/forgot-password' element={<ProtectedRouteElement onlyUnAuth={true} component={<ForgotPasswordPage />} />} />
            <Route path='/reset-password' element={<ProtectedRouteElement onlyUnAuth={true} component={<ResetPasswordPage />} />} />

            <Route path='/profile' element={<ProtectedRouteElement component={<ProfilePage profileElement={<ProfileFieldsPage />} />} />} />
            <Route path='/profile/orders' element={<ProtectedRouteElement component={<ProfilePage profileElement={<OrderHistoryPage />}/>} />} />
            <Route path='/profile/exit' element={<ProtectedRouteElement component={<ProfilePage profileElement={<ExitPage /> } />} />} />
            
            <Route path='/feed' element={<FeedPage />} />

            <Route path='/ingredients/:id' element={<IngredientViewPage />} />
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
