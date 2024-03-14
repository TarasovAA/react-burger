import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryResetPassword } from "../../services/actions/auth";
import { cleaerResetPasswordResponse } from "../../services/reducers/auth";
import { useForm } from "../../hooks/useForm";
import '../index.css'


const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {values, handleChange, setValues} = useForm({
        email: ''
    })

    useEffect(() => {
        dispatch(cleaerResetPasswordResponse());
    }, [])

    const handleSubmition = (e) => {
        e.preventDefault();

        dispatch(tryResetPassword(values.email));

        
    }
    
    const {isForgotPasswordEmailSent} = useSelector(store => store.user);
    useEffect(() => {
        if(isForgotPasswordEmailSent)
            navigate('/reset-password');
        
    }, [isForgotPasswordEmailSent])

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