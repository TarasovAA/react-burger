import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { loginUser } from '../../services/actions/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch();

    const loginClickHandler = (e) => {
        e.preventDefault();

        dispatch(loginUser({
            email: email,
            password: password
        }));
    }

    return (<div style={{display: 'flex', height: '80vh', margin: '0 auto', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <form onSubmit={loginClickHandler}>
                <h2 className='text text_type_main-medium m-5'>Вход</h2>
                <EmailInput
                    extraClass='m-5'
                    placeholder='E-mail'
                    isIcon={false}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <PasswordInput
                    extraClass='m-5'
                    name='Пароль'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                <Button
                    htmlType='submit'
                    disabled={!email || !password}>
                        Войти
                </Button>
            </form>

            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Вы - новый пользователь? <Link to='/register'>Зарегестрироваться</Link></span>
                <p />
                <span>Забыли пароль? <Link to='/forgot-password'>Востановить пароль</Link></span>
            </div>
            
        </div>
    </div>);
}

export default Login;