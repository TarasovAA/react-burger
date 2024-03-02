import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../services/actions/auth';


const Register = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(store => store.user.user);

    const clickRegistorButtonHandler = (e) => {
        e.preventDefault();

        dispatch(createNewUser({
            email: userEmail,
            password: userPassword,
            name: userName
        }));

    }

    return (<div style={{display: 'flex', height: '80vh', margin: '0 auto', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            {user && <Navigate to="/profile" /> }
            <form>
                <h2 className='text text_type_main-medium m-5'>Регистрация</h2>
                <Input 
                extraClass='m-5'
                placeholder='Имя'
                isIcon={false}
                value={userName}
                onChange={e => setUserName(e.target.value)}
                />
                <EmailInput 
                    extraClass='m-5'
                    placeholder='E-mail'
                    isIcon={false}
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                    />
                <PasswordInput
                extraClass='m-5'
                name='Пароль'
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
                />
                <Button 
                    htmlType='submit'
                    disabled={!userName || !userEmail || !userPassword}
                    onClick={clickRegistorButtonHandler}
                    >Зарегестрироваться</Button>
            </form>
           
            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Уже зарегистрированы? <Link to='/login'>Войти</Link></span>
            </div>
         </div>
    </div>);
}

export default Register;