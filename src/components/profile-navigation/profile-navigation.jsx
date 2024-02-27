import { NavLink } from "react-router-dom";
import style from "./profile-navigation.module.css";

export const ProfileNavigation = () => {
    return (<div className={`${style.navField} pl-30 pt-15`}>
        <NavLink end to='/profile' className={style.icon}>
            {
                ({isActive}) => (<>
                    <p className={`text text_type_main-medium ${!isActive && 'text_color_inactive'} mb-5`}>Профиль</p>
                </>)
            }
        </NavLink>
        <br />
        <NavLink to='/profile/orders' className={style.icon}>
            {
                ({isActive}) => (<>
                    <p className={`text text_type_main-medium ${!isActive && 'text_color_inactive'} mb-5`}>История заказов</p>
                </>)
            }
        </NavLink>
        <br />
        <NavLink  to='/profile/exit' className={style.icon}>
            {
                ({isActive}) => (<>
                    <p className={`text text_type_main-medium ${!isActive && 'text_color_inactive'} mb-5`}>Выход</p>
                </>)
            }
        </NavLink>
    </div>);
}