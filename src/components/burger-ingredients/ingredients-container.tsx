import Ingredient from './ingredient';
import styles from './burger-ingredients.module.css';
import React, {forwardRef} from 'react';
import { TIngredient } from '../../utils/types';

const IngredientsContainer = forwardRef<HTMLDivElement,{data: Array<TIngredient>, name: string | null}>(({ data, name }, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <div ref={ref}>
            <p className="text text_type_main-medium pt-10 pb-6">{name}</p>
            <div className={styles.container}>
                {data.map(item => <Ingredient key={item._id} item={item} />)}
            </div>
        </div>
    );
})

export default IngredientsContainer;