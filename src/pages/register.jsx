import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

const Register = () => {
    return (<div style={{display: 'flex', height: '80vh', margin: '0 auto', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <form>
                <h2 className='text text_type_main-medium m-5'>Регистрация</h2>
                <Input extraClass='m-5' placeholder='Имя' isIcon={false} />
                <EmailInput extraClass='m-5' placeholder='E-mail' isIcon={false} />
                <PasswordInput extraClass='m-5' name='Пароль' />
                <Button htmlType='submit'>Зарегестрироваться</Button>
            </form>
           
            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Уже зарегистрированы? <Link to='/login'>Войти</Link></span>
            </div>
         </div>
    </div>);
}

export default Register;