import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

const Login = () => {
    return (<div style={{display: 'flex', height: '80vh', margin: '0 auto', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <form>
                <h2 className='text text_type_main-medium m-5'>Вход</h2>
                <EmailInput extraClass='m-5' placeholder='E-mail' isIcon={false} />
                <PasswordInput extraClass='m-5' name='Пароль' />
                <Button htmlType='submit'>Войти</Button>
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