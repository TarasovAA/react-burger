import styles from './burger-default-templates.module.css'

export const BurgerDefaultIngredient = () => {
    return (<div className={styles.defaultConstructorDivElement}>
            <span className={styles.defaultConstructorSpanElement}>
                Выберите начинку
            </span>
        </div>);
}

export const BurgerDefaultBun = () => {
    return (<div className={styles.defaultConstructorDivBun}>
        <span className={styles.defaultConstructorSpanBun}>
            Выберите булку
        </span>
    </div>)
}