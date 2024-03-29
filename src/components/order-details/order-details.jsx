import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.module.css';
import { useSelector } from 'react-redux';
import { Loader } from '../../local-uikit/components';

const OrderDetails = () => {
   const {orderNamber, isCreating} = useSelector(store => store.order)
   
   return (
      <div className={style.orderWindow}>
         {
            isCreating ? <Loader /> :
            ( <>
               <div>
                  <p className="text text_type_digits-large  text_color_inactive">
                     {orderNamber}
                  </p>
               </div>
               <div className="mt-8">
                  <p className="text text_type_main-large">индентификатор заказа</p>
               </div>
               <div className="mt-15">
                  <CheckMarkIcon />
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