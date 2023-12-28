import Ingredient from './ingredient';
import styles from './burger-ingredients.module.css';
import { IngredientsDataType } from '../../utils/data'
import proptypes from 'prop-types'

const IngredientsContainer  = ({ data, name }) => {
    
    return(
        <div>
            <p className="text text_type_main-medium pt-10 pb-6">{name}</p>
            <div className={styles.container}>
                {data.map(item => <Ingredient key={item._id} item={item} />)}
            </div>
        </div>
    );
}

IngredientsContainer.propTypes = {
    data: proptypes.arrayOf(IngredientsDataType),
    name: proptypes.string
}

export default IngredientsContainer;