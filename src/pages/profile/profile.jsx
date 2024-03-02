import { ProfileNavigation } from "../../components/profile-navigation/profile-navigation";
import { Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { patchUserInfo } from "../../services/actions/auth";

const Profile = () => {
    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch();

    const {values, handleChange, setValues} = useForm({
        name: user.name,
        email: user.email,
        password: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

        let userInfo = {};

        if(values.name !== user.name)
            userInfo.name = values.name;

        if(values.email !== user.email)
            userInfo.email = values.email;

        if(!!values.password)
            userInfo.password = values.password;

        dispatch(patchUserInfo(userInfo));
    }

    const handleReset = () => {
        setValues({
            name: user.name,
            email: user.email,
            password: ''
        });
    }

    const display = (values.name !== user.name || values.email !== user.email || values.password !== '') ? '' : 'none';

    return (<div>
            <ProfileNavigation />
            <div className="mt-20 ml-10" style={{ display: "inline-block" }}>
                <form onReset={handleReset} onSubmit={handleSubmit}>
                    <Input
                        placeholder="Имя"
                        icon="EditIcon"
                        extraClass="mb-2"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        />
                    <EmailInput
                        icon="EditIcon"
                        extraClass="mb-2"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        />
                    <PasswordInput
                        extraClass="mb-2"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        />
                    <div style={{ display }}>
                        <Button
                        type="secondary"
                        htmlType='reset'
                        >Отмена</Button>
                        <Button
                        htmlType='submit'
                        >Сохранить</Button>
                    </div>
                </form>
            </div>
            <div>
                <p className='text text_type_main text_color_inactive mt-5'>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
    </div>);
}

export default Profile;