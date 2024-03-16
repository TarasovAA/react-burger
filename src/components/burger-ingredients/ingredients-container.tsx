import Ingredient from './ingredient';
import styles from './burger-ingredients.module.css';
import { IngredientsDataType } from '../../utils/data';
import PropTypes from 'prop-types';
import React, {forwardRef} from 'react';

const IngredientsContainer = forwardRef<HTMLDivElement,{data: Array<any>, name: string | null}>(({ data, name }, ref: React.ForwardedRef<HTMLDivElement>) => {

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
    data: PropTypes.arrayOf(IngredientsDataType).isRequired,
    name: PropTypes.string
}

export default IngredientsContainer;