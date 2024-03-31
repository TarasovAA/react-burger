import { DndProvider } from "react-dnd";
import BurgerConstructor from "../../components/butger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import { HTML5Backend } from "react-dnd-html5-backend";
import style from './home.module.css';

const HomePage = () => {
    return (<main className={style.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>)
}

export default HomePage;