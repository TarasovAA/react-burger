import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import { NavLink, Link } from 'react-router-dom';
import { getUserInfo } from '../../services/auth/selectors';

const AppHeader = () => {
    const user = getUserInfo();

    return (
        <header className={styles.header}>
            <div className={styles.headWraper} >
              <div>
                    <NavLink to='/' className={`${styles.icon} m-2 pr-5 pl-5 pt-4 pb-4`}>
                        {
                            ({isActive}) => (<>
                                <BurgerIcon type={!isActive ? "secondary" : "primary"}/>
                                <p className={`text text_type_main-default ${!isActive && 'text_color_inactive'} ml-2`}>Конструктор</p>
                            </>

                            )
                        }
                    </NavLink>

                    <NavLink to='/feed' className= {`${styles.icon} m-2 pr-5 pl-5 pt-4 pb-4`}>
                        {
                             ({isActive}) => (
                                <>
                                    <ListIcon type="secondary"/>
                                    <p className={`text text_type_main-default ${!isActive && 'text_color_inactive'} ml-2`}>Лента заказов</p>
                                </>
                             )
                        }
                    </NavLink>
                </div>

                <div className={styles.icon}>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>

                <NavLink to="/profile" className={styles.icon}>
                    {
                        ({isActive}) => (<>
                            <ProfileIcon type={!isActive ? "secondary" : "primary"}/>
                            <p className={`text text_type_main-default ${!isActive && 'text_color_inactive'} ml-2`}>{user ? user.name : 'Личный кабинет'}</p>
                        </>)
                    }
                </NavLink>
            </div>
        </header>
    );
}

export default AppHeader;