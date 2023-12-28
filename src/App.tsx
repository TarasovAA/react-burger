import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/butger-constructor/burger-constructor';
import './App.css'

function App() {
  return (
    <div className='container'>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}

export default App;
