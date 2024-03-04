import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileNavigation } from "../../components/profile-navigation/profile-navigation";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/actions/auth";
import { useDispatch } from "react-redux";

const Exit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (<div>
        <ProfileNavigation />
         <p className='text text_type_main text_color_inactive mt-5'>Вы точно хотите выйти?</p>
         <Button
            type="secondary"
            htmlType='button'
            onClick={() => {
                navigate(-1);
            }}>
                Отмена
        </Button>
        <Button
            htmlType='button'
            onClick={() => {
                dispatch(logoutUser());
                navigate("/");
            }}>
                Выйти
        </Button>
    </div>);
}

export default Exit;