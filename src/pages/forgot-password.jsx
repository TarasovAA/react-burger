import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (<div style={{display: 'flex', height: '50vh', margin: '0 auto', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <form>
                <h2 className='text text_type_main-medium m-5'>Востановление пароля</h2>
                <EmailInput extraClass='m-5' placeholder='укажите e-mail' isIcon={false} />
                <Button htmlType='submit'>Войти</Button>
            </form>

            <div className='text text_type_main-default text_color_inactive p-10'>
                <span>Вспомнили пароль? <Link to='/login'>Войти</Link></span>
            </div>
    </div>
    </div>);
}

export default ForgotPassword;