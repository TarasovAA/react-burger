import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import style from './ingredient-view.module.css'

const IngredientView = () => {
    return (<div className={style.putInCenter}>
        <IngredientDetails />
    </div>);
}

export default IngredientView;