import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const AppHeader = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headWraper} >
              <div>
                    <div className={`${styles.icon} m-2 pr-5 pl-5 pt-4 pb-4`}>
                        <BurgerIcon />
                        <p className="text text_type_main-default ml-2">Конструктор</p>
                    </div>

                    <div className= {`${styles.icon} m-2 pr-5 pl-5 pt-4 pb-4`}>
                        <ListIcon type="secondary"/>
                        <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
                    </div>
                </div>

                <div className={styles.icon}>
                    <Logo />
                </div>

                <div className={styles.icon}>
                    <ProfileIcon type="secondary"/>
                    <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;