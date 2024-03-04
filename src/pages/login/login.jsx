import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from '../../services/actions/auth';
import { useForm } from '../../hooks/useForm';
import { ErrorBlock } from '../../local-uikit/components';
import '../index.css';

const Login = () => {
    const {values, handleChange, setValues} = useForm({
        email: '',
        password: ''
    });

    const errorMessage = useSelector(store => store.user.errorMessage);
   
    const dispatch = useDispatch();

    const loginClickHandler = (e) => {
        e.preventDefault();

        dispatch(loginUser({
            email: values.email,
            password: values.password
        }));
    }

    return (<div className='mainPanel'>
            <form onSubmit={loginClickHandler}>
                <h2 className='text text_type_main-medium m-5'>Вход</h2>
                <EmailInput
                    extraClass='m-5'
                    placeholder='E-mail'
                    isIcon={false}
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    />
                <PasswordInput
                    extraClass='m-5'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    />
                <Button
                    htmlType='submit'
                    disabled={!values.email || !values.password}>
                        Войти
                </Button>
            </form>
            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Вы - новый пользователь? <Link to='/register'>Зарегестрироваться</Link></span>
                <p />
                <span>Забыли пароль? <Link to='/forgot-password'>Востановить пароль</Link></span>
            </div>
        <ErrorBlock message={errorMessage} />
    </div>);
}

export default Login;