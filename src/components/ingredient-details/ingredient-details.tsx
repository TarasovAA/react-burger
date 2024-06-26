import styles from './ingredient-details.module.css';
import { useParams } from 'react-router-dom';
import { Loader } from '../../local-uikit/components';
import { useMemo } from 'react';
import { TIngredient } from '../../utils/types';
import { getAllIngredients } from '../../services/ingredients/selectors';
import { useSelector } from '../../services/hooks';

const IngredientDetails = () => {
    const allIngredients = useSelector(getAllIngredients);

    const {id} = useParams();

    const item = useMemo(() => allIngredients.find((i: TIngredient) => i._id === id), [allIngredients, id]);
    
    return (item ? (<div className={styles.ingredientForm}>
        <div>
            <img src={item.image_large} alt={item.name} />
        </div>
        <p className="text text_type_main-medium">{item.name}</p>
        <div className={`${styles.detailsField} text text_type_main-small`}>
            <div className={styles.detailsItem}>
                <p>Каллории,калл</p>
                <p>{item.calories}</p>
            </div>
            <div className={styles.detailsItem}>
                <p>Белки,г</p>
                <p>{item.proteins}</p>
            </div>
            <div className={styles.detailsItem}>
                <p>Жиры,г</p>
                <p>{item.fat}</p>
            </div>
            <div className={styles.detailsItem}>
                <p>Углеводы,г</p>
                <p>{item.carbohydrates}</p>
            </div>
        </div>
    </div>) : <Loader />);
}

export default IngredientDetails; 