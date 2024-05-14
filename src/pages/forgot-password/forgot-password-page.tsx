import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React,{useEffect} from "react";
import { useDispatch } from "../../services/hooks";
import { tryResetPassword } from "../../services/auth/action";
import { cleaerResetPasswordResponse } from "../../services/auth/reducer";
import { useForm } from "../../hooks/useForm";
import '../index.css'

import { isForgotPasswordEmailSent } from "../../services/auth/selectors";


const ForgotPasswordPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {values, handleChange} = useForm({
        email: ''
    })

    useEffect(() => {
        dispatch(cleaerResetPasswordResponse());
    }, [])

    const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        dispatch(tryResetPassword(values.email));

        
    }
    
    const forgotPasswordEmailSent = isForgotPasswordEmailSent();
    
    useEffect(() => {
        if(forgotPasswordEmailSent)
            navigate('/reset-password');
        
    }, [forgotPasswordEmailSent, navigate])

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

export default ForgotPasswordPage;