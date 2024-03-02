import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryResetPassword } from "../../services/actions/auth";
import { cleaerResetPasswordResponse } from "../../services/reducers/auth";


const ForgotPassword = () => {
    const dispatch = useDispatch();

    const {tryResetPasswordSuccess} = useSelector(store => store.tryResetPasswordReducer);

    const [email, setEmail] = useState(null);

    useEffect(() => {
        dispatch(cleaerResetPasswordResponse());
    }, [])

    const handleSubmition = (e) => {
        e.preventDefault();

        dispatch(tryResetPassword(email));
    }
    
    return (<div style={{display: 'flex', height: '50vh', margin: '0 auto', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <form onSubmit={handleSubmition}>
                {tryResetPasswordSuccess && <Navigate to='/reset-password' />}
                <h2 className='text text_type_main-medium m-5'>Востановление пароля</h2>
                <EmailInput  extraClass='m-5'
                                placeholder='укажите e-mail'
                                isIcon={false} 
                                autoFocus={true}
                                onChange={e => setEmail(e.target.value)}
                                />
                <Button disabled={!email}
                 htmlType='submit'>Востановить</Button>
            </form>

            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Вспомнили пароль? <Link to='/login'>Войти</Link></span>
            </div>
    </div>
    </div>);
}

export default ForgotPassword;