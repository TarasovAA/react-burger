import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import proptypes from 'prop-types'
import style from './modal.module.module.css'

const OrderDetails = ({ orderIndex }) => {
   return (
      <div className={style.orderWindow}>
         <div>
            <p className="text text_type_digits-large  text_color_inactive">
               {orderIndex}
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
      </div>);
}

OrderDetails.propTypes = {
   orderIndex: proptypes.string
}

export default OrderDetails; 