import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import style from './ingredient-view.module.css'
import '../index.css';

const IngredientView = () => {
    return (<div className={style.putInCenter}>
        <h2 className='text text_type_main-medium m-5'>Детали ингредиента</h2>
        <IngredientDetails />
    </div>);
}

export default IngredientView;