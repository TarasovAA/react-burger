import { Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../../services/hooks";
import { useForm } from "../../hooks/useForm";
import { patchUserInfo } from "../../services/auth/action";
import '../index.css';
import React from "react";
import { TUserInfo } from "../../utils/types";
import { GetUserInfo } from "../../services/auth/selectors";

export const ProfileFieldsPage = () => {
    const user = GetUserInfo();
    const dispatch = useDispatch();

    const {values, handleChange, setValues} = useForm({
        name: user.name,
        email: user.email,
        password: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let userInfo: TUserInfo = {};

        if(values.name !== user.name)
            userInfo.name = values.name;

        if(values.email !== user.email)
            userInfo.email = values.email;

        if(!!values.password)
            userInfo.password = values.password;

        /* @ts-ignore */
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

    return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
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
        <div className="saveProfileInfoButtons" style={{ display }}>
            <Button
            type="secondary"
            htmlType='reset'
            >Отмена</Button>
            <Button
            htmlType='submit'
            >Сохранить</Button>
        </div>
        <p className='text text_type_main text_color_inactive mt-5'>В этом разделе вы можете изменить свои персональные данные</p>
    </form>
</div>);
}