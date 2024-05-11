import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../services/hooks';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { resetPassword } from '../../services/auth/action';
import '../index.css'
import React from 'react';

import { IsPasswordSet, IsForgotPasswordEmailSent } from '../../services/auth/selectors';

const ResetPasswordPage = () => {
    const dispatch = useDispatch();

    const isForgotPasswordEmailSent = IsForgotPasswordEmailSent();
    const isPasswordSet = IsPasswordSet();

    const {values, handleChange} = useForm({
        newPassword: '',
        code: ''
    });
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

          /* @ts-ignore */
        dispatch(resetPassword({password: values.newPassword, token: values.code}));
    }

    return ((isForgotPasswordEmailSent && !isPasswordSet) ? (<div className='mainPanel'>
            <form onSubmit={handleSubmit}>
                <h2 className='text text_type_main-medium m-5'>Востановление пароля</h2>
                <PasswordInput
                    extraClass='m-5'
                    placeholder='Введите новый пароль'
                    name='newPassword'
                    value={values.newPassword}
                    onChange={handleChange} />
                <Input
                    extraClass='m-5'
                    placeholder='Введите код из письма'
                    name='code'
                    value={values.code}
                    onChange={handleChange} />
                <Button 
                    htmlType='submit'
                    disabled={!values.newPassword || !values.code}>Сохранить</Button>
            </form>

            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Вспомнили пароль? <Link to='/login'>Войти</Link></span>
            </div>
    </div>) : (isForgotPasswordEmailSent && isPasswordSet) ? <Navigate to="/login" /> : <Navigate to="/forgot-password" />);
}

export default ResetPasswordPage;