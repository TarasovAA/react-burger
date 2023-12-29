import { IngredientsDataType } from '../../utils/data';
import styles from './modal.module.css';

const IngredientDetails = ({item}) => {
    return(<div className={styles.ingredientForm}>
       <div>
            <img src={item.image_large} alt={item.name}/>
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
        </div>);
}

IngredientDetails.propTypes = {
    item: IngredientsDataType
}

export default IngredientDetails; 