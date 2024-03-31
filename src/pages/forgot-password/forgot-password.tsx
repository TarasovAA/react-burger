import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { tryResetPassword } from "../../services/auth/action";
import { cleaerResetPasswordResponse } from "../../services/auth/reducer";
import { useForm } from "../../hooks/useForm";
import '../index.css'

import { IsForgotPasswordEmailSent } from "../../services/auth/selectors";


const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {values, handleChange} = useForm({
        email: ''
    })

    useEffect(() => {
        /* @ts-ignore */
        dispatch(cleaerResetPasswordResponse());
    }, [])

    const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /* @ts-ignore */
        dispatch(tryResetPassword(values.email));

        
    }
    
    const isForgotPasswordEmailSent = IsForgotPasswordEmailSent();
    useEffect(() => {
        if(isForgotPasswordEmailSent)
            navigate('/reset-password');
        
    }, [isForgotPasswordEmailSent, navigate])

    return (<div className='mainPanel'>
            <form onSubmit={handleSubmition}>
                <h2 className='text text_type_main-medium m-5'>Востановление пароля</h2>
                <EmailInput  extraClass='m-5'
                                placeholder='укажите e-mail'
                                isIcon={false} 
                                autoFocus={true}
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                />
                <Button disabled={!values.email}
                 htmlType='submit'>Востановить</Button>
            </form>

            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Вспомнили пароль? <Link to='/login'>Войти</Link></span>
            </div>
    </div>);
}

export default ForgotPassword;