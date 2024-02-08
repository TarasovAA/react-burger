import Ingredient from './ingredient';
import styles from './burger-ingredients.module.css';
import { IngredientsDataType } from '../../utils/data'
import PropTypes from 'prop-types'
import {forwardRef} from 'react'

const IngredientsContainer = forwardRef(({ data, name }, ref) => {

    return (
        <div ref={ref}>
            <p className="text text_type_main-medium pt-10 pb-6">{name}</p>
            <div className={styles.container}>
                {data.map(item => <Ingredient key={item._id} item={item} />)}
            </div>
        </div>
    );
})

IngredientsContainer.propTypes = {
    data: PropTypes.arrayOf(IngredientsDataType),
    name: PropTypes.string
}

export default IngredientsContainer;