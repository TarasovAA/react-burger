import Ingredient from './ingredient'
import styles from './burger-ingredients.module.css'

const IngredientsContainer  = ({ data, name }) => {
    
    return(
        <>
            <p className="text text_type_main-medium pt-10 pb-6">{name}</p>
            <div className={styles.container}>
                {data.map(item => <Ingredient key={item._id} item={item} />)}
            </div>
        </>
    );
}

export default IngredientsContainer;