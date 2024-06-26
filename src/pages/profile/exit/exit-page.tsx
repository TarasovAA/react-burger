import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../services/auth/action";
import { useDispatch } from "../../../services/hooks";

const ExitPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
         <p className='text text_type_main-medium text_color_inactive mt-5'>Вы точно хотите выйти?</p>
         <br />
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

export default ExitPage;