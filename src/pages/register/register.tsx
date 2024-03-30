import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../../services/auth/action';
import { useForm } from '../../hooks/useForm';
import { ErrorBlock } from '../../local-uikit/components';
import '../index.css';
import { TUserInfo } from '../../utils/types';


const Register = () => {
    const {values, handleChange} = useForm({
        userName: '',
        userEmail: '',
        userPassword: ''
    });


    const dispatch = useDispatch();
     /* @ts-ignore */
    const {user, errorMessage} = useSelector(store => store.user);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userInfo: TUserInfo = {
            email: values.userEmail,
            password: values.userPassword,
            name: values.userName
        };

         /* @ts-ignore */
        dispatch(registerNewUser(userInfo));

    }

    return (<div className='mainPanel'>
            {user && <Navigate to="/profile" /> }
            <form onSubmit={handleSubmit}>
                <h2 className='text text_type_main-medium m-5'>Регистрация</h2>
                <Input 
                extraClass='m-5'
                placeholder='Имя'
                name='userName'
                value={values.userName}
                onChange={handleChange}
                />
                <EmailInput 
                    extraClass='m-5'
                    placeholder='E-mail'
                    isIcon={false}
                    name='userEmail'
                    value={values.userEmail}
                    onChange={handleChange}
                    />
                <PasswordInput
                extraClass='m-5'
                name='userPassword'
                value={values.userPassword}
                onChange={handleChange}
                />
                <Button 
                    htmlType='submit'
                    disabled={!values.userName || !values.userEmail || !values.userPassword}
                    >Зарегестрироваться</Button>
            </form>
           
            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Уже зарегистрированы? <Link to='/login'>Войти</Link></span>
            </div>

         <ErrorBlock message={errorMessage} />
    </div>);
}

export default Register;