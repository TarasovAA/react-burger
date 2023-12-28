import { Logo, Tab, ProfileIcon, BurgerIcon, ListIcon   } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const AppHeader = () => {

    return (
        <>
            <header style={{gridArea:'header'}}>
                <div className={styles.Header}>
                    <div style={{display: 'flex'}}>
                        <div className={styles.Icon}>
                            <BurgerIcon />
                            Конструктор
                        </div>

                        <div className={styles.Icon}>
                            <ListIcon />
                            Лента заказов
                        </div>
                    </div>

                    <div className={styles.Icon}>
                        <Logo />
                    </div>

                    <div className={styles.Icon}>
                        <ProfileIcon />
                        Личный кабинет
                    </div>
                </div>
            </header>
        </>
    );
}

export default AppHeader;