import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.module.css';
import { Loader } from '../../local-uikit/components';
import { GetOrderRequestData } from '../../services/order/selector';

const OrderDetails = () => {
   const {orderNamber, isCreating} = GetOrderRequestData();
   
   return (
      <div className={style.orderWindow}>
         {
            isCreating ? <Loader /> :
            ( <>
               <div>
                  <p className="text text_type_digits-large  text_color_inactive">
                     {orderNamber && orderNamber}
                  </p>
               </div>
               <div className="mt-8">
                  <p className="text text_type_main-large">индентификатор заказа</p>
               </div>
               <div className="mt-15">
                  <CheckMarkIcon
                   type='primary'/>
               </div>
               <div className='mt-15'>
                  <p className="text text_type_main-medium ">Ваш заказ начали говить</p>
               </div>
               <div className='mt-2 mb-30'>
                  <p className="text text_type_main-medium  text_color_inactive">Дождитесь готовности на орибитальной станции</p>
               </div>
               </>
            )
         }
        
         
      </div>);
}

export default OrderDetails; 