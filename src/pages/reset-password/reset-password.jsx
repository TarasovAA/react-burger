import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (<div style={{display: 'flex', height: '50vh', margin: '0 auto', alignItems: 'center'}}>
    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <form>
                <h2 className='text text_type_main-medium m-5'>Востановление пароля</h2>
                <PasswordInput extraClass='m-5' placeholder='Введите новый пароль' isIcon={false} />
                <Input extraClass='m-5' placeholder='Введите код из письма' />
                <Button  htmlType='submit'>Сохранить</Button>
            </form>

            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Вспомнили пароль? <Link to='/login'>Войти</Link></span>
            </div>
    </div>
    </div>);
}

export default ResetPassword;